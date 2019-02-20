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
    <div class="page__footer">
      Do you like this article? help me to click this like button and share to your followers.

      <div class="block-wrap">
        <div
          v-if="isSupportWebshare"
          class="share">
          <button
            class="share-btn"
            @click="onClickLike">
            📣 Share
          </button>
        </div>

        <div class="like">
          <button
            class="like-btn"
            @click="onClickLike">
            👍 {{ claps }}
          </button>
          <div
            v-show="clapClicked"
            class="like-plus zoomIn">
            +{{ youClapped }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContentParser from '../components/ContentParser'
import { formatReadingTime, debounce } from '../utils/helpers.js'

export default {
  name: 'SlugPage',
  components: {
    ContentParser
  },
  head () {
    const title = `${this.meta.title} | @mazipan`
    const decription = `${this.meta.description}`
    const url = `/${this.meta.slug}`
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: decription },
        { hid: 'og:url', name: 'og:url', content: url },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: decription },
        { hid: 'og:url', name: 'og:url', content: url }
      ]
    }
  },
  data () {
    return {
      formatReadingTime,
      youClapped: 0,
      claps: 0,
      hits: 0,
      clapsRefs: null,
      hitsRefs: null,
      isSupportWebshare: false,
      clapClicked: false
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
    if (window.navigator.share) {
      this.isSupportWebshare = true
    }
    this.setHitsData() // set hits in every mounted
    this.initClapsData()
  },
  methods: {
    initClapsData () {
      const __self = this
      const REF_URL = 'claps/' + __self.meta.slug
      __self.clapsRefs = __self.$firebase.database().ref(REF_URL)
      __self.clapsRefs.once('value').then(function (snapshot) {
        __self.claps = snapshot.val()
      })

      __self.clapsRefs.on('value', function (snapshot) {
        debounce(() => {
          __self.claps = snapshot.val()
        }, 300)()
      })
    },
    setHitsData () {
      const __self = this
      const REF_URL = 'hits/' + __self.meta.slug
      __self.hitsRefs = __self.$firebase.database().ref(REF_URL)
      __self.hitsRefs.once('value').then(function (snapshot) {
        __self.hits = snapshot.val()
        __self.hitsRefs.set(__self.hits + 1)
      })
    },
    onClickShare () {
      const title = `${this.meta.title} | @mazipan`
      const decription = `${this.meta.description}`
      const url = `/${this.meta.slug}`

      const data = {
        title,
        text: `${decription}`,
        url
      }

      if (window.navigator.share) { /* eslint-disable-line no-undef */
        window.navigator.share(data)
      }
    },
    onClickLike () {
      const __self = this
      if (__self.clapsRefs && __self.youClapped < 10) {
        debounce(function () {
          __self.youClapped += 1
          __self.clapClicked = true
          __self.clapsRefs.set(__self.claps + 1)
          setTimeout(() => {
            __self.clapClicked = false
          }, 1000)
        }, 300)()
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
  &__footer{
    margin: 1em 0;
  }
}

.block-wrap{
  margin: 1em 0;
  display: flex;
}

.share{
  margin-right: 1em;
  &-btn{
    color: var(--textNormal);
    background: var(--textLink);
    padding: .25em 1em;
    border-radius: .25em;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
}

.like{
  &-plus{
    color: var(--textNormal);
    background: var(--textLink);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: 130px;
    padding: 10px 5px;
    margin-top: -33px;
  }

  &-btn{
    color: var(--textNormal);
    background: var(--textLink);
    padding: .25em 1em;
    border-radius: .25em;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
}
</style>
