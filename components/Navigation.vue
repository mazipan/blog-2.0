<template>
  <div class="nav">
    <nuxt-link :to="`${ampPath}about`">
      😎 About
    </nuxt-link>
    <span class="dot"> • </span>
    <nuxt-link :to="`${ampPath}now`">
      ⏰ Now
    </nuxt-link>
    <span class="dot"> • </span>
    <nuxt-link :to="`${ampPath}archives`">
      📦 Archives
    </nuxt-link>
    <span class="dot"> • </span>
    <nuxt-link :to="`${ampPath}ghibahprogrammer`">
      😈 Ghibah Programmer
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
  }
}
</script>
