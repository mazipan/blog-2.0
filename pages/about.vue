<template>
  <div class="about">
    <div class="space-bottom text-title">
      <h1>About</h1>
    </div>
    <div>
      Hello, my name is Irfan Maulana, software engineer from Indonesia.
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head () {
    const title = `About | @mazipan`
    const description = `Page About`
    const url = `${this.productionUrl}/about/`
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
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
