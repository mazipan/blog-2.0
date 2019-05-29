<template>
  <section class="postdetail-EN">
    <PostDetail
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
    const fileContent = await import(`~/contents/published/${params.slug}/en.md`)

    const attr = fileContent.attributes
    return {
      meta: attr,
      renderFn: fileContent.vue.render,
      staticRenderFn: fileContent.vue.staticRenderFns
    }
  }
}
</script>
