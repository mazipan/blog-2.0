<template>
  <section class="pages">
    <h1 class="pages__title pages__title--small text-title">
      {{ meta.title }}
    </h1>
    <MetaData
      :meta-date="meta.date"
      :meta-minute-to-read="meta.minute2read"
      :is-show-stats="false" />

    <div class="pages__tags pages__tags--spacetop">
      <div
        v-for="category in meta.categories"
        :key="category"
        class="pages__tag">
        <nuxt-link
          :to="`/category/${category}?utm_source=home`"
          :title="category">
          #{{ category }}
        </nuxt-link>
      </div>
    </div>

    <div class="pages__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />
      <EditContentNav
        :slug="meta.slug" />
    </div>
    <hr>
    <div class="pages__footer">
      🚨Do you like this article? help me to share to your followers.
    </div>
  </section>
</template>

<script>
import MetaData from '~/components/MetaData'
import ContentParser from '~/components/ContentParser'
import EditContentNav from '~/components/EditContentNav'
import { formatReadingTime, formatPostDate } from '~/utils/helpers.js'

function replaceLazyloadImg (str) {
  return str &&
    str
      .replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi, '"src"');
}

export default {
  name: 'SlugPage',
  layout: 'amp-default',
  components: {
    MetaData,
    EditContentNav,
    ContentParser
  },
  head () {
    const title = `${this.meta.title}`
    const description = `${this.meta.description}`
    const url = `${this.productionUrl}/${this.meta.slug}/`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:published_time', property: 'article:published_time', content: new Date(this.meta.date).toISOString() },
        { hid: 'article:section', property: 'article:section', content: 'Technology' },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: url }
      ]
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz',
      formatReadingTime,
      formatPostDate,
      youClapped: 0,
      claps: 0,
      hits: 0,
      isSupportWebshare: false
    }
  },
  computed: {
    encodedTitle () {
      return encodeURIComponent(`${this.meta.title}`)
    },
    encodedDesc () {
      return encodeURIComponent(`${this.meta.description}`)
    },
    encodedUrl () {
      return encodeURIComponent(`${this.productionUrl}/${this.meta.slug}?utm_source=sosial-share`)
    },
    fbLinkShare () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&title=${this.encodedTitle}&description=${this.encodedDesc}&quote=${this.encodedDesc}`
    },
    twitterLinkShare () {
      return `https://twitter.com/intent/tweet?text=${this.encodedTitle}-${this.encodedDesc}&url=${this.encodedUrl}&via=maz_ipan`
    },
    linkedinLinkShare () {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${this.encodedUrl}`
    }
  },
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/published/${params.slug}/index.md`)

    const attr = fileContent.attributes
    return {
      meta: attr,
      renderFn: replaceLazyloadImg(fileContent.vue.render),
      staticRenderFn: replaceLazyloadImg(fileContent.vue.staticRenderFns)
    }
  }
}
</script>
