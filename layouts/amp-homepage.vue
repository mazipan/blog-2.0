<template>
  <div class="container app">
    <BaseHeader :amp="true" />
    <nuxt class="wrapper clearfix" />
    <hr>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
require('vue-ionicons/ionicons.css')

export default {
  name: 'HomepageLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin: 1em 0 0 0;
  min-height: 60vh;
}
</style>
