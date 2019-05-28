<template>
  <div class="container app">
    <BaseHeader :amp="true" />
    <nuxt class="wrapper clearfix" />
    <hr>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '~/components/BaseHeader'
import BaseFooter from '~/components/BaseFooter'

export default {
  name: 'HomepageLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
