<template>
  <header class="header clearfix">
    <div class="profile">
      <div class="profile--left">
        <nuxt-link :to="ampPath">
          <img
            src="/images/profile.png"
            alt="@mazipan"
            class="profile__img"
            height="76px"
            width="76px">
        </nuxt-link>
        <div class="profile__text">
          <nuxt-link :to="ampPath">
            <h1 class="profile__title">
              @mazipan
            </h1>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Navigation
      class="navigation"
      :amp="amp" />
  </header>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'BaseHeader',
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
  }
}
</script>
