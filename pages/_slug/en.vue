<template>
  <section class="postdetail-EN">
    <PostDetail
      lang="EN"
      :meta="meta"
      :render-fn="renderFn"
      :static-render-fn="staticRenderFn" />
  </section>
</template>

<script>
import PostDetail from '~/pages-partials/PostDetail.vue'
import PostDetailHead from '~/mixins/post-detail-head'

import {
  PRODUCTION_URL
} from '~/constants'

export default {
  name: 'SlugPageEn',
  components: {
    PostDetail
  },
  mixins: [
    PostDetailHead
  ],
  data () {
    return {
      productionUrl: PRODUCTION_URL
    }
  },
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/published/${params.slug}/en.md`)

    const attr = fileContent.attributes
    return {
      lang: 'EN',
      meta: attr,
      renderFn: fileContent.vue.render,
      staticRenderFn: fileContent.vue.staticRenderFns
    }
  }
}
</script>
