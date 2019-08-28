<template>
  <div class="talks">
    <div class="space-bottom text-title">
      <h1>Talks</h1>
    </div>
    <table width="100%" />
  </div>
</template>

<script>
import BaseData from '~/mixins/base-data'

export default {
  name: 'TalksPage',
  mixins: [
    BaseData
  ],
  head () {
    const title = 'Talks by Irfan Maulana | @mazipan'
    const description = 'Page Talks by Irfan Maulana'
    const url = `${this.productionUrl}/talks/`
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
