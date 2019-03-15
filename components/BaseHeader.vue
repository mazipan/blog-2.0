<template>
  <header class="header clearfix">
    <div
      class="profile">
      <div class="profile--left">
        <nuxt-link
          to="/">
          <img
            src="/images/profile-rounded.png"
            alt="@mazipan"
            class="profile__img">
        </nuxt-link>
        <div class="profile__text">
          <nuxt-link
            to="/">
            <h1 class="profile__title">
              @mazipan
            </h1>
          </nuxt-link>
          <span>
            A family man who write the code
          </span>
        </div>
      </div>
      <div class="profile__social">
        <a
          href="https://github.com/mazipan"
          title="Github"
          target="_blank"
          rel="noopener">
          <GithubIcon
            w="24px"
            h="24px" />
        </a>
        <a
          href="https://twitter.com/Maz_Ipan"
          title="Twitter"
          target="_blank"
          rel="noopener">
          <TwitterIcon
            w="24px"
            h="24px" />
        </a>
        <a
          href="https://www.facebook.com/mazipanneh"
          title="Facebook"
          target="_blank"
          rel="noopener">
          <FacebookIcon
            w="24px"
            h="24px" />
        </a>
      </div>
    </div>
    <Navigation class="navigation" />
  </header>
</template>

<script>
import Navigation from './Navigation'
import FacebookIcon from 'vue-ionicons/dist/js/logo-facebook'
import TwitterIcon from 'vue-ionicons/dist/js/logo-twitter'
import GithubIcon from 'vue-ionicons/dist/js/logo-github'

export default {
  name: 'BaseHeader',
  components: {
    Navigation,
    FacebookIcon,
    TwitterIcon,
    GithubIcon
  }
}
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 3.5rem;
}

.profile{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &--left{
    display: flex;
    align-items: flex-start;
  }

  &__img{
    height: 76px;
    width: 76px;
    margin-right: 1em;
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }

  &__title{
    font-size: 1.5em;
    margin-top: 0;
  }

  &__social{
    a{
      margin-right: .5em;
    }
  }
}

.navigation{
  margin-top: 1em;
}
</style>
