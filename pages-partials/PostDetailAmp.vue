<template>
  <section class="pages">
    <h1 class="pages__title pages__title--small text-title">
      {{ meta.title }}
    </h1>

    <div
      v-if="lang === 'ID'"
      class="pages__lang">
      <nuxt-link :to="`/amp/${meta.slug}/en?utm_source=lang`">
        Switch to  🇬🇧 language
      </nuxt-link>
    </div>

    <div
      v-if="lang === 'EN'"
      class="pages__lang">
      <nuxt-link :to="`/amp/${meta.slug}/?utm_source=lang`">
        Switch to  🇮🇩 language
      </nuxt-link>
    </div>

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

    <script
      type="application/ld+json"
      v-html="jsonLdBreadcrumb" />
    <script
      type="application/ld+json"
      v-html="jsonLdArtcile" />
  </section>
</template>

<script>
import MetaData from '~/components/MetaData'
import ContentParser from '~/components/ContentParser'
import EditContentNav from '~/components/EditContentNav'
import { formatReadingTime, formatPostDate } from '~/utils/helpers.js'

import {
  constructJsonLdBreadcrumb,
  constructJsonLdArticle
} from '~/utils/jsonld.js'

export default {
  name: 'PostDetailAmpPartial',
  components: {
    MetaData,
    EditContentNav,
    ContentParser
  },
  props: {
    lang: {
      type: String,
      default: 'ID'
    },
    meta: {
      type: Object,
      default: () => {}
    },
    renderFn: {
      type: String,
      default: ''
    },
    staticRenderFn: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz',
      formatReadingTime,
      formatPostDate
    }
  },
  computed: {
    jsonLdBreadcrumb () {
      return constructJsonLdBreadcrumb({
        category: this.meta.categories[0],
        title: this.meta.title,
        slug: this.meta.slug
      })
    },
    jsonLdArtcile () {
      return constructJsonLdArticle({
        category: this.meta.categories[0],
        title: this.meta.title,
        slug: this.meta.slug,
        cover: this.meta.cover,
        date: this.meta.date,
        desc: this.meta.description
      })
    }
  }
}
</script>
