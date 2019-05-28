<template>
  <div class="container app">
    <BaseHeader :amp="false" />
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
import BaseHeader from '~/components/BaseHeader'
import BaseFooter from '~/components/BaseFooter'
import FormSubsription from '~/components/FormSubsription'
import { trackJSPerf } from '~/utils/analitycs.js'
require('vue-ionicons/ionicons.css')

export default {
  name: 'HomepageLayout',
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
