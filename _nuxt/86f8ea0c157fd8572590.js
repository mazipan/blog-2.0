(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"d",function(){return m});n(58);var r=n(170);n(169);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=function(){r=null,n||t.apply(o,c)},d=n&&!r;clearTimeout(r),r=setTimeout(l,e),d&&t.apply(o,c)}}function d(t){return t&&t.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(t){var e=t.title,title=void 0===e?"":e,n=t.description,o=void 0===n?"":n,c=t.url,l=void 0===c?"":c,d=t.imageUrl,m=void 0===d?"":d,f=t.ampUrl,_=void 0===f?"":f,v=t.publishedDate,h=void 0===v?new Date:v,y=t.articleSection,w=void 0===y?"Technology":y,S=t.withAmpHtml,x=void 0!==S&&S,N=t.withCanonical,C=void 0!==N&&N,k=t.withArticle,A=void 0!==k&&k,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:l},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:l}],I=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],D=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(h).toISOString()},{hid:"article:section",property:"article:section",content:w}];m&&(meta=[].concat(Object(r.a)(meta),I)),A&&(meta=[].concat(Object(r.a)(meta),D));var link=[];return x&&(link=[{hid:"amphtml",rel:"amphtml",href:_}]),C&&(link=[{hid:"canonical",rel:"canonical",href:l}]),{title:title,meta:meta,link:link}}},169:function(t,e,n){var r=n(7);r(r.P,"Array",{fill:n(172)}),n(59)("fill")},170:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},171:function(t,e,n){"use strict";n(173);var r=n(168),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(3),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},172:function(t,e,n){"use strict";var r=n(22),o=n(104),c=n(17);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),m=l>2?arguments[2]:void 0,f=void 0===m?n:o(m,n);f>d;)e[d++]=t;return e}},173:function(t,e,n){"use strict";var r=n(5),o=n(19),c=n(27),l=n(105),d=n(61),m=n(11),f=n(42).f,_=n(62).f,v=n(9).f,h=n(176).trim,y=r.Number,w=y,S=y.prototype,x="Number"==c(n(77)(S)),N="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?m(function(){S.valueOf.call(n)}):"Number"!=c(n))?l(new w(C(e)),n,y):C(e)};for(var k,A=n(8)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;A.length>I;I++)o(w,k=A[I])&&!o(y,k)&&v(y,k,_(w,k));y.prototype=S,S.constructor=y,n(12)(r,"Number",y)}},174:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/index.md":[179,38],"./create-simple-like-button-using-firebase-rtdb/index.md":[180,40],"./eslint-formatter-html-extended/index.md":[181,42],"./experience-in-become-fasilitator-gdk-mws-2018/index.md":[182,44],"./generate-amp-pages-in-nuxtjs/index.md":[183,46],"./migrate-nuxt-to-typescript/index.md":[184,48],"./tasting-reasonml-for-react/index.md":[185,50],"./the-art-of-deleting-and-updating-the-code/index.md":[186,52],"./unit-testing-guide-in-vuejs/index.md":[187,54]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=174,t.exports=r},176:function(t,e,n){var r=n(7),o=n(26),c=n(11),l=n(177),d="["+l+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),_=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),m=o[t]=d?e(v):l[t];n&&(o[n]=m),r(r.P+r.F*d,"String",o)},v=_.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=_},177:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},279:function(t,e,n){"use strict";n.r(e);n(23),n(18),n(60),n(14);var r,o=n(2),c=n(78),l=n(168),d=n(171),m=n(13),f={name:"HomepageAmp",layout:"amp-homepage",components:{MetaData:d.a},head:function(){return{link:[{hid:"canonical",rel:"canonical",href:"".concat(this.productionUrl,"/")}]}},data:function(){return{productionUrl:m.c,formatReadingTime:l.c,formatPostDate:l.b}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(o.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(174)("./".concat(e,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},r=function(t){return l.apply(this,arguments)},e.store,t.abrupt("return",Promise.all(c.a.data.map(function(t){return r(t)})).then(function(t){return{metas:t}}));case 4:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},_=n(3),component=Object(_.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},t._l(t.metas,function(meta){return n("div",{key:meta.title,staticClass:"pages__item"},[meta.sponsored?n("span",{staticClass:"pages__sponsored"},[t._v("sponsored")]):t._e(),t._v(" "),n("nuxt-link",{staticClass:"pages__link",attrs:{to:"/amp/"+meta.slug+"/?utm_source=home",title:meta.title}},[n("h2",{staticClass:"pages__title"},[t._v("\n        "+t._s(meta.title)+"\n      ")])]),t._v(" "),n("MetaData",{attrs:{"meta-date":meta.date,"meta-minute-to-read":meta.minute2read}}),t._v(" "),n("div",[n("p",[t._v("\n        "+t._s(meta.description)+"\n      ")])]),t._v(" "),n("div",{staticClass:"pages__tags"},t._l(meta.categories,function(e){return n("div",{key:e,staticClass:"pages__tag"},[n("nuxt-link",{attrs:{to:"/amp/category/"+e+"?utm_source=home",title:e}},[t._v("\n          #"+t._s(e)+"\n        ")])],1)}),0)],1)}),0)},[],!1,null,null,null);e.default=component.exports}}]);