import {
  DATA_CONTENTS,
  DATA_DRAFTS,
  DATA_CATEGORIES,
  DATA_GHIBAH,
  DATA_OTHER,
  ROOT_DRAFT,
  ROOT_GHIBAH,
  ROOT_CATEGORY
} from '../constants'

/*
 * Helpers by Dan Abramov's Overreacted.io
 * https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js
 */
export function formatReadingTime (minutes) {
  const cups = Math.round(minutes / 10)
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
}

export function formatPostDate (date) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)
  const args = [
    'en-EN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  ].filter(Boolean)
  return date.toLocaleDateString(...args)
}

// script from https://davidwalsh.name/javascript-debounce-function
export function debounce (func, wait, immediate) {
  var timeout
  return function () {
    var context = this; var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
};

export function replaceLazyloadImg (str) {
  return str &&
    str
      .replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi, '"src"')
}

export function generateMetaHead ({
  title = '',
  description = '',
  url = '',
  imageUrl = '',
  ampUrl = '',
  publishedDate = new Date(),
  articleSection = 'Technology',
  withAmpHtml = false,
  withCanonical = false,
  withArticle = false
}) {
  let meta = [
    { hid: 'description', name: 'description', content: description },
    { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },

    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },

    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    { hid: 'twitter:url', name: 'twitter:url', content: url }
  ]

  const metaImage = [
    { hid: 'og:image', property: 'og:image', content: imageUrl },
    { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: imageUrl },
    { hid: 'twitter:image:src', name: 'twitter:image:src', content: imageUrl }
  ]

  const metaArticle = [
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'article:published_time', property: 'article:published_time', content: new Date(publishedDate).toISOString() },
    { hid: 'article:section', property: 'article:section', content: articleSection }
  ]

  if (imageUrl) {
    meta = [...meta, ...metaImage]
  }

  if (withArticle) {
    meta = [...meta, ...metaArticle]
  }

  let link = []
  if (withAmpHtml) {
    link = [
      { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
    ]
  }

  if (withCanonical) {
    link = [
      { hid: 'canonical', rel: 'canonical', href: url }
    ]
  }

  return {
    title,
    meta: meta,
    link: link
  }
}

export async function getMarkdownData ({
  subDir = 'published',
  slug = '',
  lang = 'ID'
}) {
  const markdownFile = lang === 'ID' ? 'index.md' : 'en.md'
  const result = await import(`~/contents/${subDir}/${slug}/${markdownFile}`)
  return result
}

export function readAllMarkdown (array, subDir, lang) {
  return Promise.all(
    array.map(slug => getMarkdownData({ subDir, slug, lang }))
  ).then((res) => {
    return {
      metas: res.attributes
    }
  })
}

export async function readMarkdown (subDir, slug, lang) {
  const res = await getMarkdownData({ subDir, slug, lang })

  return {
    lang,
    meta: res.attributes,
    renderFn: res.vue.render,
    staticRenderFn: res.vue.staticRenderFns
  }
}

export function getAllGeneratedUrl () {
  const generateUrl = (array, rootUrl, hasAmp, hasLocale) => {
    if (hasAmp) {
      const concatUrls = (item) => {
        if (hasLocale) {
          return [`${rootUrl}/${item}`, `${rootUrl}/${item}/en`, `/amp${rootUrl}/${item}`, `/amp${rootUrl}/${item}/en`]
        }
        return [`${rootUrl}/${item}`, `/amp${rootUrl}/${item}`]
      }

      return array.data.reduce((list, item) => list.concat(concatUrls(item)), [])
    } else {
      return array.data.map(item => {
        item = `${rootUrl}/${item}`
        return item
      })
    }
  }

  const urlDrafts = generateUrl(DATA_DRAFTS, ROOT_DRAFT)
  const urlGhibahs = generateUrl(DATA_GHIBAH, ROOT_GHIBAH)
  const urlCategories = generateUrl(DATA_CATEGORIES, ROOT_CATEGORY, true)
  const urlContents = generateUrl(DATA_CONTENTS, '', true, true)

  return [
    ...urlContents,
    ...urlDrafts,
    ...urlGhibahs,
    ...urlCategories,
    DATA_OTHER
  ]
}

export function generateObjectSitemap (array) {
  return array
    .filter(el => el.indexOf('/drafts') < 0)
    .map(el => {
      return {
        url: el + '/',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: String(new Date().toISOString())
      }
    })
}
