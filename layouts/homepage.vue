<template>
  <div
    class="container app"
    :data-enable-ads="ENABLE_ADS"
    :data-ads-client="ADS_CLIENT"
    :data-production-url="PRODUCTION_URL">
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

import {
  ENABLE_ADS,
  ADS_CLIENT,
  PRODUCTION_URL
} from '~/constants'

require('vue-ionicons/ionicons.css')

export default {
  name: 'HomepageLayout',
  components: {
    BaseHeader,
    BaseFooter,
    FormSubsription
  },
  data () {
    return {
      ENABLE_ADS,
      ADS_CLIENT,
      PRODUCTION_URL
    }
  },
  mounted () {
    trackJSPerf()
  }
}
</script>
