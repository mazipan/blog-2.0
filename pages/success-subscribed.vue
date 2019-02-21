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
  name: 'SuccessSubscribedPage'
}
</script>

<style lang="scss" scoped>
.thankyou {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
</style>
