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
import PostDetail from '~/pages-partials/PostDetailAmp.vue'
import PostDetailHead from '~/mixins/post-detail-head-amp'

import {
  PRODUCTION_URL
} from '~/constants'

import {
  replaceLazyloadImg
} from '~/utils/helpers'

export default {
  name: 'SlugPageEnAmp',
  layout: 'amp-default',
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
      renderFn: replaceLazyloadImg(fileContent.vue.render),
      staticRenderFn: replaceLazyloadImg(fileContent.vue.staticRenderFns)
    }
  }
}
</script>
