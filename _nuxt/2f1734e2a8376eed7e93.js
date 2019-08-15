(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{230:function(e,t){e.exports={body:"## About Static Blog\n\n\"Static blog\" is a blog that we create without using * backend *, so that we can deploy easily to various static hosts such as Github Pages, Netlify, Firebase, and others. This static blog usually uses templates like * Markdown * that will * build * shortly before * deploy * to produce static HTML, CSS, and JavaScript files.\n\n## What is Gridsome?\n\n<img v-lazyload src=\"/images/placeholder-1x1.png\" data-src=\"https://gridsome.org/logos/logo-normal-dark.svg\" alt=\"Gridsome Logo\">\n\n[Gridsome ↗️](https://gridsome.org/) is a new kid in the Vue.js ecosystem that specializes in creating static pages. If you are a React.js user, of course you are familiar with the name [Gatsby ↗️](https://www.gatsbyjs.org/) as one of the best static page generator at the moment. Well, Gridsome was very inspired by Gatsby in the React.js ecosystem.\n\nIt's not new that the ecosystem in Vue is not as strong as and as complete as React, but I am always amazed by those who are struggling to make alternatives to many great things to react to Vue. Gridsome, like will follow the success of Nuxt in trying to adopt Next.js on React. Nuxt today has become the best choice when making an any application on Vue.\n\n## Why is Gridsome better than Nuxt?\n\nNuxt is basically intended to create web applications in Vue that require rendering on a server, Nuxt is more specifically very prepared to handle a variety of complex needs that usually arise when creating a web application. Although Nuxt has the ability to generate static files that we can use to create static blogs, actually this is a function that is nice to have for Nuxt.\n\nWhile Gridsome is a player who has specialists in this section. Gridsome has *generate* features that are armed with various *built-in* other features needed when creating static blogs such as automatic *code-splitting*, image compression, full PWA support, and of course the very friendly with SEO. We can also easily organize our content files with **Markdown** without the need for any additional configuration. If you look at the [Blog 2.0 repository↗️](/blog-2-0-in-nuxtjs) that I made with Nuxt, of course you will know that I have to do various \"cheats\" to do the same thing.\n\n<img v-lazyload src=\"/images/placeholder-1x1.png\" data-src=\"https://raw.githubusercontent.com/gridsome/gridsome.org/master/docs/images/how-it-works.png\" alt=\"How Gridsome Works\">\n\n## Create awesome blog with Gridsome\n\nCreating a blog with Gridsome is now made easier by the *starter template* which in my opinion is quite complete for the general needs of a blog.\n\nGridsome already make a starter [gridsome-starter-blog ↗️](https://github.com/gridsome/gridsome-starter-blog) that you can use quickly and easily for the first time. Using a starter like this will reduce a lot of burden up front to do many configurations which of course will be confusing for beginners like me.\n\nHere are more or less the steps to creating a blog using Gridsome's template starter:\n\n**1. Install Gridsome CLI**\n\n```bash\n$ npm install --global @gridsome/cli\n```\n\n**2. Create new project using `gridsome-starter-blog`**\n\n```bash\n$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n```\n\n**3. Running in local environment**\n\n```bash\n$ gridsome develop\n```\n\n**4. Generate static files**\n\n```bash\n$ gridsome build\n```\n\nYou can see the results of creating a Blog with gridsome starter in the repository [https://github.com/mazipan/gridsome-blog ↗️](https://github.com/mazipan/gridsome-blog)\n\n## Deploy to Netlify\n\nTo deploy Gridsome to Netlify is also very easy, even Gridsome also provides official documentation about the steps on the page [deploy-to-netlify ↗️](https://gridsome.org/docs/deploy-to-netlify), which are more or less the following:\n\n1) Create new project in Netlify\n\n2) Adding command `gridsome build` in *build command* field\n\n3) Add directory `dist` in *publish directory* field\n\n4) You can see the result in [https://gridsome-blog.netlify.com/ ↗️](https://gridsome-blog.netlify.com/)\n\n## Adding new article/post\n\n1) All articles are under `/content/posts` directory using Markdown file which has `.md` extension.\n\n2) We just add a new file with the file name which will later be the url of the article.\n\n3) Create a meta data for your new article, like the following example:\n\n```yaml\n---\ntitle: Create awesome blog with Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: '2019-03-14'\nminute2read: 10\ndescription: How to start creating awesome static Blogs using Gridsome - a Vue.js static site generator in a short time\ncategories: [javascript, gridsome]\n---\n```\n\n4) We can add images to related articles in the `/content/posts/images` directory, and simply link with the usual Markdown code like `![Image Alt](./images/logo-poster.png)`\n\n5) We can change the configuration of the blog name and blog description in the `gridsome.config.js` file\n\n## Adding sitemap.xml support\n\nUnfortunately, the default template has not been embedded in support to create `sitemap.xml`, so here we will add it ourselves in the following way:\n\n1. Adding dependency\n\n```bash\nyarn add @gridsome/plugin-sitemap\n```\n\n2. Add `siteUrl` in the `gridsome.config.js` file with the production URL value from our blog\n\n3. Add a configuration for the sitemap in the `gridsome.config.js` file on the `plugins` property, as shown below:\n\n```javascript\nmodule.exports = {\n  plugins: [\n    {\n      use: '@gridsome/plugin-sitemap',\n      options: {\n        cacheTime: 600000, // default\n        exclude: ['/exclude-me'],\n        config: {\n          '/articles/*': {\n            changefreq: 'weekly',\n            priority: 0.5\n          },\n          '/about': {\n            changefreq: 'monthly',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n```\n\n### Hopefully useful...\n",html:'<h2>About Static Blog</h2>\n<p>&quot;Static blog&quot; is a blog that we create without using * backend *, so that we can deploy easily to various static hosts such as Github Pages, Netlify, Firebase, and others. This static blog usually uses templates like * Markdown * that will * build * shortly before * deploy * to produce static HTML, CSS, and JavaScript files.</p>\n<h2>What is Gridsome?</h2>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="https://gridsome.org/logos/logo-normal-dark.svg" alt="Gridsome Logo">\n<p><a href="https://gridsome.org/">Gridsome ↗️</a> is a new kid in the Vue.js ecosystem that specializes in creating static pages. If you are a React.js user, of course you are familiar with the name <a href="https://www.gatsbyjs.org/">Gatsby ↗️</a> as one of the best static page generator at the moment. Well, Gridsome was very inspired by Gatsby in the React.js ecosystem.</p>\n<p>It\'s not new that the ecosystem in Vue is not as strong as and as complete as React, but I am always amazed by those who are struggling to make alternatives to many great things to react to Vue. Gridsome, like will follow the success of Nuxt in trying to adopt Next.js on React. Nuxt today has become the best choice when making an any application on Vue.</p>\n<h2>Why is Gridsome better than Nuxt?</h2>\n<p>Nuxt is basically intended to create web applications in Vue that require rendering on a server, Nuxt is more specifically very prepared to handle a variety of complex needs that usually arise when creating a web application. Although Nuxt has the ability to generate static files that we can use to create static blogs, actually this is a function that is nice to have for Nuxt.</p>\n<p>While Gridsome is a player who has specialists in this section. Gridsome has <em>generate</em> features that are armed with various <em>built-in</em> other features needed when creating static blogs such as automatic <em>code-splitting</em>, image compression, full PWA support, and of course the very friendly with SEO. We can also easily organize our content files with <strong>Markdown</strong> without the need for any additional configuration. If you look at the <a href="/blog-2-0-in-nuxtjs">Blog 2.0 repository↗️</a> that I made with Nuxt, of course you will know that I have to do various &quot;cheats&quot; to do the same thing.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="https://raw.githubusercontent.com/gridsome/gridsome.org/master/docs/images/how-it-works.png" alt="How Gridsome Works">\n<h2>Create awesome blog with Gridsome</h2>\n<p>Creating a blog with Gridsome is now made easier by the <em>starter template</em> which in my opinion is quite complete for the general needs of a blog.</p>\n<p>Gridsome already make a starter <a href="https://github.com/gridsome/gridsome-starter-blog">gridsome-starter-blog ↗️</a> that you can use quickly and easily for the first time. Using a starter like this will reduce a lot of burden up front to do many configurations which of course will be confusing for beginners like me.</p>\n<p>Here are more or less the steps to creating a blog using Gridsome\'s template starter:</p>\n<p><strong>1. Install Gridsome CLI</strong></p>\n<pre><code class="language-bash">$ npm install --global @gridsome/cli\n</code></pre>\n<p><strong>2. Create new project using <code>gridsome-starter-blog</code></strong></p>\n<pre><code class="language-bash">$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n</code></pre>\n<p><strong>3. Running in local environment</strong></p>\n<pre><code class="language-bash">$ gridsome develop\n</code></pre>\n<p><strong>4. Generate static files</strong></p>\n<pre><code class="language-bash">$ gridsome build\n</code></pre>\n<p>You can see the results of creating a Blog with gridsome starter in the repository <a href="https://github.com/mazipan/gridsome-blog">https://github.com/mazipan/gridsome-blog ↗️</a></p>\n<h2>Deploy to Netlify</h2>\n<p>To deploy Gridsome to Netlify is also very easy, even Gridsome also provides official documentation about the steps on the page <a href="https://gridsome.org/docs/deploy-to-netlify">deploy-to-netlify ↗️</a>, which are more or less the following:</p>\n<ol>\n<li>\n<p>Create new project in Netlify</p>\n</li>\n<li>\n<p>Adding command <code>gridsome build</code> in <em>build command</em> field</p>\n</li>\n<li>\n<p>Add directory <code>dist</code> in <em>publish directory</em> field</p>\n</li>\n<li>\n<p>You can see the result in <a href="https://gridsome-blog.netlify.com/">https://gridsome-blog.netlify.com/ ↗️</a></p>\n</li>\n</ol>\n<h2>Adding new article/post</h2>\n<ol>\n<li>\n<p>All articles are under <code>/content/posts</code> directory using Markdown file which has <code>.md</code> extension.</p>\n</li>\n<li>\n<p>We just add a new file with the file name which will later be the url of the article.</p>\n</li>\n<li>\n<p>Create a meta data for your new article, like the following example:</p>\n</li>\n</ol>\n<pre><code class="language-yaml">---\ntitle: Create awesome blog with Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: \'2019-03-14\'\nminute2read: 10\ndescription: How to start creating awesome static Blogs using Gridsome - a Vue.js static site generator in a short time\ncategories: [javascript, gridsome]\n---\n</code></pre>\n<ol start="4">\n<li>\n<p>We can add images to related articles in the <code>/content/posts/images</code> directory, and simply link with the usual Markdown code like <code>![Image Alt](./images/logo-poster.png)</code></p>\n</li>\n<li>\n<p>We can change the configuration of the blog name and blog description in the <code>gridsome.config.js</code> file</p>\n</li>\n</ol>\n<h2>Adding sitemap.xml support</h2>\n<p>Unfortunately, the default template has not been embedded in support to create <code>sitemap.xml</code>, so here we will add it ourselves in the following way:</p>\n<ol>\n<li>Adding dependency</li>\n</ol>\n<pre><code class="language-bash">yarn add @gridsome/plugin-sitemap\n</code></pre>\n<ol start="2">\n<li>\n<p>Add <code>siteUrl</code> in the <code>gridsome.config.js</code> file with the production URL value from our blog</p>\n</li>\n<li>\n<p>Add a configuration for the sitemap in the <code>gridsome.config.js</code> file on the <code>plugins</code> property, as shown below:</p>\n</li>\n</ol>\n<pre><code class="language-javascript">module.exports = {\n  plugins: [\n    {\n      use: \'@gridsome/plugin-sitemap\',\n      options: {\n        cacheTime: 600000, // default\n        exclude: [\'/exclude-me\'],\n        config: {\n          \'/articles/*\': {\n            changefreq: \'weekly\',\n            priority: 0.5\n          },\n          \'/about\': {\n            changefreq: \'monthly\',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n</code></pre>\n<h3>Hopefully useful...</h3>\n',attributes:{title:"Create awesome blog with Gridsome",slug:"create-awesome-blog-with-gridsome",date:"2019-03-14",minute2read:10,description:"How to start creating awesome static Blogs using Gridsome - a Vue.js static site generator in a short time",categories:["javascript","gridsome"],cover:"https://raw.githubusercontent.com/gridsome/gridsome.org/master/docs/images/how-it-works.png",_meta:{resourcePath:"/home/travis/build/mazipan/blog-2.0/contents/published/create-awesome-blog-with-gridsome/en.md"}},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("About Static Blog")]),_vm._v(" "),_c(\'p\',[_vm._v("\\"Static blog\\" is a blog that we create without using * backend *, so that we can deploy easily to various static hosts such as Github Pages, Netlify, Firebase, and others. This static blog usually uses templates like * Markdown * that will * build * shortly before * deploy * to produce static HTML, CSS, and JavaScript files.")]),_vm._v(" "),_c(\'h2\',[_vm._v("What is Gridsome?")]),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"https://gridsome.org/logos/logo-normal-dark.svg","alt":"Gridsome Logo"}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c(\'p\',[_vm._v("It\'s not new that the ecosystem in Vue is not as strong as and as complete as React, but I am always amazed by those who are struggling to make alternatives to many great things to react to Vue. Gridsome, like will follow the success of Nuxt in trying to adopt Next.js on React. Nuxt today has become the best choice when making an any application on Vue.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Why is Gridsome better than Nuxt?")]),_vm._v(" "),_c(\'p\',[_vm._v("Nuxt is basically intended to create web applications in Vue that require rendering on a server, Nuxt is more specifically very prepared to handle a variety of complex needs that usually arise when creating a web application. Although Nuxt has the ability to generate static files that we can use to create static blogs, actually this is a function that is nice to have for Nuxt.")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"https://raw.githubusercontent.com/gridsome/gridsome.org/master/docs/images/how-it-works.png","alt":"How Gridsome Works"}}),_vm._v(" "),_c(\'h2\',[_vm._v("Create awesome blog with Gridsome")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'p\',[_vm._v("Here are more or less the steps to creating a blog using Gridsome\'s template starter:")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c(\'h2\',[_vm._v("Deploy to Netlify")]),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_c(\'h2\',[_vm._v("Adding new article/post")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_c(\'h2\',[_vm._v("Adding sitemap.xml support")]),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_c(\'h3\',[_vm._v("Hopefully useful...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'a\',{attrs:{"href":"https://gridsome.org/"}},[_vm._v("Gridsome ↗️")]),_vm._v(" is a new kid in the Vue.js ecosystem that specializes in creating static pages. If you are a React.js user, of course you are familiar with the name "),_c(\'a\',{attrs:{"href":"https://www.gatsbyjs.org/"}},[_vm._v("Gatsby ↗️")]),_vm._v(" as one of the best static page generator at the moment. Well, Gridsome was very inspired by Gatsby in the React.js ecosystem.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("While Gridsome is a player who has specialists in this section. Gridsome has "),_c(\'em\',[_vm._v("generate")]),_vm._v(" features that are armed with various "),_c(\'em\',[_vm._v("built-in")]),_vm._v(" other features needed when creating static blogs such as automatic "),_c(\'em\',[_vm._v("code-splitting")]),_vm._v(", image compression, full PWA support, and of course the very friendly with SEO. We can also easily organize our content files with "),_c(\'strong\',[_vm._v("Markdown")]),_vm._v(" without the need for any additional configuration. If you look at the "),_c(\'a\',{attrs:{"href":"/blog-2-0-in-nuxtjs"}},[_vm._v("Blog 2.0 repository↗️")]),_vm._v(" that I made with Nuxt, of course you will know that I have to do various \\"cheats\\" to do the same thing.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Creating a blog with Gridsome is now made easier by the "),_c(\'em\',[_vm._v("starter template")]),_vm._v(" which in my opinion is quite complete for the general needs of a blog.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Gridsome already make a starter "),_c(\'a\',{attrs:{"href":"https://github.com/gridsome/gridsome-starter-blog"}},[_vm._v("gridsome-starter-blog ↗️")]),_vm._v(" that you can use quickly and easily for the first time. Using a starter like this will reduce a lot of burden up front to do many configurations which of course will be confusing for beginners like me.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("1. Install Gridsome CLI")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ npm install --global @gridsome/cli\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("2. Create new project using "),_c(\'code\',{pre:true},[_vm._v("gridsome-starter-blog")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("3. Running in local environment")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome develop\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("4. Generate static files")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome build\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("You can see the results of creating a Blog with gridsome starter in the repository "),_c(\'a\',{attrs:{"href":"https://github.com/mazipan/gridsome-blog"}},[_vm._v("https://github.com/mazipan/gridsome-blog ↗️")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("To deploy Gridsome to Netlify is also very easy, even Gridsome also provides official documentation about the steps on the page "),_c(\'a\',{attrs:{"href":"https://gridsome.org/docs/deploy-to-netlify"}},[_vm._v("deploy-to-netlify ↗️")]),_vm._v(", which are more or less the following:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_c(\'p\',[_vm._v("Create new project in Netlify")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Adding command "),_c(\'code\',{pre:true},[_vm._v("gridsome build")]),_vm._v(" in "),_c(\'em\',[_vm._v("build command")]),_vm._v(" field")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Add directory "),_c(\'code\',{pre:true},[_vm._v("dist")]),_vm._v(" in "),_c(\'em\',[_vm._v("publish directory")]),_vm._v(" field")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("You can see the result in "),_c(\'a\',{attrs:{"href":"https://gridsome-blog.netlify.com/"}},[_vm._v("https://gridsome-blog.netlify.com/ ↗️")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_c(\'p\',[_vm._v("All articles are under "),_c(\'code\',{pre:true},[_vm._v("/content/posts")]),_vm._v(" directory using Markdown file which has "),_c(\'code\',{pre:true},[_vm._v(".md")]),_vm._v(" extension.")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("We just add a new file with the file name which will later be the url of the article.")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Create a meta data for your new article, like the following example:")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-yaml"}},[_vm._v("---\\ntitle: Create awesome blog with Gridsome\\nslug: create-awesome-blog-with-gridsome\\ndate: \'2019-03-14\'\\nminute2read: 10\\ndescription: How to start creating awesome static Blogs using Gridsome - a Vue.js static site generator in a short time\\ncategories: [javascript, gridsome]\\n---\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',{attrs:{"start":"4"}},[_c(\'li\',[_c(\'p\',[_vm._v("We can add images to related articles in the "),_c(\'code\',{pre:true},[_vm._v("/content/posts/images")]),_vm._v(" directory, and simply link with the usual Markdown code like "),_c(\'code\',{pre:true},[_vm._v("![Image Alt](./images/logo-poster.png)")])])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("We can change the configuration of the blog name and blog description in the "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")]),_vm._v(" file")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Unfortunately, the default template has not been embedded in support to create "),_c(\'code\',{pre:true},[_vm._v("sitemap.xml")]),_vm._v(", so here we will add it ourselves in the following way:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_vm._v("Adding dependency")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("yarn add @gridsome/plugin-sitemap\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',{attrs:{"start":"2"}},[_c(\'li\',[_c(\'p\',[_vm._v("Add "),_c(\'code\',{pre:true},[_vm._v("siteUrl")]),_vm._v(" in the "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")]),_vm._v(" file with the production URL value from our blog")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Add a configuration for the sitemap in the "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")]),_vm._v(" file on the "),_c(\'code\',{pre:true},[_vm._v("plugins")]),_vm._v(" property, as shown below:")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-javascript"}},[_vm._v("module.exports = {\\n  plugins: [\\n    {\\n      use: \'@gridsome/plugin-sitemap\',\\n      options: {\\n        cacheTime: 600000, // default\\n        exclude: [\'/exclude-me\'],\\n        config: {\\n          \'/articles/*\': {\\n            changefreq: \'weekly\',\\n            priority: 0.5\\n          },\\n          \'/about\': {\\n            changefreq: \'monthly\',\\n            priority: 0.7\\n          }\\n        }\\n      }\\n    }\\n  ]\\n}\\n")])]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content-markdown"},[o("h2",[e._v("About Static Blog")]),e._v(" "),o("p",[e._v('"Static blog" is a blog that we create without using * backend *, so that we can deploy easily to various static hosts such as Github Pages, Netlify, Firebase, and others. This static blog usually uses templates like * Markdown * that will * build * shortly before * deploy * to produce static HTML, CSS, and JavaScript files.')]),e._v(" "),o("h2",[e._v("What is Gridsome?")]),e._v(" "),o("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"https://gridsome.org/logos/logo-normal-dark.svg",alt:"Gridsome Logo"}}),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("It's not new that the ecosystem in Vue is not as strong as and as complete as React, but I am always amazed by those who are struggling to make alternatives to many great things to react to Vue. Gridsome, like will follow the success of Nuxt in trying to adopt Next.js on React. Nuxt today has become the best choice when making an any application on Vue.")]),e._v(" "),o("h2",[e._v("Why is Gridsome better than Nuxt?")]),e._v(" "),o("p",[e._v("Nuxt is basically intended to create web applications in Vue that require rendering on a server, Nuxt is more specifically very prepared to handle a variety of complex needs that usually arise when creating a web application. Although Nuxt has the ability to generate static files that we can use to create static blogs, actually this is a function that is nice to have for Nuxt.")]),e._v(" "),e._m(1),e._v(" "),o("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"https://raw.githubusercontent.com/gridsome/gridsome.org/master/docs/images/how-it-works.png",alt:"How Gridsome Works"}}),e._v(" "),o("h2",[e._v("Create awesome blog with Gridsome")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("Here are more or less the steps to creating a blog using Gridsome's template starter:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),o("h2",[e._v("Deploy to Netlify")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),o("h2",[e._v("Adding new article/post")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),o("h2",[e._v("Adding sitemap.xml support")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),o("h3",[e._v("Hopefully useful...")])])},this.$options.staticRenderFns=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:"https://gridsome.org/"}},[this._v("Gridsome ↗️")]),this._v(" is a new kid in the Vue.js ecosystem that specializes in creating static pages. If you are a React.js user, of course you are familiar with the name "),t("a",{attrs:{href:"https://www.gatsbyjs.org/"}},[this._v("Gatsby ↗️")]),this._v(" as one of the best static page generator at the moment. Well, Gridsome was very inspired by Gatsby in the React.js ecosystem.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("While Gridsome is a player who has specialists in this section. Gridsome has "),o("em",[e._v("generate")]),e._v(" features that are armed with various "),o("em",[e._v("built-in")]),e._v(" other features needed when creating static blogs such as automatic "),o("em",[e._v("code-splitting")]),e._v(", image compression, full PWA support, and of course the very friendly with SEO. We can also easily organize our content files with "),o("strong",[e._v("Markdown")]),e._v(" without the need for any additional configuration. If you look at the "),o("a",{attrs:{href:"/blog-2-0-in-nuxtjs"}},[e._v("Blog 2.0 repository↗️")]),e._v(' that I made with Nuxt, of course you will know that I have to do various "cheats" to do the same thing.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Creating a blog with Gridsome is now made easier by the "),t("em",[this._v("starter template")]),this._v(" which in my opinion is quite complete for the general needs of a blog.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Gridsome already make a starter "),t("a",{attrs:{href:"https://github.com/gridsome/gridsome-starter-blog"}},[this._v("gridsome-starter-blog ↗️")]),this._v(" that you can use quickly and easily for the first time. Using a starter like this will reduce a lot of burden up front to do many configurations which of course will be confusing for beginners like me.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("1. Install Gridsome CLI")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ npm install --global @gridsome/cli\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("2. Create new project using "),t("code",{pre:!0},[this._v("gridsome-starter-blog")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("3. Running in local environment")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome develop\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("4. Generate static files")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome build\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can see the results of creating a Blog with gridsome starter in the repository "),t("a",{attrs:{href:"https://github.com/mazipan/gridsome-blog"}},[this._v("https://github.com/mazipan/gridsome-blog ↗️")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To deploy Gridsome to Netlify is also very easy, even Gridsome also provides official documentation about the steps on the page "),t("a",{attrs:{href:"https://gridsome.org/docs/deploy-to-netlify"}},[this._v("deploy-to-netlify ↗️")]),this._v(", which are more or less the following:")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ol",[o("li",[o("p",[e._v("Create new project in Netlify")])]),e._v(" "),o("li",[o("p",[e._v("Adding command "),o("code",{pre:!0},[e._v("gridsome build")]),e._v(" in "),o("em",[e._v("build command")]),e._v(" field")])]),e._v(" "),o("li",[o("p",[e._v("Add directory "),o("code",{pre:!0},[e._v("dist")]),e._v(" in "),o("em",[e._v("publish directory")]),e._v(" field")])]),e._v(" "),o("li",[o("p",[e._v("You can see the result in "),o("a",{attrs:{href:"https://gridsome-blog.netlify.com/"}},[e._v("https://gridsome-blog.netlify.com/ ↗️")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ol",[o("li",[o("p",[e._v("All articles are under "),o("code",{pre:!0},[e._v("/content/posts")]),e._v(" directory using Markdown file which has "),o("code",{pre:!0},[e._v(".md")]),e._v(" extension.")])]),e._v(" "),o("li",[o("p",[e._v("We just add a new file with the file name which will later be the url of the article.")])]),e._v(" "),o("li",[o("p",[e._v("Create a meta data for your new article, like the following example:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-yaml"}},[this._v("---\ntitle: Create awesome blog with Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: '2019-03-14'\nminute2read: 10\ndescription: How to start creating awesome static Blogs using Gridsome - a Vue.js static site generator in a short time\ncategories: [javascript, gridsome]\n---\n")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ol",{attrs:{start:"4"}},[o("li",[o("p",[e._v("We can add images to related articles in the "),o("code",{pre:!0},[e._v("/content/posts/images")]),e._v(" directory, and simply link with the usual Markdown code like "),o("code",{pre:!0},[e._v("![Image Alt](./images/logo-poster.png)")])])]),e._v(" "),o("li",[o("p",[e._v("We can change the configuration of the blog name and blog description in the "),o("code",{pre:!0},[e._v("gridsome.config.js")]),e._v(" file")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Unfortunately, the default template has not been embedded in support to create "),t("code",{pre:!0},[this._v("sitemap.xml")]),this._v(", so here we will add it ourselves in the following way:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Adding dependency")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("yarn add @gridsome/plugin-sitemap\n")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Add "),o("code",{pre:!0},[e._v("siteUrl")]),e._v(" in the "),o("code",{pre:!0},[e._v("gridsome.config.js")]),e._v(" file with the production URL value from our blog")])]),e._v(" "),o("li",[o("p",[e._v("Add a configuration for the sitemap in the "),o("code",{pre:!0},[e._v("gridsome.config.js")]),e._v(" file on the "),o("code",{pre:!0},[e._v("plugins")]),e._v(" property, as shown below:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-javascript"}},[this._v("module.exports = {\n  plugins: [\n    {\n      use: '@gridsome/plugin-sitemap',\n      options: {\n        cacheTime: 600000, // default\n        exclude: ['/exclude-me'],\n        config: {\n          '/articles/*': {\n            changefreq: 'weekly',\n            priority: 0.5\n          },\n          '/about': {\n            changefreq: 'monthly',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n")])])}]}}}}}}]);