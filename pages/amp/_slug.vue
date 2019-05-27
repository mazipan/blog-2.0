<template>
  <section class="page">
    <h1 class="page__title text-title">
      {{ meta.title }}
    </h1>
    <MetaData
      :meta-date="meta.date"
      :meta-minute-to-read="meta.minute2read"
      :is-show-stats="false" />
    <div class="page__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />
      <EditContentNav
        :slug="meta.slug" />
    </div>
    <hr>
    <div class="page__footer">
      🚨Do you like this article? help me to click ❤️ button, share to your followers and subscribe the newsletter.
    </div>
  </section>
</template>

<script>
import MetaData from '../../components/MetaData'
import ContentParser from '../../components/ContentParser'
import EditContentNav from '../../components/EditContentNav'
import { formatReadingTime, formatPostDate } from '../../utils/helpers.js'

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
      meta: {
        title: attr.title,
        slug: attr.slug,
        date: attr.date,
        minute2read: attr.minute2read,
        description: attr.description
      },
      renderFn: fileContent.vue.render,
      staticRenderFn: fileContent.vue.staticRenderFns
    }
  }
}
</script>

<style lang="scss">
.page {
  &__title {
    font-size: 2em;
    margin-bottom: .25em;
  }
  &__content {
    width: 100%;
    word-break: break-word;
    margin: 2em 0;
  }
  &__date {
    color: var(--textSubtitle);
  }
  &__footer{
    margin: 1em 0;
  }
}

.block-wrap{
  margin: 1em 0;
  display: flex;
  justify-items: center;
  align-items: center;
}

.like, .share{
  display: flex;
  &-btn{
    color: var(--textNormal);
    background: var(--textLink);
    padding: .25em 1em;
    border-radius: .25em;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-right: 1em;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
