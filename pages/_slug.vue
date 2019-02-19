<template>
  <section class="page">
    <nuxt-link
      :to="`/${meta.slug}`"
      class="page__link">
      <h2 class="page__title">
        {{ meta.title }}
      </h2>
    </nuxt-link>
    <div class="meta">
      <small class="meta__date">{{ meta.date }}</small>
      <small class="dot"> • </small>
      <small class="meta__read">{{ formatReadingTime(meta.minute2read) }}</small>
      <small class="dot"> • </small>
      <small class="dot">
        👍 {{ claps }} likes
      </small>
    </div>
    <div class="page__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />
    </div>
    <hr>
    <div>
      Do you like this article? help me to click this like button
      <button
        class="btn"
        @click="onClickLike">
        👍 {{ claps }} likes
      </button>
    </div>
  </section>
</template>

<script>
import ContentParser from '../components/ContentParser'
import { formatReadingTime } from '../utils/helpers.js'

export default {
  name: 'SlugPage',
  components: {
    ContentParser
  },
  head () {
    const title = `${this.meta.title} | @mazipan`
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title }
      ]
    }
  },
  data () {
    return {
      formatReadingTime,
      claps: 0,
      DBRefs: null
    }
  },
  async asyncData ({ params, store }) {
    const fileContent = await import(`~/contents/markdown/${params.slug}/index.md`)
    const attr = fileContent.attributes
    return {
      meta: {
        params: params,
        title: attr.title,
        slug: attr.slug,
        date: attr.date,
        minute2read: attr.minute2read,
        description: attr.description
      },
      renderFn: fileContent.vue.render,
      staticRenderFn: fileContent.vue.staticRenderFns
    }
  },
  mounted () {
    const __self = this
    const REF_URL = 'claps/' + this.meta.slug
    this.DBRefs = this.$firebase.database().ref(REF_URL)
    this.DBRefs.once('value').then(function (snapshot) {
      __self.claps = snapshot.val()
    })

    this.DBRefs.on('value', function (snapshot) {
      __self.claps = snapshot.val()
    })
  },
  methods: {
    onClickLike () {
      if (this.DBRefs) {
        this.DBRefs.set(this.claps + 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__title {
    font-size: 2em;
    margin-bottom: .25em;
  }
  &__content {
    width: 100%;
    word-break: break-word;
    margin: 2em 0;
  }
  &__date {
    color: var(--textSubtitle);
  }
}
.btn{
  color: var(--textNormal);
  background: var(--textLink);
  padding: .25em 1em;
  border-radius: .25em;
  border: 0;
  outline: 0;
  cursor: pointer;
}
</style>
