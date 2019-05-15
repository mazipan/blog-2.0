<template>
  <div>
    <nuxt-link to="/">
      🏠 Back to Home
    </nuxt-link>
    <span class="dot"> • </span>
    <a
      target="_blank"
      rel="noopener"
      title="Edit in Github"
      :href="markdownLocation">
      📝 Edit in Github
    </a>
  </div>
</template>

<script>
export default {
  name: 'EditContentNav',
  props: {
    slug: {
      type: String,
      default: ''
    },
    isDraft: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    markdownLocation () {
      if (this.isDraft) {
        return `https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/${this.slug}/index.md`
      }
      return `https://github.com/mazipan/blog-2.0/edit/master/contents/published/${this.slug}/index.md`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
