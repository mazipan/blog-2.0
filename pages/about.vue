<template>
  <div class="about">
    <div class="space-bottom text-title">
      <h1>About</h1>
    </div>
    <div>
      Hi, I am Irfan Maulana. Software Architect in Bizzy Indonesia, former Software Engineer in Blibli.com and SML Technologies.
      <br>
      An experience software engineer especially in frontend side. Having deep knowledge in HTML, CSS (with it's pre-processor) and JavaScript with various framework. Write good quality, well tested, and fast delivered code.
      <br>
      Experience in architecting frontend codebase.
      <br>
      Well known figure in programming community, open-source creator, and writer for many technical article.
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
