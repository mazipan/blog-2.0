<template>
  <section class="pages">
    <div
      v-for="blog in blogs"
      :key="blog.title"
      class="pages__item">
      <nuxt-link
        :to="`/${blog.slug}/`"
        :title="blog.title"
        class="pages__link">
        <h2 class="pages__title">
          {{ blog.title }}
        </h2>
      </nuxt-link>
      <div class="meta">
        <small class="meta__date">{{ formatPostDate(blog.date) }}</small>
        <small class="dot"> • </small>
        <small class="meta__read">{{ formatReadingTime(blog.minute2read) }}</small>
      </div>
      <div>
        <p>
          {{ blog.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Contents from '../contents/index.js'
import { formatReadingTime, formatPostDate } from '../utils/helpers.js'

export default {
  name: 'Homepage',
  layout: 'homepage',
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
.pages {
  &__title {
    margin-bottom: .25em;
  }
  &__date {
    color: var(--textSubtitle);
  }
  &__item {
    margin-bottom: 3.5em;
  }
}
</style>
