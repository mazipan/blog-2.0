<template>
  <header class="header header--simplify clearfix">
    <div
      class="header__block">
      <div class="header__child">
        <nuxt-link
          to="/">
          <h1 class="h1">
            {{ domain }}
          </h1>
        </nuxt-link>
        <Navigation />
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'SimplifyHeader',
  components: {
    Navigation
  },
  data () {
    return {
      domain: process.env.DOMAIN
    }
  }
}
</script>
