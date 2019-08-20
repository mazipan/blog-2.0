(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{234:function(e,t){e.exports={body:'## Background Story ⛈\n\nIn my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in its development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using `husky` to run ESLint before pushing changes to its origin. But it wasn\'t enough for our current flow, I don\'t know why, sometimes still there is a code that not passing ESLint\'s rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.\n\nUnfortunately, our developers are not very like to read full-log in our CI tools, they like to see separate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about [ESLint formatter ↗️](https://eslint.org/docs/user-guide/formatters/). We can create HTML report with this formatter.\n\nWe doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating a log when there is some error that makes it exit with code 1. We can see the HTML report but we lost our log. It\'s not our expectation.\n\nFinally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.\n\nWe call it as `eslint-formatter-html-extended`!\n\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/eslint-formatter-html-extended/eslint-html.png" alt="ESLint formatter HTML Extended" height="200">\n\n## Unboxing 📦\n\nBasically, we don\'t want to reinvent the wheel. So, we just combining two types of formatters from ESLint. We choose HTML formatter by [JulianLaval ↗️](https://github.com/JulianLaval) and Stylish formatter by [Sindre Sorhus ↗️](https://github.com/sindresorhus). We also adding some little touch in HTML output report to be more beautiful and easy to navigate.\n\n## Usage ☀️\n\nInstall dependencies via script:\n\n```bash\n$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n```\n\nRefer to this [docs ↗️](https://eslint.org/docs/user-guide/formatters/), you just need to add the parameter `-f nameFormatter -o nameFile` in your ESLint CLI script, e.g.:\n\n```bash\n$ eslint --ext .js . -f html-extended -o eslint-report.html\n```\n\nThis formatter is published as open source that you can see in [Github repository ↗️](https://github.com/mazipan/eslint-formatter-html-extended), feel free to fork or submit a new issue.\n\n### Hopefully useful...',html:'<h2>Background Story ⛈</h2>\n<p>In my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in its development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using <code>husky</code> to run ESLint before pushing changes to its origin. But it wasn\'t enough for our current flow, I don\'t know why, sometimes still there is a code that not passing ESLint\'s rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.</p>\n<p>Unfortunately, our developers are not very like to read full-log in our CI tools, they like to see separate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about <a href="https://eslint.org/docs/user-guide/formatters/">ESLint formatter ↗️</a>. We can create HTML report with this formatter.</p>\n<p>We doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating a log when there is some error that makes it exit with code 1. We can see the HTML report but we lost our log. It\'s not our expectation.</p>\n<p>Finally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.</p>\n<p>We call it as <code>eslint-formatter-html-extended</code>!</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/eslint-formatter-html-extended/eslint-html.png" alt="ESLint formatter HTML Extended" height="200">\n<h2>Unboxing 📦</h2>\n<p>Basically, we don\'t want to reinvent the wheel. So, we just combining two types of formatters from ESLint. We choose HTML formatter by <a href="https://github.com/JulianLaval">JulianLaval ↗️</a> and Stylish formatter by <a href="https://github.com/sindresorhus">Sindre Sorhus ↗️</a>. We also adding some little touch in HTML output report to be more beautiful and easy to navigate.</p>\n<h2>Usage ☀️</h2>\n<p>Install dependencies via script:</p>\n<pre><code class="language-bash">$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n</code></pre>\n<p>Refer to this <a href="https://eslint.org/docs/user-guide/formatters/">docs ↗️</a>, you just need to add the parameter <code>-f nameFormatter -o nameFile</code> in your ESLint CLI script, e.g.:</p>\n<pre><code class="language-bash">$ eslint --ext .js . -f html-extended -o eslint-report.html\n</code></pre>\n<p>This formatter is published as open source that you can see in <a href="https://github.com/mazipan/eslint-formatter-html-extended">Github repository ↗️</a>, feel free to fork or submit a new issue.</p>\n<h3>Hopefully useful...</h3>\n',attributes:{title:"Extend an official ESLint's HTML Formatter",slug:"eslint-formatter-html-extended",date:"2019-02-19",minute2read:3,description:"Why we decide to extend an official ESLint's HTML formatter",categories:["javascript","eslint"],cover:"https://www.mazipan.xyz/content-images/eslint-formatter-html-extended/eslint-html.png",_meta:{resourcePath:"/home/travis/build/mazipan/blog-2.0/contents/published/eslint-formatter-html-extended/en.md"}},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Background Story ⛈")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'p\',[_vm._v("We doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating a log when there is some error that makes it exit with code 1. We can see the HTML report but we lost our log. It\'s not our expectation.")]),_vm._v(" "),_c(\'p\',[_vm._v("Finally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"/content-images/eslint-formatter-html-extended/eslint-html.png","alt":"ESLint formatter HTML Extended","height":"200"}}),_vm._v(" "),_c(\'h2\',[_vm._v("Unboxing 📦")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'h2\',[_vm._v("Usage ☀️")]),_vm._v(" "),_c(\'p\',[_vm._v("Install dependencies via script:")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c(\'h3\',[_vm._v("Hopefully useful...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("In my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in its development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using "),_c(\'code\',{pre:true},[_vm._v("husky")]),_vm._v(" to run ESLint before pushing changes to its origin. But it wasn\'t enough for our current flow, I don\'t know why, sometimes still there is a code that not passing ESLint\'s rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Unfortunately, our developers are not very like to read full-log in our CI tools, they like to see separate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about "),_c(\'a\',{attrs:{"href":"https://eslint.org/docs/user-guide/formatters/"}},[_vm._v("ESLint formatter ↗️")]),_vm._v(". We can create HTML report with this formatter.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("We call it as "),_c(\'code\',{pre:true},[_vm._v("eslint-formatter-html-extended")]),_vm._v("!")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Basically, we don\'t want to reinvent the wheel. So, we just combining two types of formatters from ESLint. We choose HTML formatter by "),_c(\'a\',{attrs:{"href":"https://github.com/JulianLaval"}},[_vm._v("JulianLaval ↗️")]),_vm._v(" and Stylish formatter by "),_c(\'a\',{attrs:{"href":"https://github.com/sindresorhus"}},[_vm._v("Sindre Sorhus ↗️")]),_vm._v(". We also adding some little touch in HTML output report to be more beautiful and easy to navigate.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ yarn add eslint-formatter-html-extended -D\\n# OR\\n$ npm i eslint-formatter-html-extended --dev\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Refer to this "),_c(\'a\',{attrs:{"href":"https://eslint.org/docs/user-guide/formatters/"}},[_vm._v("docs ↗️")]),_vm._v(", you just need to add the parameter "),_c(\'code\',{pre:true},[_vm._v("-f nameFormatter -o nameFile")]),_vm._v(" in your ESLint CLI script, e.g.:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ eslint --ext .js . -f html-extended -o eslint-report.html\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("This formatter is published as open source that you can see in "),_c(\'a\',{attrs:{"href":"https://github.com/mazipan/eslint-formatter-html-extended"}},[_vm._v("Github repository ↗️")]),_vm._v(", feel free to fork or submit a new issue.")]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-markdown"},[r("h2",[e._v("Background Story ⛈")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("We doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating a log when there is some error that makes it exit with code 1. We can see the HTML report but we lost our log. It's not our expectation.")]),e._v(" "),r("p",[e._v("Finally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.")]),e._v(" "),e._m(2),e._v(" "),r("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"/content-images/eslint-formatter-html-extended/eslint-html.png",alt:"ESLint formatter HTML Extended",height:"200"}}),e._v(" "),r("h2",[e._v("Unboxing 📦")]),e._v(" "),e._m(3),e._v(" "),r("h2",[e._v("Usage ☀️")]),e._v(" "),r("p",[e._v("Install dependencies via script:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("h3",[e._v("Hopefully useful...")])])},this.$options.staticRenderFns=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in its development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using "),t("code",{pre:!0},[this._v("husky")]),this._v(" to run ESLint before pushing changes to its origin. But it wasn't enough for our current flow, I don't know why, sometimes still there is a code that not passing ESLint's rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Unfortunately, our developers are not very like to read full-log in our CI tools, they like to see separate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/formatters/"}},[this._v("ESLint formatter ↗️")]),this._v(". We can create HTML report with this formatter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We call it as "),t("code",{pre:!0},[this._v("eslint-formatter-html-extended")]),this._v("!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Basically, we don't want to reinvent the wheel. So, we just combining two types of formatters from ESLint. We choose HTML formatter by "),t("a",{attrs:{href:"https://github.com/JulianLaval"}},[this._v("JulianLaval ↗️")]),this._v(" and Stylish formatter by "),t("a",{attrs:{href:"https://github.com/sindresorhus"}},[this._v("Sindre Sorhus ↗️")]),this._v(". We also adding some little touch in HTML output report to be more beautiful and easy to navigate.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Refer to this "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/formatters/"}},[this._v("docs ↗️")]),this._v(", you just need to add the parameter "),t("code",{pre:!0},[this._v("-f nameFormatter -o nameFile")]),this._v(" in your ESLint CLI script, e.g.:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ eslint --ext .js . -f html-extended -o eslint-report.html\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This formatter is published as open source that you can see in "),t("a",{attrs:{href:"https://github.com/mazipan/eslint-formatter-html-extended"}},[this._v("Github repository ↗️")]),this._v(", feel free to fork or submit a new issue.")])}]}}}}}}]);