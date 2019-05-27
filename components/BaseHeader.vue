<template>
  <header class="header clearfix">
    <div
      class="profile">
      <div class="profile--left">
        <nuxt-link
          to="/">
          <img
            src="/images/profile.png"
            alt="@mazipan"
            class="profile__img"
            height="76px"
            width="76px">
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
          <GithubIcon v-if="!amp"
            w="24px"
            h="24px" />
          <div v-else>
            <svg viewBox="0 0 512 512" width="24px" height="24px" class="ion__svg"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></div></a> <a href="https://twitter.com/Maz_Ipan" title="Twitter" target="_blank" rel="noopener"><div title="Logo Twitter Icon" name="logo-twitter-icon" class="ion"><svg viewBox="0 0 512 512" width="24px" height="24px" class="ion__svg"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg></div></a> <a href="https://www.facebook.com/mazipanneh" title="Facebook" target="_blank" rel="noopener"><div title="Logo Facebook Icon" name="logo-facebook-icon" class="ion"><svg width="24px" height="24px" viewBox="0 0 512 512" class="ion__svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg>
          </div>
        </a>
        <a
          href="https://twitter.com/Maz_Ipan"
          title="Twitter"
          target="_blank"
          rel="noopener">
          <TwitterIcon v-if="!amp"
            w="24px"
            h="24px" />
          <div v-else>
            <svg viewBox="0 0 512 512" width="24px" height="24px" class="ion__svg"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg></div></a> <a href="https://www.facebook.com/mazipanneh" title="Facebook" target="_blank" rel="noopener"><div title="Logo Facebook Icon" name="logo-facebook-icon" class="ion"><svg width="24px" height="24px" viewBox="0 0 512 512" class="ion__svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg>
          </div>
        </a>
        <a
          href="https://www.facebook.com/mazipanneh"
          title="Facebook"
          target="_blank"
          rel="noopener">
          <FacebookIcon v-if="!amp"
            w="24px"
            h="24px" />
          <div v-else>
            <svg width="24px" height="24px" viewBox="0 0 512 512" class="ion__svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg>
          </div>
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
  },
  props: {
    amp: {
      type: Boolean,
      default: false
    }
  },
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
