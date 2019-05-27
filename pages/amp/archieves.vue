<template>
  <div class="archieves">
    <div class="space-bottom text-title">
      <h1>Archieves</h1>
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
            :to="`/${blog.slug}/`"
            :title="blog.title">
            {{ blog.title }}
          </nuxt-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Contents from '../../contents/index.js'
import { formatReadingTime, formatPostDate } from '../../utils/helpers.js'

export default {
  name: 'ArchievesPage',
  head () {
    const title = `Archieves | @mazipan`
    const description = `Page Archieves`
    const url = `${this.productionUrl}/archieves/`
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
      links: [
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
    return Promise.all(Contents.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
