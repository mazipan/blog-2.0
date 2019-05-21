<template>
  <div class="now">
    <div class="space-bottom text-title">
      <h1>Now</h1>
    </div>
    <ul>
      <li>Step out from Facebook, Instagram and Twitter for temporary 📵</li>
      <li>Helping Vue.js Indonesia translating official documentation to Bahasa Indonesia 🌐</li>
      <li>Learning about TypeScript 🍰</li>
      <li>Learning about React and it's ecosystems 🍜</li>
      <li>Preparing next journey 🚀</li>
      <li>Try to reading some non-technical books 📚</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NowPage',
  head () {
    const title = `Now | @mazipan`
    const description = `Page Now`
    const url = `${this.productionUrl}/now/`
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
.now {
  ul > li {
    line-height: 2;
  }
}
</style>
