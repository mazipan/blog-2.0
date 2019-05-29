<template>
  <div class="archives">
    <div class="space-bottom text-title">
      <h1>Archives</h1>
    </div>
    <table width="100%">
      <tr
        v-for="blog in blogs"
        :key="blog.title"
        style="vertical-align: top; line-height: 2;">
        <td width="150px">
          {{ formatPostDate(blog.date) }}
        </td>
        <td width="20px">
          •
        </td>
        <td>
          <nuxt-link
            :to="`/amp/${blog.slug}/?utm_source=archives`"
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

export default {
  name: 'ArchivesPage',
  layout: 'amp-default',
  head () {
    const title = `Archives | @mazipan`
    const description = `Page Archives`
    const url = `${this.productionUrl}/archives/`
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
        { hid: 'canonical', rel: 'canonical', href: url }
      ]
    }
  },
  data () {
    return {
      formatReadingTime,
      formatPostDate,
      productionUrl: 'https://www.mazipan.xyz'
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (blogName) {
      const allMarkdown = await import(`~/contents/published/${blogName}/index.md`)
      return allMarkdown.attributes
    }
    return Promise.all(Contents.data.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
  }
}
</script>
