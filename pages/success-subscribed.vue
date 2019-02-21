<template>
  <div class="thankyou">
    <img
      v-lazyload
      src="/images/placeholder-1x1.png"
      data-src="/images/ok-gesture.png"
      alt="Thank You Illustration"
      style="width: 300px;">
    <h1>
      Thank you for subscribing!
    </h1>
    <h5>You will get an email when new article published! Hope you enjoy it.</h5>
    <br>
    <nuxt-link to="/">
      Back to homepage
    </nuxt-link>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'SuccessSubscribedPage',
  head () {
    const title = `Thank You`
    const decription = `Thank you for subscribing!`
    const url = `/success-subscribed`
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: decription },
        { hid: 'og:url', name: 'og:url', content: url },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: decription },
        { hid: 'og:url', name: 'og:url', content: url }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.thankyou {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
</style>
