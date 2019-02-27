<template>
  <div class="container app">
    <BaseHeader />
    <nuxt class="wrapper clearfix" />

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
import FormSubsription from '../components/FormSubsription'
import { trackJSPerf } from '../utils/analitycs.js'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter,
    FormSubsription
  },
  mounted () {
    trackJSPerf()
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin: 1em 0 3.5em 0;
  min-height: 60vh;
}
</style>
