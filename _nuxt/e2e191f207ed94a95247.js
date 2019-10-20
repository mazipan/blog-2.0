(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{203:function(e,t){e.exports={attributes:{title:"Generate AMP Pages in Nuxt.js",slug:"generate-amp-pages-in-nuxtjs",date:"2019-06-02",minute2read:20,description:"How to generate AMP Pages for you blog using Nuxt.js",categories:["javascript","nuxt","amp"],cover:"https://www.mazipan.xyz/content-images/generate-amp-pages-in-nuxtjs/mazipan-amp.png"},html:'<h2>About AMP</h2>\n<p>AMP (Accelerated Mobile Pages - <a href="https://amp.dev">amp.dev ↗️</a>) is Google\'s iniisatif for helping publishers, developers and website owner to serve website with fast first load time even nearly instant in mobile devices. For achieving that instant loading is not free, this can be done by AMP with applying so many strict rule for websites. We can say that AMP is strip down all your custom JavaScript to guarantee your website have instant load time.</p>\n<p>AMP is recommended by Google because it is very user centrict. Google also will prioritize the contents with AMP support with adding a badge in the search results to indicate AMP. Google also support with adding the caches to boost the first load speed into the limit which make AMP is the best choice for first user landing from the search result.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/generate-amp-pages-in-nuxtjs/mazipan-amp.png" alt="Mazipan AMP" height="200px" width="200px">\n<h2>Basics for Creating AMP</h2>\n<p>AMP is seperate pages with the normal one. This is because AMP have different strict rule that make us harder to implement in our existing technology stack that usually become very depends on JavaScript.</p>\n<p>For creating new AMP pages, first we need to add an identifier in <code>html</code> tag to make browser know that the pages is AMP version.</p>\n<p>If in normal HTML we can have this below code:</p>\n<pre><code class="language-html">&lt;html&gt;\n  &lt;head&gt;&lt;/head&gt;\n  &lt;body&gt;&lt;/body&gt;\n&lt;html&gt;\n</code></pre>\n<p>In AMP we will add emoji ⚡ in our <code>html</code> tag, see below example:</p>\n<pre><code class="language-html">&lt;html ⚡&gt;\n  &lt;head&gt;&lt;/head&gt;\n  &lt;body&gt;&lt;/body&gt;\n&lt;html&gt;\n</code></pre>\n<p>Or we can just change the ⚡ emoji with attribute <code>amp</code> without any values if we didn\'t support emoji.</p>\n<p>After adding the identifier, we need to add the main AMP engine script with this below code:</p>\n<pre><code class="language-html">&lt;script async src=&quot;https://cdn.ampproject.org/v0.js&quot;&gt;&lt;/script&gt;\n</code></pre>\n<p>We also need to add CSS boilerplate for all AMP pages:</p>\n<pre><code class="language-html">&lt;style amp-boilerplate&gt;body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}&lt;/style&gt;&lt;noscript&gt;&lt;style amp-boilerplate&gt;body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}&lt;/style&gt;&lt;/noscript&gt;\n</code></pre>\n<p>The things we need to be noted is AMP is not allowing any custom JavaScript or any external third party JavaScript link.</p>\n<p>So do with CSS file, we can\'t load any external CSS file. All style need to be loaded internally using tag <code>amp-custom</code> like below example code:</p>\n<pre><code class="language-html">&lt;style amp-custom&gt;\n  .custom-class {}\n&lt;/style&gt;\n</code></pre>\n<p>In AMP, we can use any <code>!important</code> in our CSS code.</p>\n<p>Basically, we can use any HTML tag inside our <code>&lt;body&gt;</code> tag. But AMP already creating many components to help us in creating a common layout or functionality. Better for us to read in <a href="https://amp.dev/documentation/components/?format=websites">AMPs official documentations</a> about the components that already created by AMP teams so we can have better visibility when creating AMP pages in the future.</p>\n<h2>Generate AMP in Nuxt.js</h2>\n<p>Creating AMP pages in JavaScript framework was like an impossible things to do. This is because JavaScript is forbidden in AMP, while in JavaScript framework become the main technology to be used.</p>\n<p>Today, JavaScript framework already have power to generate static pages like Nuxt.js already done. In my blog itself, I use Nuxt.js for generate static pages to simplify my deployment process. Unfortunately, the static files that generated bu Nuxt.js is bloated with many external JavaScript that need to be clean up first. So the hardest task to generate AMP in Nuxt.js is cleaning process itself.</p>\n<p>These are steps that I have been done in generate AMP for my blog:</p>\n<h3>1. Creating new pages</h3>\n<p>First of all, I need to create new pages under the same root url <code>/amp/**</code> with nearly same content with the normal pages. This is for helping us to differentiate AMP pages with the normal pages so we can running clean up process is only for AMP pages an skip the normal pages.</p>\n<h3>2. Remove unused codes</h3>\n<p>Because AMP is not allowing any custom JavaScript actions, so any codes in our AMP pages which placed under <code>methods</code> in Vue\'s single file components file are need to be removed. This code become unused because we need to strip down all interactions that require any custom Javascript.</p>\n<h3>3. Adding hooks in generate</h3>\n<p>I use <code>generate</code> command in Nuxt.js to creating static files for my blog so I need to add hooks to detect when this command is executed. In Nuxt, this task can be done with adding this below code in <code>nuxt.config.js</code> file like this below example:</p>\n<pre><code class="language-javascript">module.exports = {\n  hooks: {\n    \'generate:page\': (page) =&gt; {\n      if (/^\\/amp/gi.test(page.route)) {\n        console.log(\'processing amp file: \', page.route)\n      }\n    }\n  },\n}\n</code></pre>\n<p>The code above is for inserting a process when Nuxt execute command <code>generate</code> and we adding <em>Regular Expressions</em> to detect only the AMP pages route that have added process and skip all the normal pages.</p>\n<h3>4. Manipulate HTML output</h3>\n<p>From our sample code above, we have <code>page</code> object as parameter in our generate hooks. If we get property <code>page.html</code> we can get the HTML string as our final output as HTML file.</p>\n<p>The good thing from Internet is there are many good people there. I found the article from <a href="https://toor.co/blog/amp-pages-using-nuxt-js/">toor.co ↗️</a> that share about cleaning up HTML string from Nuxt to support AMP.</p>\n<p>We can just copy-paste this below code:</p>\n<pre><code class="language-javascript">const ampScript = \'&lt;script async src=&quot;https://cdn.ampproject.org/v0.js&quot;&gt;&lt;/script&gt;\'\nconst ampBoilerplate = \'&lt;style amp-boilerplate&gt;body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}&lt;/style&gt;&lt;noscript&gt;&lt;style amp-boilerplate&gt;body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}&lt;/style&gt;&lt;/noscript&gt;\'\n\nmodule.exports = (html) =&gt; {\n  // Add ⚡ to html tag\n  html = html.replace(/&lt;html/gi, \'&lt;html ⚡\')\n\n  // Combine css into single tag\n  let styleConcat = \'\'\n  html = html.replace(/&lt;style[^&gt;]*data-vue-ssr[^&gt;]*&gt;(.*?)?&lt;\\/style&gt;/gi, (match, sub) =&gt; {\n    styleConcat += sub\n    return \'\'\n  })\n  html = html.replace(\'&lt;/head&gt;\', `&lt;style amp-custom&gt;${styleConcat}&lt;/style&gt;&lt;/head&gt;`)\n\n  // Remove preload and prefetch tags\n  html = html.replace(/&lt;link[^&gt;]*rel=&quot;(?:preload|prefetch)?&quot;[^&gt;]*&gt;/gi, \'\')\n\n  // Remove amphtml tag\n  html = html.replace(/&lt;link[^&gt;]*rel=&quot;(?:amphtml)?&quot;[^&gt;]*&gt;/gi, \'\')\n\n  // Remove data attributes from tags\n  html = html.replace(/\\s*data-(?:[^=&gt;]*=&quot;[^&quot;]*&quot;|[^=&gt;\\s]*)/gi, \'\')\n\n  // Remove JS script tags except for ld+json\n  html = html.replace(/&lt;script\\b[^&lt;]*(?:(?!&lt;\\/script&gt;)&lt;[^&lt;]*)*&lt;\\/script&gt;/gi, (match) =&gt; {\n    return (/application\\/ld\\+json/gi.test(match)) ? match : \'\'\n  })\n\n  // Replace img tags with amp-img\n  html = html.replace(/&lt;img([^&gt;]*)&gt;/gi, (match, sub) =&gt; {\n    return `&lt;amp-img ${sub} layout=intrinsic&gt;&lt;/amp-img&gt;`\n  })\n\n  // Add AMP script before &lt;/head&gt;\n  html = html.replace(\'&lt;/head&gt;\', ampScript + ampBoilerplate + \'&lt;/head&gt;\')\n\n  return html\n}\n</code></pre>\n<p>You can check the detail of each process with reading the comments in that code. Basically we just <em>replace</em> the characters we didn\'t need with <em>RegEx</em> and adding AMP support script. We adding emoji ⚡, remove all external JavaScript, combine all internal CSS into one tag under <code>&lt;style amp-custom&gt;</code> and any other tasks.</p>\n<p>This functions is put in <code>plugins/ampify.js</code> directory that will be called in generate hook generate like this below sample:</p>\n<pre><code class="language-javascript">const ampify = require(\'./plugins/ampify\')\n\nmodule.exports = {\n  hooks: {\n    \'generate:page\': (page) =&gt; {\n      if (/^\\/amp/gi.test(page.route)) {\n        console.log(\'processing amp file: \', page.route)\n        page.html = ampify(page.html)\n      }\n    }\n  },\n}\n</code></pre>\n<h3>5. Change all scoped style to global style</h3>\n<p>Because I am not good enough to playing with <em>RegEx</em> code, it\'s very risky to update the RegEx when something unexpected happened.</p>\n<p>And I realize that this below code make weird result:</p>\n<pre><code class="language-javascript">// Remove data attributes from tags\nhtml = html.replace(/\\s*data-(?:[^=&gt;]*=&quot;[^&quot;]*&quot;|[^=&gt;\\s]*)/gi, \'\')\n</code></pre>\n<p>The above code made all my scoped style become invalid because wrong replace process. The easiest part for me to solve this thing is move all scoped style into global style. But this task can be done easily because with unscoped style I need to apply CSS module architecture to keep the CSS from one components is not affecting any other component. I prefer use BEM CSS because of my experience of using this CSS convention.</p>\n<p>This step is optional for you if you can update the Regex part that made weird replace process.</p>\n<h3>6. Change all lazy load images</h3>\n<p>In non-AMP pages, I use <a href="https://github.com/mazipan/vue-tiny-lazyload-img">VueTinyLazyloadImg ↗️</a> library to creating lazy load image. For AMP we don\'t need this library anymore because amp have <code>amp-img</code> component that already support lazy load by default.</p>\n<p>Using <code>amp-img</code> make my existing function in lazy load become invalid for AMP because with in existing function I put attribut <code>data-src</code> to load the original source of image and using <code>src</code> for placeholder image. This thing need to be adjust for AMP with replacing <code>data-src</code> attribute with <code>src</code> and delete placeholder image.</p>\n<p>You can see the RegEX function in this below sample:</p>\n<pre><code class="language-javascript">function replaceLazyloadImg (str) {\n  return str &amp;&amp; str.replace(/&quot;src&quot;:(?:[^=&gt;][^&quot;]*&quot;,&quot;data-src&quot;|[^=&gt;&quot;]*)/gi, \'&quot;src&quot;\')\n}\n</code></pre>\n<h3>7. Adding fix size for images</h3>\n<p>This is the step that I haven\'t done when this article published. All the image tag should have <code>height</code> and <code>width</code> attribute.</p>\n<h3>8. Adding canonical</h3>\n<p>We need to linking our AMP with each respective normal pages that have same content with our AMP.</p>\n<p>You can put link canonical under <code>&lt;head&gt;</code> tag in AMP page like in this below code :</p>\n<pre><code class="language-html">&lt;head&gt;\n  &lt;link rel=&quot;canonical&quot; href=&quot;url-to-normal-page&quot;&gt;&lt;/link&gt;\n&lt;/head&gt;\n</code></pre>\n<p>In our normal page we can add <code>amphtml</code> link, see this below code:</p>\n<pre><code class="language-html">&lt;link rel=&quot;amphtml&quot; href=&quot;url-to-amp-page&quot;&gt;&lt;/link&gt;\n</code></pre>\n<p>In Nuxt.js, we can add this meta tag via <code>head()</code> in our .vue files, see this below sample:</p>\n<pre><code class="language-javascript">export default {\n  head () {\n    const url = `${this.productionUrl}/${this.meta.slug}`\n    return {\n      link: [\n        { hid: \'canonical\', rel: \'canonical\', href: url }\n      ]\n    }\n  }\n}\n</code></pre>\n<p>And this below code is sample to insert tag <code>amphtml</code> in normal page:</p>\n<pre><code class="language-javascript">export default {\n  head () {\n    const ampUrl = `${this.productionUrl}/amp/${this.meta.slug}`\n    return {\n      link: [\n        { hid: \'amphtml\', rel: \'amphtml\', href: ampUrl }\n      ]\n    }\n  }\n}\n</code></pre>\n<h3>9. Adding Google Analytics</h3>\n<p>Adding Google Analytics in AMP is quite different with the normal page. In short, we just need to add this below script to adding Google Analytics engine in our AMP pages:</p>\n<pre><code class="language-html">&lt;script async custom-element=&quot;amp-analytics&quot; src=&quot;https://cdn.ampproject.org/v0/amp-analytics-0.1.js&quot;&gt;&lt;/script&gt;\n</code></pre>\n<p>Also placing this below simple tracker to tracking page view state:</p>\n<pre><code class="language-html">&lt;amp-analytics type=\'googleanalytics\'&gt;\n  &lt;script type=\'application/json\'&gt;\n    {\n      &quot;vars&quot;: {\n        &quot;account&quot;: &quot;UA-12345678-X&quot;\n      },\n      &quot;triggers&quot;: {\n        &quot;trackPageview&quot;: {\n          &quot;on&quot;: &quot;visible&quot;,\n          &quot;request&quot;: &quot;pageview&quot;\n        }\n      }\n    }\n  &lt;/script&gt;\n&lt;/amp-analytics&gt;\n</code></pre>\n<p>I update the <code>ampify</code> script to insert analytics into our AMP pages:</p>\n<pre><code class="language-javascript">const ampScript = `&lt;script async src=&quot;https://cdn.ampproject.org/v0.js&quot;&gt;&lt;/script&gt;\n&lt;script async custom-element=&quot;amp-analytics&quot; src=&quot;https://cdn.ampproject.org/v0/amp-analytics-0.1.js&quot;&gt;&lt;/script&gt;`\n</code></pre>\n<p>We also insert page view tracker before close tag <code>&lt;/body&gt;</code> like this below code:</p>\n<pre><code class="language-javascript">// Add AMP analytics\nhtml = html.replace(\'&lt;/body&gt;\',\n`&lt;amp-analytics type=\'googleanalytics\'&gt;\n    &lt;script type=\'application/json\'&gt;\n      {\n        &quot;vars&quot;: {\n          &quot;account&quot;: &quot;UA-12345678-X&quot;\n        },\n        &quot;triggers&quot;: {\n          &quot;trackPageview&quot;: {\n            &quot;on&quot;: &quot;visible&quot;,\n            &quot;request&quot;: &quot;pageview&quot;\n          }\n        }\n      }\n    &lt;/script&gt;\n  &lt;/amp-analytics&gt;\n&lt;/body&gt;`)\n</code></pre>\n<h2>Validate AMP Pages</h2>\n<p>Not all AMP can be shown in Google Search result, only the valid pages that can have badge in search result. So we need to test the validity first before publishing our AMP pages. There are some alternatives outside to test AMP validation, two website that I can mention are:</p>\n<ul>\n<li><a href="https://search.google.com/test/amp">https://search.google.com/test/amp</a></li>\n<li><a href="https://validator.ampproject.org/">https://validator.ampproject.org/</a></li>\n</ul>\n<p>For my blog itself, you can see the test results in below list:</p>\n<ul>\n<li><a href="https://search.google.com/test/amp?url=https%3A%2F%2Fwww.mazipan.xyz%2Famp">Homepage</a></li>\n<li><a href="https://search.google.com/test/amp?url=https%3A%2F%2Fwww.mazipan.xyz%2Famp%2Fabout">About Page</a></li>\n<li><a href="https://search.google.com/test/amp?url=https%3A%2F%2Fwww.mazipan.xyz%2Famp%2Feslint-formatter-html-extended%2F">Article Page - without any images</a></li>\n<li><a href="https://search.google.com/test/amp?url=https%3A%2F%2Fwww.mazipan.xyz%2Famp%2Ftasting-reasonml-for-react%2F">Article Page - with images</a></li>\n</ul>\n<h2>Github Repo</h2>\n<p><a href="https://github.com/mazipan/blog-2.0">https://github.com/mazipan/blog-2.0 ↗️</a></p>\n<h3>May useful for you...</h3>\n'}}}]);