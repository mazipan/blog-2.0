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
import PostDetail from '~/pages-partials/PostDetailAmp.vue'
import PostDetailHead from '~/mixins/post-detail-head-amp'
import BaseData from '~/mixins/base-data'

import {
  replaceLazyloadImg
} from '~/utils/helpers'

export default {
  name: 'SlugPageIdAmp',
  layout: 'amp-default',
  components: {
    PostDetail
  },
  mixins: [
    BaseData,
    PostDetailHead
  ],
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/published/${params.slug}/index.md`)

    const attr = fileContent.attributes
    return {
      lang: 'ID',
      meta: attr,
      renderFn: replaceLazyloadImg(fileContent.vue.render),
      staticRenderFn: replaceLazyloadImg(fileContent.vue.staticRenderFns)
    }
  }
}
</script>
