<template>
  <section class="page">
    <nuxt-link
      :to="`/${meta.slug}`"
      class="page__link">
      <h2 class="page__title">
        {{ meta.title }}
      </h2>
    </nuxt-link>
    <div class="meta">
      <small class="meta__date">{{ meta.date }}</small>
      <small class="dot"> • </small>
      <small class="meta__read">{{ formatReadingTime(meta.minute2read) }}</small>
    </div>
    <div class="page__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />
    </div>
  </section>
</template>

<script>
import ContentParser from '../components/ContentParser'
import { formatReadingTime } from '../utils/helpers.js'

export default {
  name: 'SlugPage',
  components: {
    ContentParser
  },
  data () {
    return {
      formatReadingTime
    }
  },
  async asyncData ({ params, store }) {
    const fileContent = await import(`~/contents/markdown/${params.slug}/index.md`)
    const attr = fileContent.attributes
    return {
      meta: {
        params: params,
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
}
</style>
