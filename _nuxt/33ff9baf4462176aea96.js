(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{171:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return m}));n(14),n(22),n(15),n(59),n(2),n(60);var r=n(176);n(175),n(13);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function d(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,d=arguments,l=function(){r=null,n||t.apply(o,d)},c=n&&!r;clearTimeout(r),r=setTimeout(l,e),c&&t.apply(o,d)}}function c(t){return t&&t.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(t){var e=t.title,title=void 0===e?"":e,n=t.description,o=void 0===n?"":n,d=t.url,l=void 0===d?"":d,c=t.imageUrl,m=void 0===c?"":c,h=t.ampUrl,f=void 0===h?"":h,v=t.publishedDate,_=void 0===v?new Date:v,x=t.articleSection,y=void 0===x?"Technology":x,w=t.withAmpHtml,j=void 0!==w&&w,k=t.withCanonical,D=void 0!==k&&k,S=t.withArticle,C=void 0!==S&&S,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:l},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:l}],O=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],R=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(_).toISOString()},{hid:"article:section",property:"article:section",content:y}];m&&(meta=[].concat(Object(r.a)(meta),O)),C&&(meta=[].concat(Object(r.a)(meta),R));var link=[];return j&&(link=[{hid:"amphtml",rel:"amphtml",href:f}]),D&&(link=[{hid:"canonical",rel:"canonical",href:l}]),{title:title,meta:meta,link:link}}},172:function(t,e,n){"use strict";var r=n(171),o=n(13);e.a={data:function(){return{formatReadingTime:r.c,formatPostDate:r.b,productionUrl:o.h,ENABLE_ADS:o.g,ADS_CLIENT:o.a}}}},174:function(t,e,n){var map={"./":[42,9],"./archives/blog-2-0-in-nuxtjs/index.md":[209,7,61],"./categories":[80,9],"./categories.js":[80,9],"./drafts":[78,9],"./drafts/":[78,9],"./drafts/cara-saya-belajar-teknologi-baru/index.md":[189,7,4],"./drafts/every-working-environtment-is-unique/en.md":[210,7,62],"./drafts/every-working-environtment-is-unique/index.md":[190,7,5],"./drafts/index":[78,9],"./drafts/index.js":[78,9],"./drafts/learn-programming-for-non-tech/en.md":[211,7,63],"./drafts/learn-programming-for-non-tech/index.md":[191,7,6],"./drafts/tokopedia-tech-interview-process/en.md":[212,7,64],"./drafts/tokopedia-tech-interview-process/index.md":[192,7,7],"./drafts/you-might-not-need-microfe/en.md":[213,7,65],"./drafts/you-might-not-need-microfe/index.md":[193,7,8],"./ghibah":[79,9],"./ghibah/":[79,9],"./ghibah/01-code-ownership/index.md":[194,7,9],"./ghibah/02-gaji-programmer/index.md":[195,7,10],"./ghibah/03-pindah-kerja/index.md":[196,7,11],"./ghibah/04-cto-gadungan/index.md":[197,7,12],"./ghibah/index":[79,9],"./ghibah/index.js":[79,9],"./index":[42,9],"./index.js":[42,9],"./node-index":[173,7,3],"./node-index.js":[173,7,3],"./published/3-years-3-different-company/en.md":[198,7,13],"./published/3-years-3-different-company/index.md":[178,7,14],"./published/create-awesome-blog-with-gridsome/en.md":[199,7,15],"./published/create-awesome-blog-with-gridsome/index.md":[179,7,16],"./published/create-simple-like-button-using-firebase-rtdb/en.md":[200,7,17],"./published/create-simple-like-button-using-firebase-rtdb/index.md":[180,7,18],"./published/eslint-formatter-html-extended/en.md":[201,7,19],"./published/eslint-formatter-html-extended/index.md":[181,7,20],"./published/experience-in-become-fasilitator-gdk-mws-2018/en.md":[202,7,21],"./published/experience-in-become-fasilitator-gdk-mws-2018/index.md":[182,7,22],"./published/generate-amp-pages-in-nuxtjs/en.md":[203,7,23],"./published/generate-amp-pages-in-nuxtjs/index.md":[183,7,24],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/en.md":[204,7,25],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/index.md":[184,7,26],"./published/migrate-nuxt-to-typescript/en.md":[205,7,27],"./published/migrate-nuxt-to-typescript/index.md":[185,7,28],"./published/tasting-reasonml-for-react/en.md":[206,7,29],"./published/tasting-reasonml-for-react/index.md":[186,7,30],"./published/the-art-of-deleting-and-updating-the-code/en.md":[207,7,31],"./published/the-art-of-deleting-and-updating-the-code/index.md":[187,7,32],"./published/unit-testing-guide-in-vuejs/en.md":[208,7,33],"./published/unit-testing-guide-in-vuejs/index.md":[188,7,34]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return Promise.all(e.slice(2).map(n.e)).then((function(){return n.t(r,e[1])}))}r.keys=function(){return Object.keys(map)},r.id=174,t.exports=r},214:function(t,e,n){"use strict";n(216);var r=n(171),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},d=n(3),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},215:function(t,e,n){var map={"./3-years-3-different-company/index.md":[178,14],"./create-awesome-blog-with-gridsome/index.md":[179,16],"./create-simple-like-button-using-firebase-rtdb/index.md":[180,18],"./eslint-formatter-html-extended/index.md":[181,20],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[182,22],"./generate-amp-pages-in-nuxtjs/index.md":[183,24],"./lesson-learned-from-building-tokopedia-anniv-microsite/index.md":[184,26],"./migrate-nuxt-to-typescript/index.md":[185,28],"./tasting-reasonml-for-react/index.md":[186,30],"./the-art-of-deleting-and-updating-the-code/index.md":[187,32],"./unit-testing-guide-in-vuejs/index.md":[188,34]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=215,t.exports=r},219:function(t,e,n){"use strict";var r=n(221),o=n.n(r),d=(n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),l=n(3),component=Object(l.a)(d,void 0,void 0,!1,null,null,null);e.a=component.exports},220:function(t,e,n){"use strict";var r={name:"EditContentNav",props:{slug:{type:String,default:""},isDraft:{type:Boolean,default:!1}},computed:{markdownLocation:function(){return this.isDraft?"https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/".concat(this.slug,"/index.md"):"https://github.com/mazipan/blog-2.0/edit/master/contents/published/".concat(this.slug,"/index.md")}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    🏠 Back to Home\n  ")]),this._v(" "),e("span",{staticClass:"dot"},[this._v(" • ")]),this._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:this.markdownLocation}},[this._v("\n    📝 Edit in Github\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},233:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return d}));var r=n(13);function o(t){var e=t.category,title=t.title,n=t.slug;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:r.h},{"@type":"ListItem",position:2,name:e,item:Object(r.l)(e)},{"@type":"ListItem",position:3,name:title,item:Object(r.m)(n)}]}}function d(t){var e=t.slug,title=t.title,n=t.cover,o=t.date,desc=t.desc;return{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":Object(r.m)(e)},headline:title,image:[n],datePublished:new Date(o).toISOString(),dateModified:new Date(o).toISOString(),author:{"@type":"Person",name:"Irfan Maulana"},publisher:{"@type":"Organization",name:"mazipan",logo:{"@type":"ImageObject",url:"".concat(r.h,"/favicon-192x192.png")}},description:desc}}},241:function(t,e,n){"use strict";var r=n(171);e.a={head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="ID"===this.lang?"/":"/en",n="".concat(this.productionUrl,"/").concat(this.meta.slug).concat(e),o=this.meta.cover||"".concat(this.productionUrl,"/icon.png");return Object(r.d)({title:title,description:t,url:n,imageUrl:o,date:this.meta.date,withCanonical:!0,withArticle:!0})}}},246:function(t,e,n){"use strict";var r=n(214),o=n(219),d=n(220),l=n(171),c=n(233),m={name:"PostDetailAmpPartial",components:{MetaData:r.a,EditContentNav:d.a,ContentParser:o.a},props:{lang:{type:String,default:"ID"},meta:{type:Object,default:function(){}},renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:l.c,formatPostDate:l.b}},computed:{jsonLdBreadcrumb:function(){return Object(c.b)({category:this.meta.categories[0],title:this.meta.title,slug:this.meta.slug})},jsonLdArtcile:function(){return Object(c.a)({category:this.meta.categories[0],title:this.meta.title,slug:this.meta.slug,cover:this.meta.cover,date:this.meta.date,desc:this.meta.description})}}},h=n(3),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},[n("h1",{staticClass:"pages__title pages__title--small text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),"ID"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/amp/"+t.meta.slug+"/en?utm_source=lang"}},[t._v("\n      Switch to  🇬🇧 language\n    ")])],1):t._e(),t._v(" "),"EN"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/amp/"+t.meta.slug+"/?utm_source=lang"}},[t._v("\n      Switch to  🇮🇩 language\n    ")])],1):t._e(),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!1}}),t._v(" "),n("div",{staticClass:"pages__tags pages__tags--spacetop"},t._l(t.meta.categories,(function(e){return n("div",{key:e,staticClass:"pages__tag"},[n("nuxt-link",{attrs:{to:"/category/"+e+"?utm_source=home",title:e}},[t._v("\n        #"+t._s(e)+"\n      ")])],1)})),0),t._v(" "),n("div",{staticClass:"pages__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("EditContentNav",{attrs:{slug:t.meta.slug}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"pages__footer"},[t._v("\n    🚨Do you like this article? help me to share to your followers.\n  ")]),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdBreadcrumb)}}),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdArtcile)}})],1)}),[],!1,null,null,null);e.a=component.exports},282:function(t,e,n){"use strict";n.r(e);n(14);var r,o=n(2),d=n(246),l=n(241),c=n(172),m=n(171),h={name:"SlugPageIdAmp",layout:"amp-default",components:{PostDetail:d.a},mixins:[c.a,l.a],asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(215)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,d=o.attributes,t.abrupt("return",{lang:"ID",meta:d,renderFn:Object(m.e)(o.vue.render),staticRenderFn:Object(m.e)(o.vue.staticRenderFns)});case 6:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},f=n(3),component=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"postdetail-ID"},[e("PostDetail",{attrs:{lang:"ID",meta:this.meta,"render-fn":this.renderFn,"static-render-fn":this.staticRenderFn}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);