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
