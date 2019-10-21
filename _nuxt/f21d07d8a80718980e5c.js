(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{200:function(e,t){e.exports={attributes:{title:"Create simple like button using Firebase Realtime Database",slug:"create-simple-like-button-using-firebase-rtdb",date:"2019-02-21",minute2read:10,description:"Sharing experiences using Firebase Realtime Database to make simple button likes as seen in Blog 2.0",categories:["javascript","nuxt","firebase"],cover:"https://www.mazipan.xyz/content-images/create-simple-like-button-using-firebase-rtdb/button-like-firebase.png"},html:'<h2>Background Story</h2>\n<p>As I explained in the previous article that Blog 2.0 is just a static Blog without Backend, I only use static hosting services from Netlify to place and present the build files. Because I do not use Backend and do not want to use it, I have difficulty when adding features that require me to store data in the database like the number of people who like an article. Such data is clearly not data that can be stored in each browser. The data must be centered and all visitors see the same amount. Data like this is most ideal in the DB, whatever type of DB is used.</p>\n<p>Today fortunately there is a platform like <a href="https://firebase.google.com/">Firebase ↗️</a> that helps lazy people make Backends but still can store data centrally. Firebase not only provides DB for us but also other services such as hosting, authentication, cloud storage, analytics, A / B testing, remote config, dynamic links and various other cool things. Firebase is like a complete package if we want to buy lunch.</p>\n<p>This time we will only use the real-time database feature.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/create-simple-like-button-using-firebase-rtdb/button-like-firebase.png" alt="Button Like Firebase" height="200px" width="200px">\n<h2>Creating project in Firebase</h2>\n<p>First you have to make a project in <a href="https://console.firebase.google.com/">Firebase Console ↗️</a>, you can give any name to your project but this name must be unique and has never been used by anyone else.</p>\n<p>Next you will be offered the option to setup Firebase that varies depending on the type of your project, we can choose for the web and will be given a code to install Firebase like this:</p>\n<pre><code class="language-html">&lt;script src=&quot;https://www.gstatic.com/firebasejs/5.8.3/firebase.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  // Initialize Firebase\n  var config = {\n    apiKey: &quot;QWERTY-YTREWQ&quot;,\n    authDomain: &quot;contoh-aja.firebaseapp.com&quot;,\n    databaseURL: &quot;https://contoh-aja.firebaseio.com&quot;,\n    projectId: &quot;contoh-aja&quot;,\n    storageBucket: &quot;contoh-aja.appspot.com&quot;,\n    messagingSenderId: &quot;1234567890&quot;\n  };\n  firebase.initializeApp(config);\n&lt;/script&gt;\n</code></pre>\n<p>We can\'t do a copy-paste this code completely, because the Blog 2.0 project uses Nuxt as a framework and of course there are a few different ways to use it.</p>\n<p>Before starting to set up the configuration, I chose to put these configuration values into the <code>.env</code> file so that it can be easily changed later.</p>\n<p>I created the <code>.env</code> file with the contents based on the configuration obtained from Firebase as follows:</p>\n<pre><code class="language-bash">FIREBASE_API_KEY= your firebase `apiKey` config\nFIREBASE_AUTH_DOMAIN= your firebase `authDomain` config\nFIREBASE_DATABASE_URL= your firebase `databaseURL` config\nFIREBASE_PROJECT_ID= your firebase `projectId` config\nFIREBASE_STORAGE_BUCKET= your firebase `storageBucket` config\nFIREBASE_MESSAGING_SENDER_ID= your firebase `messagingSenderId` config\n</code></pre>\n<p>On Nuxt.js I added the <code>@nuxtjs/dotenv</code> module in the<code> nuxt.config.js</code> file to be able to read the value of this <code>.env</code>, but later I found that this value was not replaced when the process of generating static files was done by Nuxt . I need to add the following code to my <code>nuxt.config.js</code> file:</p>\n<pre><code class="language-javascript">module.exports = {\n  env: {\n    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,\n    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,\n    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,\n    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,\n    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,\n    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID\n  },\n}\n</code></pre>\n<h2>Setup the Configuration Code</h2>\n<p>To open a connection to Firebase, I need the <code>firebase</code> dependency that can be installed via the command</p>\n<pre><code class="language-bash">$ yarn add firebase\n# atau\n$ npm i firebase\n</code></pre>\n<p>I chose to put this firebase connection into the <code>plugins</code> folder in the Nuxt structure, this means that it will be added to all pages in this project.</p>\n<p>I created the <code>plugins/firebase.js</code> file and made a connection to Firebase with the following code:</p>\n<pre><code class="language-javascript">import Vue from \'vue\'\nconst firebase = require(\'firebase/app\')\nrequire(\'firebase/database\')\n\nvar config = {\n  apiKey: process.env.FIREBASE_API_KEY || \'\',\n  authDomain: process.env.FIREBASE_AUTH_DOMAIN || \'\',\n  databaseURL: process.env.FIREBASE_DATABASE_URL || \'\',\n  projectId: process.env.FIREBASE_PROJECT_ID || \'\',\n  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || \'\',\n  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || \'\'\n}\n\nfirebase.initializeApp(config)\nVue.prototype.$firebase = firebase\n</code></pre>\n<p>In addition to opening a connection to Firebase I also injected the prepared firebase object into the instance of Vue so that it can be easily used in the later Vue Component.</p>\n<p>I need to add these plugins in the <code>nuxt.config.js</code> file so that they are read in this project with the code like this:</p>\n<pre><code class="language-javascript">module.exports = {\n  plugins: [\n    { src: \'~/plugins/firebase\', ssr: false }\n   ↗️]\n}\n</code></pre>\n<p>Besides having to be initialized, Firebase also requires several files such as <code>firebase.json</code>,<code> .firebaserc</code> and <code>database.rules.json</code>. These files can be obtained with the <code>firebase init</code> command in our project root folder. But before that you have to log in to Firebase first with the <code>firebase login</code> command.</p>\n<p>The following is an example of the <code>firebase.json</code> file that you can also find in this project:</p>\n<pre><code class="language-javascript">{\n  &quot;database&quot;: {\n    &quot;rules&quot;: &quot;database.rules.json&quot;\n  }\n}\n</code></pre>\n<p>And the <code>database.rules.json</code> file as follows, which means I let users access my database without having to login first.</p>\n<pre><code class="language-javascript">{\n  &quot;rules&quot;: {\n    &quot;.read&quot;: &quot;auth == null&quot;,\n    &quot;.write&quot;: &quot;auth == null&quot;\n  }\n}\n</code></pre>\n<h2>Setup a Data Structure</h2>\n<p>This data structure from Firebase DB is not like a relational database, Firebase DB is more like an ordinary JSON file.</p>\n<p>I structure the data to store the number of likes in each article as follows:</p>\n<pre><code class="language-javascript">{\n  &quot;claps&quot;: {\n    &quot;create-simple-like-button-using-firebase-rtdb&quot;:0,&quot;eslint-formatter-html-extended&quot;:0,\n    &quot;blog-2-0-in-nuxtjs&quot;:0\n  }\n}\n</code></pre>\n<p>If you are lazy, you can also import from JSON data that I have prepared in the <code>firebase-db-export.json</code> file on the Blog 2.0 project.</p>\n<p>Don\'t forget to open access for read and write on the <code>Rules</code> tab:</p>\n<pre><code class="language-javascript">{\n  &quot;rules&quot;: {\n    &quot;.read&quot;: true,\n    &quot;.write&quot;: true\n  }\n}\n</code></pre>\n<h2>Read and Update Data</h2>\n<p>Firebase is fairly easy to use with Vue or Nuxt, we will try to read the data that we have created in Firebase DB in our Vue Component.</p>\n<p>I put it in the <code>mounted</code> life cycle in the following Vue Component code:</p>\n<pre><code class="language-javascript">// this is vue component instance\nconst __self = this\nconst REF_URL = \'claps/\' + __self.meta.slug\n__self.clapsRefs = __self.$firebase.database().ref(REF_URL)\n__self.clapsRefs.once(\'value\').then(function (snapshot) {\n  __self.claps = snapshot.val()\n})\n</code></pre>\n<p>Previously, of course I had to set up <code>clapsRefs</code> and <code>claps</code> states in the <code>data ()</code> section as a placeholder for that value.</p>\n<p>The above code is used to initialize values based on data that is in Firebase DB, what if there is a change in value in our Firebase DB? because we use Firebase Realtime-DB, it will be very easy for us to listen to any changes that occur and so it immediately reacts by updating the display of the likes displayed. The code for listening to changes in realtime is more or less as follows:</p>\n<pre><code class="language-javascript">// this is vue component instance\nconst __self = this\n__self.clapsRefs.on(\'value\', function (snapshot) {\n  __self.claps = snapshot.val()\n})\n</code></pre>\n<p>While to update the value in our DB it is also no less easy, just by the <code>set</code> code in the reference we have got, like the following example:</p>\n<pre><code class="language-javascript">// this is vue component instance\nif (this.clapsRefs) {\n  this.clapsRefs.set(this.claps + 1)\n}\n</code></pre>\n<h2>Travis CI Configs</h2>\n<p>The last touch is making sure when the build process we set the value of <em>environment variable</em> with the original value according to what we use in the prodcution. If at local time we can use the <code>.env</code> file which we cannot push into the repository.</p>\n<p>In <a href="https://travis-ci.org">Travis CI ↗️</a> we can also adjust various variables easily. Just enter the `settings\' section and we can add * key-value * as a variable that will be included during the * build * process.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/create-simple-like-button-using-firebase-rtdb/travis-ci-env.png" alt="Travis CI Environment Variable" height="200px" width="200px">\n<h3>May useful for you...</h3>\n'}}}]);