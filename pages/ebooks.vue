<template>
  <div class="ebooks">
    <div class="space-bottom text-title">
      <h1>E-Books</h1>
    </div>
    <table width="100%" />
  </div>
</template>

<script>
import BaseData from '~/mixins/base-data'

export default {
  name: 'EbooksPage',
  mixins: [
    BaseData
  ],
  head () {
    const title = 'E-Book collections | @mazipan'
    const description = 'Page E-Book collections'
    const url = `${this.productionUrl}/ebooks/`
    // const ampUrl = `${this.productionUrl}/amp/archives/`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ]
      // link: [
      //   { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
      // ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
