<template>
  <div class="nav">
    <nuxt-link to="/about">
      About
    </nuxt-link>
    <span class="dot"> • </span>
    <nuxt-link to="/now">
      Now
    </nuxt-link>
    <span class="dot"> • </span>
    <nuxt-link to="/archieves">
      Archieves
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
