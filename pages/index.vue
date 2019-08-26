<template>
  <section class="pages">
    <div
      v-for="(meta, index) in metas"
      :key="meta.title"
      class="pages__item">
      <span
        v-if="meta.sponsored"
        class="pages__sponsored">sponsored</span>
      <nuxt-link
        :to="`/${meta.slug}/?utm_source=home`"
        :title="meta.title"
        class="pages__link">
        <h2 class="pages__title">
          {{ meta.title }}
        </h2>
      </nuxt-link>
      <MetaData
        :meta-date="meta.date"
        :meta-minute-to-read="meta.minute2read" />
      <div>
        <p>
          {{ meta.description }}
        </p>
      </div>

      <div class="pages__tags">
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

      <InFeedAdsense
        v-if="ENABLE_ADS && (index > 0 && index % 3 === 0)"
        root-class="VueInFeedAdsense"
        data-ad-layout-key="-fg+5n+6t-e7+r"
        :data-ad-client="ADS_CLIENT"
        data-ad-slot="2105028631" />
    </div>
  </section>
</template>

<script>
import Contents from '~/contents/index.js'
import { formatReadingTime, formatPostDate } from '~/utils/helpers.js'
import MetaData from '~/components/MetaData'

import {
  ENABLE_ADS,
  ADS_CLIENT,
  PRODUCTION_URL
} from '~/constants'

export default {
  name: 'Homepage',
  layout: 'homepage',
  components: {
    MetaData
  },
  head () {
    const ampUrl = `${this.productionUrl}/amp/`
    return {
      link: [
        { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
      ]
    }
  },
  data () {
    return {
      productionUrl: PRODUCTION_URL,
      formatReadingTime,
      formatPostDate,
      ENABLE_ADS,
      ADS_CLIENT
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (blogSlug) {
      const allMarkdown = await import(`~/contents/published/${blogSlug}/index.md`)
      return allMarkdown.attributes
    }

    return Promise.all(Contents.data.map(blogSlug => asyncImport(blogSlug)))
      .then((res) => {
        return {
          metas: res
        }
      })
  }
}
</script>
