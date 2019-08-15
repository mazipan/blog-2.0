<template>
  <div class="about">
    <div class="space-bottom text-title">
      <h1>About</h1>
    </div>
    <div>
      <img
        src="/images/profile-rounded.png"
        alt="@mazipan"
        height="76px"
        width="76px">

      <br><br>Hi, I am Irfan Maulana.
      <br><br>Principal Engineer in Tokopedia. Former Software Engineer in Bizzy, Blibli.com and SML Technologies.

      <br><br>An experienced software engineer especially in frontend side.
      <br>Having deep knowledge in HTML, CSS (with its pre-processor) and JavaScript with the various framework. Write good quality, well tested, and fast delivered code.
      <br>Experience in architecting frontend codebase.

      <br><br>A well-known figure in the programming community, open-source creator, and writer for many technical articles.
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
    const ampUrl = `${this.productionUrl}/amp/about/`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: title
        },

        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        { hid: 'og:url', property: 'og:url', content: url },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ],
      link: [
        { hid: 'amphtml', rel: 'amphtml', href: ampUrl }
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
