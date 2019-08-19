<template>
  <section class="pages">
    <h1 class="pages__title pages__title--small text-title">
      {{ meta.title }}
    </h1>

    <div
      v-if="lang === 'ID'"
      class="pages__lang">
      <nuxt-link :to="`/${meta.slug}/en?utm_source=lang`">
        Switch to 🇬🇧 language
      </nuxt-link>
    </div>

    <div
      v-if="lang === 'EN'"
      class="pages__lang">
      <nuxt-link :to="`/${meta.slug}/?utm_source=lang`">
        Switch to 🇮🇩 language
      </nuxt-link>
    </div>

    <MetaData
      :meta-date="meta.date"
      :meta-minute-to-read="meta.minute2read"
      :is-show-stats="true"
      :stats-likes="claps"
      :stats-read="hits" />

    <div class="pages__tags pages__tags--spacetop">
      <div
        v-for="category in meta.categories"
        :key="category"
        class="pages__tag">
        <nuxt-link
          :to="`/category/${category}?utm_source=home`"
          :title="category">
          #{{ category }}
        </nuxt-link>
      </div>
    </div>

    <div class="pages__content">
      <ContentParser
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn" />
      <EditContentNav :slug="meta.slug" />
    </div>

    <hr>
    <div class="pages__footer">
      🚨Do you like this article? help me to click ❤️ button, share to your followers and subscribe the newsletter.
      <div class="block-wrap">
        <div
          v-if="isSupportWebshare"
          class="share">
          <a
            class="share-btn"
            title="Share this article"
            @click="onClickShare">
            <ShareIcon
              w="24px"
              h="24px" />
          </a>

          <a
            class="like-btn"
            title="Like this article"
            @click="onClickLike">
            <HeartIcon
              w="24px"
              h="24px" />
            &nbsp; {{ claps }}
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
            <FacebookIcon
              w="24px"
              h="24px" />
          </a>

          <a
            class="share-btn"
            title="Share to twitter"
            :href="twitterLinkShare"
            target="_blank"
            rel="noopener"
            @click.native="trackSocialShare('Twitter')">
            <TwitterIcon
              w="24px"
              h="24px" />
          </a>

          <a
            class="share-btn"
            title="Discuss on twitter"
            :href="twitterLinkDiscuss"
            target="_blank"
            rel="noopener"
            @click.native="trackSocialShare('Twitter Discuss')">
            <ChatBoxesIcon
              w="24px"
              h="24px" />
          </a>

          <a
            class="like-btn"
            title="Like this article"
            @click="onClickLike">
            <HeartIcon
              w="24px"
              h="24px" />
            &nbsp; {{ claps }}
          </a>
        </div>
      </div>
    </div>

    <InArticleAdsense
      v-if="ENABLE_ADS"
      data-ad-client="ca-pub-5442972248172818"
      data-ad-slot="7974047383" />

    <script
      type="application/ld+json"
      v-html="jsonLdBreadcrumb" />
    <script
      type="application/ld+json"
      v-html="jsonLdArtcile" />
  </section>
</template>

<script>
import FacebookIcon from 'vue-ionicons/dist/js/logo-facebook'
import TwitterIcon from 'vue-ionicons/dist/js/logo-twitter'
import HeartIcon from 'vue-ionicons/dist/js/md-heart'
import ShareIcon from 'vue-ionicons/dist/js/md-share'
import ChatBoxesIcon from 'vue-ionicons/dist/js/md-chatboxes'

import MetaData from '~/components/MetaData'
import ContentParser from '~/components/ContentParser'
import EditContentNav from '~/components/EditContentNav'
import {
  formatReadingTime,
  formatPostDate,
  debounce
} from '~/utils/helpers.js'

import {
  constructJsonLdBreadcrumb,
  constructJsonLdArticle
} from '~/utils/jsonld.js'

import {
  trackLike,
  trackUniversalShare,
  trackShare
} from '~/utils/analitycs.js'

import {
  initFirebase,
  getHitsUrl,
  getHitsData,
  setHitsData,
  getClapsUrl,
  getClapsData,
  setClapsData,
  subscribeClapsData,
  createNewRef
} from '~/utils/firebase.js'

import {
  ENABLE_ADS
} from '~/constants'

let firebaseInstance = null

export default {
  name: 'PostDetailPartial',
  components: {
    FacebookIcon,
    TwitterIcon,
    HeartIcon,
    ShareIcon,
    ChatBoxesIcon,
    MetaData,
    EditContentNav,
    ContentParser
  },
  props: {
    lang: {
      type: String,
      default: 'ID'
    },
    meta: {
      type: Object,
      default: () => {}
    },
    renderFn: {
      type: String,
      default: ''
    },
    staticRenderFn: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      productionUrl: 'https://www.mazipan.xyz',
      formatReadingTime,
      formatPostDate,
      youClapped: 0,
      claps: 0,
      hits: 0,
      isSupportWebshare: false,
      ENABLE_ADS
    }
  },
  computed: {
    jsonLdBreadcrumb () {
      return constructJsonLdBreadcrumb({
        category: this.meta.categories[0],
        title: this.meta.title,
        slug: this.meta.slug
      })
    },
    jsonLdArtcile () {
      return constructJsonLdArticle({
        category: this.meta.categories[0],
        title: this.meta.title,
        slug: this.meta.slug,
        cover: this.meta.cover,
        date: this.meta.date,
        desc: this.meta.description
      })
    },
    encodedTitle () {
      return encodeURIComponent(`${this.meta.title}`)
    },

    encodedDesc () {
      return encodeURIComponent(`${this.meta.description}`)
    },

    encodedUrl () {
      return encodeURIComponent(
        `${this.productionUrl}/${this.meta.slug}?utm_source=sosial-share`
      )
    },

    fbLinkShare () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrl}&title=${this.encodedTitle}&description=${this.encodedDesc}&quote=${this.encodedDesc}`
    },

    twitterLinkShare () {
      return `https://twitter.com/intent/tweet?text=${this.encodedTitle}-${this.encodedDesc}&url=${this.encodedUrl}&via=maz_ipan`
    },

    twitterLinkDiscuss () {
      return `https://mobile.twitter.com/search?q=${this.encodedUrl}`
    }
  },
  mounted () {
    if (window.navigator.share) {
      this.isSupportWebshare = true
    }
    firebaseInstance = initFirebase()

    getHitsData(firebaseInstance, this.meta.slug, snapshot => {
      if (!snapshot.val()) {
        const newRef = {
          [getHitsUrl(this.meta.slug)]: 1
        }
        createNewRef(firebaseInstance, newRef)
      } else {
        this.hits = Number(snapshot.val())
        setHitsData(firebaseInstance, this.meta.slug, this.hits + 1)
      }
    })

    getClapsData(firebaseInstance, this.meta.slug, snapshot => {
      if (!snapshot.val()) {
        const newRef = {
          [getClapsUrl(this.meta.slug)]: 1
        }
        createNewRef(firebaseInstance, newRef)
      } else {
        this.claps = Number(snapshot.val())
      }
    })

    subscribeClapsData(firebaseInstance, this.meta.slug, snapshot => {
      debounce(() => {
        this.claps = snapshot.val()
      }, 300)()
    })
  },
  methods: {
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

      if (window.navigator.share) {
        /* eslint-disable-line no-undef */
        window.navigator.share(data)
      }
    },

    onClickLike () {
      trackLike(this, this.meta.slug)
      this.youClapped += 1
      setClapsData(firebaseInstance, this.meta.slug, this.claps + 1)
    }
  }
}
</script>
