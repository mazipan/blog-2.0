(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{213:function(e,t){e.exports={attributes:{title:"You might not need Micro Frontends",slug:"you-might-not-need-microfe",date:"2019-10-08",minute2read:15,description:"Story telling about Micro-Frontend trade-off",categories:["programming"],cover:"https://www.mazipan.xyz/content-images/you-might-not-need-microfe/microfe.png"},html:'<h2>Disclaimer</h2>\n<p>Before we starting, you need to take a note that all in this article is my own words. It may be wrong, subjective and doesn\'t works well with your current situtations. Do not take any decisions based on only this article.</p>\n<h2>About Micro Frontend</h2>\n<p>You might ever heard the term of <em>Micro Frontends</em> (MFE), basically its just copycat from the concept of <em>Micro Services</em> in backend area. Like <em>Micro Services</em> that got very huge popularity in backend, MFE is also got good tractions in its adoptions. Every startup, every FE developers want to implementing this concept into their current projects.</p>\n<h2>What\'s the MFE sells to Us?</h2>\n<p>MFE coming with many strong point that makes you as a developers interest in it. We will try to describe some of it in this below lists:</p>\n<h4>Technology stack isolation</h4>\n<p>MFE enable possibility to use different technology stack in Frontend. Let\'s say you want to develop header fragment using React, then you switch to Vue when developing the sidebar fragment. It possible with the isolation concept brings by MFE.</p>\n<h4>Autonomous teams</h4>\n<p>This is maybe the coolest thing in MFE, you can have seperate teams which normally composed by different specialized person, like you can have one frontend developer, one backend developer, one designer, one product manager, etc in one team. They all can work without having worry their improvement or fixing will crashing another team improvement. It because they will only working in small piece of fragment that treats as a single web apps instead of one full pages.</p>\n<p>This approach somehow can increase the effectiveness and efficiency of teams working on frontend code, and the teams entirely. They will have a full ownership on their own fragments, they can iterate faster in development. Instead of organizing the team based on their specialization, we can organizing based on bussiness scope or we usually called as a &quot;vertical&quot; alignment.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/you-might-not-need-microfe/horizontal.png" alt="Micro FE horizontal teams" height="200px" width="200px">\n<p><small class="caption">Image source from https://martinfowler.com<small></p>\n<h4>Ease of deployments with better isolation</h4>\n<p>The other key point from MFE is that you can deploy your code with more confident without scare you will break feature or code from the another teams. This is because MFE often coming from different repository with different deployment pipeline and different server to serve the code in production environment.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/you-might-not-need-microfe/deployment.png" alt="Micro FE deployment" height="200px" width="200px">\n<p><small class="caption">Image source from https://martinfowler.com<small></p>\n<h4>Improved scalability with smaller pieces</h4>\n<p>With different deployment and different server, its easier to us to maintain the scalability. Instead of have one big server, we can split it into several small server that only serve small piece of fragment. It also make us have a clear visibility about the fragment that have a bigger usage, and the smaller one. We can reduce the specs for the smaller one and increase for the bigger one.</p>\n<h4>Localized complexity</h4>\n<p>MFE can localized the complexity of your web apps into several part. This is good that we doesn\'t need to put all of our logics and complexities in the same place. With the growing of your bussiness, these logics and complexities may will harm you someday if its on one place.</p>\n<h2>Implementation</h2>\n<p>MFE is just a concept, there are no standard how to implement in our project. That\'s made there are so many variations when try to looking about the implementation steps, we will not describe in technical way, but will give you some alternatives in the industry to make this MFE.</p>\n<h3>IFrames</h3>\n<p>Maybe you doesn\'t realize that iFrame is the old technology we can use to forcing MFE in our websites. It because <code>iframe</code> allow you to load any pages from another domain into your own web pages. With this ability, we can decide to host our FE Apps in many different domain. We can have seperate deployment pipeline and also independent teams to handle each FE Apps.</p>\n<p>You can use <code>iFrame</code> in your HTML with code like:</p>\n<pre><code class="language-html">&lt;iframe src=&quot;https://your-apps-domain&quot; title=&quot;Some Title&quot; width=&quot;400&quot; height=&quot;300&quot;&gt;&lt;/iframe&gt;\n</code></pre>\n<p>The common problem in using <code>iFrame</code> is because we need to set static value for the dimension, width and height. Also how we communicate cross domains apps. For the last problem, usually we can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage">postMessage API</a> to solving cross window communication.</p>\n<h3>Web Components</h3>\n<h3>Client Window</h3>\n<h3>Server Side Includes</h3>\n<h3>Backend Includes</h3>\n<h2>Problem you will face</h2>\n<p>Honestly, implementing MFE is not that easy. There are some concern you might face when adopting this concept, these are the commons:</p>\n<h3>Integration and Deployment</h3>\n<h3>State &amp; Logic Sharing</h3>\n<h3>Number of Devs</h3>\n<h3>Monitoring</h3>\n<h2>Takeways</h2>\n<p>Yes, MFE is good. But you might not need for your current scale.\nJust because it works on a big company, it shouldn\'t make you need to adopt.\nRevisit your needs, understanding your teams capability, and doing the Proof of Concept before you go with it.\nTry to looking from two sides of view, the good and the bad one.</p>\n<p>When your needs covered by MFE benefits, then it\'s showtime 🚀</p>\n<h2>References:</h2>\n<ul>\n<li><a href="https://micro-frontends.org/">micro-frontends.org</a></li>\n<li><a href="https://martinfowler.com/articles/micro-frontends.html">martinfowler.com</a></li>\n</ul>\n<h3>May useful for you...</h3>\n'}}}]);