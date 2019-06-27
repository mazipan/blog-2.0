<template>
  <div class="interviews">
    <div class="space-bottom text-title">
      <h1>Interviews</h1>
    </div>
    <table width="100%">

    </table>
  </div>
</template>

<script>
export default {
  name: 'InterviewsPage',
  head () {
    const title = `Interviews | @mazipan`
    const description = `Page Interviews`
    const url = `${this.productionUrl}/interviews/`
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
      ],
      // link: [
      //   { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
      // ]
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
