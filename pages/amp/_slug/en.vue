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

function replaceLazyloadImg (str) {
  return str &&
    str
      .replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi, '"src"');
}

export default {
  name: 'SlugPageEnAmp',
  layout: 'amp-default',
  components: {
    PostDetail,
  },
  mixins: [
    PostDetailHead
  ],
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz'
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
