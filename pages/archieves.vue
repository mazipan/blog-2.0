<template>
  <div class="archieves">
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
import Contents from '../contents/index.js'
import { formatReadingTime, formatPostDate } from '../utils/helpers.js'

export default {
  name: 'ArchievesPage',
  data () {
    return {
      formatReadingTime,
      formatPostDate
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (blogName) {
      const allMarkdown = await import(`~/contents/markdown/${blogName}/index.md`)
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
