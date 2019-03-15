<template>
  <div class="container app">
    <SimplifyHeader />
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
import SimplifyHeader from '../components/SimplifyHeader'
import BaseFooter from '../components/BaseFooter'
import FormSubsription from '../components/FormSubsription'
import { trackJSPerf } from '../utils/analitycs.js'
require('vue-ionicons/ionicons.css')

export default {
  name: 'DefaultLayout',
  components: {
    SimplifyHeader,
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
