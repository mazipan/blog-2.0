<template>
  <div class="container app">
    <BaseHeader />
    <nuxt class="wrapper clearfix" />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin: 1em 0;
  min-height: 60vh;
}
</style>
