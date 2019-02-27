<template>
  <section class="page">
    <nuxt-link
      :to="`/${meta.slug}/`"
      :title="meta.title"
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
      <small>
        👍 {{ claps }} likes
      </small>
      <small class="dot"> • </small>
      <small>
        📖 {{ hits }} read
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
          <a
            class="share-btn"
            title="Share this article"
            @click="onClickShare">
            📣 Share
          </a>
        </div>

        <div
          v-else
          class="share">
          <a
            class="share-btn"
            title="Share to facebook"
            :href="fbLinkShare"
            target="_blank"
            rel="noopener"
            @click.native="trackSocialShare('Facebook')">
            🎭 FB Share
          </a>
          <a
            class="share-btn"
            title="Share to twitter"
            :href="twitterLinkShare"
            target="_blank"
            rel="noopener"
            @click.native="trackSocialShare('Twitter')">
            🐦 Twitter Share
          </a>
          <a
            class="share-btn"
            title="Share to linkedin"
            :href="linkedinLinkShare"
            target="_blank"
            rel="noopener"
            @click.native="trackSocialShare('LinkedIn')">
            💼 LinkedIn Share
          </a>
        </div>

        <div class="like">
          <a
            class="like-btn"
            title="Like this article"
            @click="onClickLike">
            👍 {{ claps }}
          </a>
        </div>
      </div>
    </div>
    <hr>
    <div class="page__footer">
      <FormSubsription />
    </div>
  </section>
</template>

<script>
import ContentParser from '../components/ContentParser'
import FormSubsription from '../components/FormSubsription'
import { formatReadingTime, debounce } from '../utils/helpers.js'
import { trackLike, trackUniversalShare, trackShare } from '../utils/analitycs.js'

export default {
  name: 'SlugPage',
  components: {
    ContentParser,
    FormSubsription
  },
  head () {
    const title = `${this.meta.title}`
    const description = `${this.meta.description}`
    const url = `${this.productionUrl}/${this.meta.slug}/`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:published_time', property: 'article:published_time', content: new Date(this.meta.date).toISOString() },
        { hid: 'article:section', property: 'article:section', content: 'Technology' },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ]
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz',
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
  computed: {
    encodedTitle () {
      return encodeURIComponent(`${this.meta.title}`)
    },
    encodedDesc () {
      return encodeURIComponent(`${this.meta.description}`)
    },
    encodedUrl () {
      return encodeURIComponent(`${this.productionUrl}/${this.meta.slug}`)
    },
    fbLinkShare () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&title=${this.encodedTitle}&description=${this.encodedDesc}&quote=${this.encodedDesc}`
    },
    twitterLinkShare () {
      return `https://twitter.com/intent/tweet?text=${this.encodedTitle}-${this.encodedDesc}&url=${this.encodedUrl}&via=maz_ipan`
    },
    linkedinLinkShare () {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${this.encodedUrl}`
    }
  },
  async asyncData ({ params }) {
    const fileContent = await import(`~/contents/markdown/${params.slug}/index.md`)

    const attr = fileContent.attributes
    return {
      meta: {
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
        if (__self.claps === null) {
          const newRef = {
            [REF_URL]: 0
          }
          __self.$firebase.database().ref().update(newRef)
        }
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
        if (__self.hits === null) {
          const newRef = {
            [REF_URL]: 1
          }
          __self.$firebase.database().ref().update(newRef)
        } else {
          __self.hitsRefs.set(__self.hits + 1)
        }
      })
    },
    trackSocialShare (network) {
      trackShare(this, this.meta.slug, network)
    },
    onClickShare () {
      const title = `${this.meta.title}`
      const decription = `${this.meta.description}`
      const url = `/${this.meta.slug}`
      trackUniversalShare(this, this.meta.slug)

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
          trackLike(__self, __self.meta.slug)
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
  justify-items: center;
  align-items: center;
}

.share{
  &-btn{
    color: var(--textNormal);
    background: var(--textLink);
    padding: .25em 1em;
    border-radius: .25em;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-right: 1em;
    text-decoration: none;
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
    margin-right: 1em;
    text-decoration: none;
  }
}
</style>
