import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

const head = document.head
const s = document.createElement('script')
s.type = 'text/javascript'
s.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
s.onload = () => {
  // eslint-disable-next-line
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: process.env.ADS_CLIENT,
    enable_page_level_ads: true
  })
}

head.appendChild(s)
