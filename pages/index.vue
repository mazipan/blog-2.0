<template>
  <section class="page-content">
    <div
      v-for="blog in blogs"
      :key="blog.title">
      <nuxt-link
        :to="`/${blog.slug}`">
        <h2>{{ blog.title }}</h2>
      </nuxt-link>
      <small>{{ blog.date }}</small>
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

export default {
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

<style>

</style>
