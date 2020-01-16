(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{201:function(e,t){e.exports={attributes:{title:"Extend an official ESLint's HTML Formatter",slug:"eslint-formatter-html-extended",date:"2019-02-19",minute2read:3,description:"Why we decide to extend an official ESLint's HTML formatter",categories:["javascript","eslint"],cover:"https://www.mazipan.xyz/content-images/eslint-formatter-html-extended/eslint-html.png"},html:'<h2>Background Story ⛈</h2>\n<p>In my daily job, we are using ESLint in almost all of our repository especially for our FrontEnd (FE) code (because I only work in FE repository). Ideally, developers should run ESLint in its development phase and make sure all branch that he working for is clean from ESLint warnings and errors. For the sake of teams, we also put git hook using <code>husky</code> to run ESLint before pushing changes to its origin. But it wasn\'t enough for our current flow, I don\'t know why, sometimes still there is a code that not passing ESLint\'s rule in the origin branch. Recently, we put this ESLint script into our Continuous Integration (CI) process.</p>\n<p>Unfortunately, our developers are not very like to read full-log in our CI tools, they like to see separate HTML report for each stage in CI. After reading official documentation from ESLint, I found the section about <a href="https://eslint.org/docs/user-guide/formatters/">ESLint formatter ↗️</a>. We can create HTML report with this formatter.</p>\n<p>We doing trial and error for proof of concept (POC) about producing HTML report from our ESLint. After a day using official HTML reporter in our CI, we found that official HTML formatter prevent from creating a log when there is some error that makes it exit with code 1. We can see the HTML report but we lost our log. It\'s not our expectation.</p>\n<p>Finally, we decide to create our own formatter that combined the power of HTML reporter and keep the log exist in our log system.</p>\n<p>We call it as <code>eslint-formatter-html-extended</code>!</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/eslint-formatter-html-extended/eslint-html.png" alt="ESLint formatter HTML Extended" height="200px" width="200px">\n<h2>Unboxing 📦</h2>\n<p>Basically, we don\'t want to reinvent the wheel. So, we just combining two types of formatters from ESLint. We choose HTML formatter by <a href="https://github.com/JulianLaval">JulianLaval ↗️</a> and Stylish formatter by <a href="https://github.com/sindresorhus">Sindre Sorhus ↗️</a>. We also adding some little touch in HTML output report to be more beautiful and easy to navigate.</p>\n<h2>Usage ☀️</h2>\n<p>Install dependencies via script:</p>\n<pre><code class="language-bash">$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n</code></pre>\n<p>Refer to this <a href="https://eslint.org/docs/user-guide/formatters/">docs ↗️</a>, you just need to add the parameter <code>-f nameFormatter -o nameFile</code> in your ESLint CLI script, e.g.:</p>\n<pre><code class="language-bash">$ eslint --ext .js . -f html-extended -o eslint-report.html\n</code></pre>\n<p>This formatter is published as open source that you can see in <a href="https://github.com/mazipan/eslint-formatter-html-extended">Github repository ↗️</a>, feel free to fork or submit a new issue.</p>\n<h3>May useful for you...</h3>\n'}}}]);