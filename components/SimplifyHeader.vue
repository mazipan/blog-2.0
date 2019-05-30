<template>
  <header class="header header--simplify clearfix">
    <div
      class="header__block">
      <div class="header__child">
        <nuxt-link
          :to="ampPath">
          <h1 class="h1">
            {{ domain }}
          </h1>
        </nuxt-link>
        <Navigation class="navigation" :amp="amp"/>
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
  props: {
    amp: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ampPath () {
      return this.amp ? '/amp/' : '/'
    }
  },
  data () {
    return {
      domain: process.env.DOMAIN
    }
  }
}
</script>
