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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </a>
        <a
          href="https://twitter.com/Maz_Ipan"
          title="Twitter"
          target="_blank"
          rel="noopener">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
        </a>
        <a
          href="https://www.facebook.com/mazipanneh"
          title="Facebook"
          target="_blank"
          rel="noopener">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader'
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
</style>
