<template>
  <section class="postdetail-ID">
    <PostDetail
      lang="ID"
      :meta="meta"
      :render-fn="renderFn"
      :static-render-fn="staticRenderFn" />
  </section>
</template>

<script>
import PostDetail from '~/pages-partials/PostDetail.vue'
import PostDetailHead from '~/mixins/post-detail-head'

export default {
  name: 'SlugPage',
  components: {
    PostDetail
  },
  mixins: [
    PostDetailHead
  ],
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/published/${params.slug}/index.md`)

    const attr = fileContent.attributes
    return {
      meta: attr,
      renderFn: fileContent.vue.render,
      staticRenderFn: fileContent.vue.staticRenderFns
    }
  }
}
</script>
