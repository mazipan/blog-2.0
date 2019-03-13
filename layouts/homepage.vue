<template>
  <div class="container app">
    <BaseHeader />
    <nuxt class="wrapper clearfix" />
    <Navigation class="footer_nav" />
    <hr>
    <div
      class="clearfix"
      style="margin-bottom: 2em;">
      <FormSubsription />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
import Navigation from '../components/Navigation'
import FormSubsription from '../components/FormSubsription'
import { trackJSPerf } from '../utils/analitycs.js'

export default {
  name: 'HomepageLayout',
  components: {
    BaseHeader,
    BaseFooter,
    Navigation,
    FormSubsription
  },
  mounted () {
    trackJSPerf()
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin: 1em 0 0 0;
  min-height: 60vh;
}
.footer_nav{
  margin-bottom: 2em;
}
</style>
