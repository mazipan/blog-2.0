(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{171:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return m}));n(14),n(22),n(15),n(59),n(2),n(60);var r=n(176);n(175),n(13);function o(e){var t=Math.round(e/10);return"".concat(new Array(t||1).fill("☕️").join("")," ").concat(e," min read")}function d(e){var t;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(t=e).toLocaleDateString.apply(t,Object(r.a)(n))}function c(e,t,n){var r;return function(){var o=this,d=arguments,c=function(){r=null,n||e.apply(o,d)},l=n&&!r;clearTimeout(r),r=setTimeout(c,t),l&&e.apply(o,d)}}function l(e){return e&&e.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(e){var t=e.title,title=void 0===t?"":t,n=e.description,o=void 0===n?"":n,d=e.url,c=void 0===d?"":d,l=e.imageUrl,m=void 0===l?"":l,h=e.ampUrl,f=void 0===h?"":h,v=e.publishedDate,_=void 0===v?new Date:v,w=e.articleSection,x=void 0===w?"Technology":w,y=e.withAmpHtml,k=void 0!==y&&y,S=e.withCanonical,j=void 0!==S&&S,D=e.withArticle,C=void 0!==D&&D,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:c},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:c}],R=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],O=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(_).toISOString()},{hid:"article:section",property:"article:section",content:x}];m&&(meta=[].concat(Object(r.a)(meta),R)),C&&(meta=[].concat(Object(r.a)(meta),O));var link=[];return k&&(link=[{hid:"amphtml",rel:"amphtml",href:f}]),j&&(link=[{hid:"canonical",rel:"canonical",href:c}]),{title:title,meta:meta,link:link}}},172:function(e,t,n){"use strict";var r=n(171),o=n(13);t.a={data:function(){return{formatReadingTime:r.c,formatPostDate:r.b,productionUrl:o.h,ENABLE_ADS:o.g,ADS_CLIENT:o.a}}}},174:function(e,t,n){var map={"./":[42,9],"./archives/blog-2-0-in-nuxtjs/index.md":[208,7,60],"./categories":[80,9],"./categories.js":[80,9],"./drafts":[78,9],"./drafts/":[78,9],"./drafts/cara-saya-belajar-teknologi-baru/index.md":[189,7,4],"./drafts/every-working-environtment-is-unique/en.md":[209,7,61],"./drafts/every-working-environtment-is-unique/index.md":[190,7,5],"./drafts/index":[78,9],"./drafts/index.js":[78,9],"./drafts/learn-programming-for-non-tech/en.md":[210,7,62],"./drafts/learn-programming-for-non-tech/index.md":[191,7,6],"./drafts/tokopedia-tech-interview-process/en.md":[211,7,63],"./drafts/tokopedia-tech-interview-process/index.md":[192,7,7],"./ghibah":[79,9],"./ghibah/":[79,9],"./ghibah/01-code-ownership/index.md":[193,7,8],"./ghibah/02-gaji-programmer/index.md":[194,7,9],"./ghibah/03-pindah-kerja/index.md":[195,7,10],"./ghibah/04-cto-gadungan/index.md":[196,7,11],"./ghibah/index":[79,9],"./ghibah/index.js":[79,9],"./index":[42,9],"./index.js":[42,9],"./node-index":[173,7,3],"./node-index.js":[173,7,3],"./published/3-years-3-different-company/en.md":[197,7,12],"./published/3-years-3-different-company/index.md":[178,7,13],"./published/create-awesome-blog-with-gridsome/en.md":[198,7,14],"./published/create-awesome-blog-with-gridsome/index.md":[179,7,15],"./published/create-simple-like-button-using-firebase-rtdb/en.md":[199,7,16],"./published/create-simple-like-button-using-firebase-rtdb/index.md":[180,7,17],"./published/eslint-formatter-html-extended/en.md":[200,7,18],"./published/eslint-formatter-html-extended/index.md":[181,7,19],"./published/experience-in-become-fasilitator-gdk-mws-2018/en.md":[201,7,20],"./published/experience-in-become-fasilitator-gdk-mws-2018/index.md":[182,7,21],"./published/generate-amp-pages-in-nuxtjs/en.md":[202,7,22],"./published/generate-amp-pages-in-nuxtjs/index.md":[183,7,23],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/en.md":[203,7,24],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/index.md":[184,7,25],"./published/migrate-nuxt-to-typescript/en.md":[204,7,26],"./published/migrate-nuxt-to-typescript/index.md":[185,7,27],"./published/tasting-reasonml-for-react/en.md":[205,7,28],"./published/tasting-reasonml-for-react/index.md":[186,7,29],"./published/the-art-of-deleting-and-updating-the-code/en.md":[206,7,30],"./published/the-art-of-deleting-and-updating-the-code/index.md":[187,7,31],"./published/unit-testing-guide-in-vuejs/en.md":[207,7,32],"./published/unit-testing-guide-in-vuejs/index.md":[188,7,33]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(r,t[1])}))}r.keys=function(){return Object.keys(map)},r.id=174,e.exports=r},212:function(e,t,n){"use strict";n(214);var r=n(171),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},d=n(3),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[e._v("\n      📆 "+e._s(e.formatPostDate(e.metaDate))+"\n    ")]),e._v(" "),n("small",{staticClass:"dot"},[e._v(" • ")]),e._v(" "),n("small",{staticClass:"meta__read"},[e._v(e._s(e.formatReadingTime(e.metaMinuteToRead)))]),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n      ❤️ "+e._s(e.statsLikes)+" likes\n    ")]):e._e(),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n      📓 "+e._s(e.statsRead)+" read\n    ")]):e._e()]),e._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[e._v("\n        📆 "+e._s(e.formatPostDate(e.metaDate))+"\n      ")]),e._v(" "),n("small",{staticClass:"dot"},[e._v(" • ")]),e._v(" "),n("small",{staticClass:"meta__read"},[e._v(e._s(e.formatReadingTime(e.metaMinuteToRead)))])]),e._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[e.isShowStats?n("small",[e._v("\n        ❤️ "+e._s(e.statsLikes)+" likes\n      ")]):e._e(),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n        📓 "+e._s(e.statsRead)+" read\n      ")]):e._e()])])])}),[],!1,null,null,null);t.a=component.exports},217:function(e,t,n){"use strict";var r=n(219),o=n.n(r),d=(n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")}}),c=n(3),component=Object(c.a)(d,void 0,void 0,!1,null,null,null);t.a=component.exports},234:function(e,t,n){var map={"./01-code-ownership/index.md":[193,8],"./02-gaji-programmer/index.md":[194,9],"./03-pindah-kerja/index.md":[195,10],"./04-cto-gadungan/index.md":[196,11]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=234,e.exports=r},241:function(e,t,n){var content=n(264);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("773a1058",content,!0,{sourceMap:!1})},263:function(e,t,n){"use strict";var r=n(241);n.n(r).a},264:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,".page__title[data-v-c67b1124]{font-size:2em;margin-bottom:.25em}.page__content[data-v-c67b1124]{width:100%;word-break:break-word;margin:2em 0}.page__date[data-v-c67b1124]{color:var(--textSubtitle)}.page__footer[data-v-c67b1124]{margin:1em 0}.block-wrap[data-v-c67b1124]{margin:1em 0;display:-webkit-box;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.like[data-v-c67b1124],.share[data-v-c67b1124]{display:-webkit-box;display:-ms-flexbox;display:flex}.like-btn[data-v-c67b1124],.share-btn[data-v-c67b1124]{color:var(--textNormal);background:var(--textLink);padding:.25em 1em;border-radius:.25em;border:0;outline:0;cursor:pointer;margin-right:1em;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n",""])},277:function(e,t,n){"use strict";n.r(t);n(14);var r,o=n(2),d=n(212),c=n(217),l=n(172),m={name:"DraftPage",components:{MetaData:d.a,ContentParser:c.a},mixins:[l.a],head:function(){var title="".concat(this.meta.title," | Ghibah Programmer"),e="".concat(this.meta.description),t="".concat(this.productionUrl,"/ghibah/").concat(this.meta.slug,"/"),n=this.meta.cover||"".concat(this.productionUrl,"/icon.png");return{title:title,meta:[{hid:"description",name:"description",content:e},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:e},{hid:"og:url",property:"og:url",content:t},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:n},{hid:"og:image:secure_url",property:"og:image:secure_url",content:n},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:e},{hid:"twitter:url",name:"twitter:url",content:t},{hid:"twitter:image:src",name:"twitter:image:src",content:n}]}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,n(234)("./".concat(r.slug,"/index.md"));case 3:return o=e.sent,d=o.attributes,e.abrupt("return",{meta:{title:d.title,slug:d.slug,date:d.date,minute2read:d.minute2read,description:d.description},renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},h=(n(263),n(3)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pages"},[n("h1",{staticClass:"pages__title pages__title--small text-title"},[e._v("\n    "+e._s(e.meta.title)+"\n  ")]),e._v(" "),n("MetaData",{attrs:{"meta-date":e.meta.date,"meta-minute-to-read":e.meta.minute2read,"is-show-stats":!1}}),e._v(" "),n("div",{staticClass:"pages__content"},[n("ContentParser",{attrs:{"render-fn":e.renderFn,"static-render-fn":e.staticRenderFn}}),e._v(" "),e.ENABLE_ADS?n("in-article-adsense",{staticClass:"Ads-wrapper",attrs:{"root-class":"VueAdsense","data-ad-client":e.ADS_CLIENT,"data-ad-slot":"7974047383"}}):e._e()],1)],1)}),[],!1,null,"c67b1124",null);t.default=component.exports}}]);