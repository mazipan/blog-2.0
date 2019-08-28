<template>
  <div class="category">
    <div class="space-bottom text-title">
      <h1>Category #{{ category }}</h1>
    </div>
    <table width="100%">
      <tr
        v-for="(blog, index) in blogs"
        :key="blog.title"
        style="vertical-align: top; line-height: 2;">
        <td
          v-if="ENABLE_ADS && (index > 0 && index % 3 === 0)"
          colspan="3">
          <InFeedAdsense
            root-class="VueAdsense"
            data-ad-layout-key="-fg+5n+6t-e7+r"
            :data-ad-client="ADS_CLIENT"
            data-ad-slot="2105028631" />
        </td>
        <td width="150px">
          {{ formatPostDate(blog.date) }}
        </td>
        <td width="20px">
          •
        </td>
        <td>
          <nuxt-link
            :to="`/${blog.slug}/?utm_source=archives`"
            :title="blog.title">
            {{ blog.title }}
          </nuxt-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { formatReadingTime, formatPostDate } from '~/utils/helpers.js'
import Contents from '~/contents/index.js'

import {
  ENABLE_ADS,
  ADS_CLIENT,
  PRODUCTION_URL
} from '~/constants'

export default {
  name: 'CategoryPage',
  head () {
    const title = `Category ${this.category} | @mazipan`
    const description = `All article with ${this.category} category`
    const url = `${this.productionUrl}/category/${this.category}`
    const ampUrl = `${this.productionUrl}/amp/category/${this.category}`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ],
      link: [
        { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
      ]
    }
  },
  data () {
    return {
      formatReadingTime,
      formatPostDate,
      productionUrl: PRODUCTION_URL,
      ENABLE_ADS,
      ADS_CLIENT
    }
  },
  async asyncData ({ params }) {
    async function asyncImport (blogName) {
      const allMarkdown = await import(`~/contents/published/${blogName}/index.md`)
      return allMarkdown.attributes
    }
    return Promise.all(Contents.data.map(blog => asyncImport(blog)))
      .then((response) => {
        return {
          category: params.category,
          blogs: response.filter(item => item.categories.includes(params.category))
        }
      })
  }
}
</script>

<style lang="scss">

</style>
