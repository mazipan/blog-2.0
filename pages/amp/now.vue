<template>
  <div class="now">
    <div class="space-bottom text-title">
      <h1>Now</h1>
    </div>
    <ul>
      <li>Learning about React and it's ecosystems 🍜</li>
      <li>Helping "The Owl 🦉" </li>
      <li>Try to reading some non-technical books 📚</li>
    </ul>
  </div>
</template>

<script>
import BaseData from '~/mixins/base-data'

export default {
  name: 'NowPageamp',
  layout: 'amp-default',
  mixins: [
    BaseData
  ],
  head () {
    const title = 'Now | @mazipan'
    const description = 'Page Now'
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
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: url }
      ]
    }
  }
}
</script>

<style lang="scss">
.now {
  ul > li {
    line-height: 2;
  }
}
</style>
