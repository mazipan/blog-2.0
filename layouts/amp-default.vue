<template>
  <div class="container app">
    <SimplifyHeader :amp="true" />
    <nuxt class="wrapper clearfix" />

    <hr>
    <BaseFooter />
  </div>
</template>

<script>
import SimplifyHeader from '~/components/SimplifyHeader'
import BaseFooter from '~/components/BaseFooter'
require('vue-ionicons/ionicons.css')

export default {
  name: 'DefaultLayout',
  components: {
    SimplifyHeader,
    BaseFooter
  }
}
</script>
