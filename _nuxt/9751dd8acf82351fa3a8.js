(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(167);n(166);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=function(){r=null,n||t.apply(o,c)},d=n&&!r;clearTimeout(r),r=setTimeout(l,e),d&&t.apply(o,c)}}},168:function(t,e,n){"use strict";n(170);var r=n(165),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(2),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},171:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/index.md":[176,37],"./create-simple-like-button-using-firebase-rtdb/index.md":[177,39],"./eslint-formatter-html-extended/index.md":[178,41],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[179,43],"./generate-amp-pages-in-nuxtjs/index.md":[180,45],"./migrate-nuxt-to-typescript/index.md":[181,47],"./tasting-reasonml-for-react/index.md":[182,49],"./the-art-of-deleting-and-updating-the-code/index.md":[183,51],"./unit-testing-guide-in-vuejs/index.md":[184,53]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=171,t.exports=r},172:function(t,e,n){"use strict";var r=n(185),o=n.n(r),c=(n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),l=n(2),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);e.a=component.exports},175:function(t,e,n){"use strict";var r={name:"EditContentNav",props:{slug:{type:String,default:""},isDraft:{type:Boolean,default:!1}},computed:{markdownLocation:function(){return this.isDraft?"https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/".concat(this.slug,"/index.md"):"https://github.com/mazipan/blog-2.0/edit/master/contents/published/".concat(this.slug,"/index.md")}}},o=n(2),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    🏠 Back to Home\n  ")]),this._v(" "),e("span",{staticClass:"dot"},[this._v(" • ")]),this._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:this.markdownLocation}},[this._v("\n    📝 Edit in Github\n  ")])],1)},[],!1,null,null,null);e.a=component.exports},204:function(t,e,n){"use strict";e.a={head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="ID"===this.lang?"/":"/en",n="".concat(this.productionUrl,"/").concat(this.meta.slug).concat(e);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:n},{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(this.meta.date).toISOString()},{hid:"article:section",property:"article:section",content:"Technology"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:url",name:"twitter:url",content:n}],link:[{hid:"canonical",rel:"canonical",href:n}]}}}},211:function(t,e,n){"use strict";var r=n(168),o=n(172),c=n(175),l=n(165),d={name:"PostDetailAmpPartial",components:{MetaData:r.a,EditContentNav:c.a,ContentParser:o.a},props:{lang:{type:String,default:"ID"},meta:{type:Object,default:function(){}},renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:l.c,formatPostDate:l.b}},computed:{jsonLdBreadcrumb:function(){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:this.productionUrl},{"@type":"ListItem",position:2,name:"".concat(this.meta.categories[0]),item:"".concat(this.productionUrl,"/category/").concat(this.meta.categories[0])},{"@type":"ListItem",position:3,name:"".concat(this.meta.title),item:"".concat(this.productionUrl,"/").concat(this.meta.slug)}]}},jsonLdArtcile:function(){return{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":"".concat(this.productionUrl,"/").concat(this.meta.slug)},headline:this.meta.title,image:[this.meta.cover],datePublished:new Date(this.meta.date).toISOString(),dateModified:new Date(this.meta.date).toISOString(),author:{"@type":"Person",name:"Irfan Maulana"},publisher:{"@type":"Organization",name:"mazipan",logo:{"@type":"ImageObject",url:"".concat(this.productionUrl,"/favicon-192x192.png")}},description:this.meta.description}}}},m=n(2),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},[n("h1",{staticClass:"pages__title pages__title--small text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),"ID"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/amp/"+t.meta.slug+"/en?utm_source=lang"}},[t._v("\n      Switch to  🇬🇧 language\n    ")])],1):t._e(),t._v(" "),"EN"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/amp/"+t.meta.slug+"/?utm_source=lang"}},[t._v("\n      Switch to  🇮🇩 language\n    ")])],1):t._e(),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!1}}),t._v(" "),n("div",{staticClass:"pages__tags pages__tags--spacetop"},t._l(t.meta.categories,function(e){return n("div",{key:e,staticClass:"pages__tag"},[n("nuxt-link",{attrs:{to:"/category/"+e+"?utm_source=home",title:e}},[t._v("\n        #"+t._s(e)+"\n      ")])],1)}),0),t._v(" "),n("div",{staticClass:"pages__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("EditContentNav",{attrs:{slug:t.meta.slug}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"pages__footer"},[t._v("\n    🚨Do you like this article? help me to share to your followers.\n  ")]),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdBreadcrumb)}}),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdArtcile)}})],1)},[],!1,null,null,null);e.a=component.exports},261:function(t,e,n){"use strict";n.r(e);n(17);var r=n(3),o=(n(60),n(211)),c=n(204);function l(t){return t&&t.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}var d,m={name:"SlugPageIdAmp",layout:"amp-default",components:{PostDetail:o.a},mixins:[c.a],data:function(){return{productionUrl:"https://www.mazipan.xyz"}},asyncData:(d=Object(r.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(171)("./".concat(r.slug,"/index.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{lang:"ID",meta:c,renderFn:l(o.vue.render),staticRenderFn:l(o.vue.staticRenderFns)});case 6:case"end":return t.stop()}},t)})),function(t){return d.apply(this,arguments)})},h=n(2),component=Object(h.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"postdetail-ID"},[e("PostDetail",{attrs:{lang:"ID",meta:this.meta,"render-fn":this.renderFn,"static-render-fn":this.staticRenderFn}})],1)},[],!1,null,null,null);e.default=component.exports}}]);