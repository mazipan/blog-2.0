<template>
  <section class="pages">
    <h1 class="pages__title pages__title--small text-title">
      {{ meta.title }}
    </h1>
    <MetaData
      :meta-date="meta.date"
      :meta-minute-to-read="meta.minute2read"
      :is-show-stats="false" />
    <div class="pages__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />

      <InArticleAdsense
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="7974047383" />
    </div>
  </section>
</template>

<script>
import MetaData from '~/components/MetaData'
import ContentParser from '~/components/ContentParser'
import { formatReadingTime, formatPostDate } from '~/utils/helpers.js'

export default {
  name: 'DraftPage',
  components: {
    MetaData,
    ContentParser
  },
  head () {
    const title = `${this.meta.title} | Ghibah Programmer`
    const description = `${this.meta.description}`
    const url = `${this.productionUrl}/ghibah/${this.meta.slug}/`
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
      ]
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz',
      formatReadingTime,
      formatPostDate
    }
  },
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/ghibah/${params.slug}/index.md`)

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

<style lang="scss" scoped>
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
