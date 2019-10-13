(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{207:function(e,t){e.exports={body:'## Introduction to the problem\n\nProgrammers are often identified with someone who writes code to make software.Not wrong, because most of us (programmers) do have daily work to write lines of code to build a feature, fix errors (defects) in a software.\n\nWriting code becomes a fundamental skill for a programmer, we are required to be able to translate a solution that has been previously designed into a line of code to solve various problems and improvements in software products.\n\nThe ability to write code like this is not common to be over-exploited in some workplace programmers themselves. Especially when it is faced with *deadlines* which are urgent. We can just blindly write code that originates without regard to the various rules that we should follow. Things like this will end in beaing a *technical debt* on ourselves and our own team in the futur and regarding this technical debt when  reading your explanation [Martin Fowler](https://martinfowler.com/) on the following page [Technical Debt ↗️](https://martinfowler.com/bliki/TechnicalDebt.html) can be associated with financial debt which if we do not pay now,  one day we will still have to pay it (plus the interest too).\n\nThe art of deleting and updating code or better known as **Refactoring**, is the process of repairing code, removing parts that are no longer needed, putting together multiple parts, and various things related to code cleaning without changing the end result to the user.\nTherefore programmers do not just need to know about how to write and add code, but must also know when to delete and update the code, to the best of your ability.\n\n## Why do programmers write origin code?\n\nProgrammers have a variety of reasons why they write code from the origin, of course we can\'t generalize it because it could be the reason that it is indeed the best when the decision is taken.\n\nFor this we can look at [Technical Debt Quadrant ↗️](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) as Martin Fowler explained, in a nutshell, look at the following picture:\n\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/the-art-of-deleting-and-updating-the-code/quadran.png" alt="Technical Debt Quadrant" height="200px" width="200px">\n\n<small class="caption">Image taken from page https://martinfowler.com<small>\n\n## Why do we have to delete and update the code?\n\nThere is a jargon that is often echoed by many friends in the programmers space, that "If the application is okay, why should it be changed?". The jargon isn\'t wrong, but it\'s also not completely true.The word "all right" can actually be relative to the point of view that we see it.\nFine can be yes, because our end users did not experience an error when using our application.Just fine can be wrong, because it turns out that maybe in terms of code formulation, our application makes it difficult for the programmer team to develop new features or fix errors that already exist or that might be in the future.\n\nSome reasons why we must delete or update a code according to Martin Fowler on the book **[Refactoring ↗️](https://refactoring.com/)** among others:\n\n### Improve software design\n\nA design can basically be good but as time progresses and more and more changes and additions to it, becomes increasingly difficult to see the design. The process of removing, update and improve the code is expected to clean up various irregularities that make the design of a software become difficult to be seen and understood.\n\n### Make it easy to understand\n\nThe more code, the more difficult it is to understand how the code works. One solution is to apply a good design. It is normal for us to often write code thinking about how to keep the program running and forgetting how the next programmer will understand it.\n\n### Helps find errors\n\nThe easier it is to understand a code, the more effective it is to detect various errors that have already occurred and the possibility that errors will occur more easily.\n\n### Help write code faster\n\nThe end result is that us as programmers we can write code, add various features, fix errors more quickly. Although some people will also argue that the speed of development will not always be directly proportional to the good design of a system.\n\n## When is the best time to do it?\n\nI also took this from the **Refactoring** book which explained the best times to make changes to the code are as follows:\n\n### When adding a function\n\nIt is common for us when creating a function for the first time, just add it, when making the same function the second time, just copy the code and let the double code occur, but when you have to make the same function for the third time, then think about uniting it in one place that can be used together. Not infrequently when we are given the task to create a small feature, but end up having to update a lot of code to the bottom because it is difficult to add these features without changing from the basic.\n\n### When it comes to fixing errors\n\nWhen we are assigned to fix the error, we are required to trace the trace backward to follow the flow of the code to understand and find the point where the error occurred. Therefore, when tracking in order to find the cause of this is very difficult, it could be because at the beginning of writing the code it was not thought about how the code will be read by others. Making improvements at this time is also a quite appropriate time because it is usually accompanied by assistance from the Tester who ensures the application continues to run as expected.\n\n### When code review\n\nCode review is the right time to team up among programmers to correct errors or bugs , taking given opinions to the solutions , including giving opinions about how large the design of the project and code is.\n\n## Lessons that can be taken\n\nThe world of technology is developing very fast, there are just breakthroughs and solutions every day. Choosing a profession as a programmer means you have to be ready with the speed of change. What we think is the best solution now may become irrelevant in the near future.\nStay updated with the latest developments, don\'t feel upset when you have to delete and update your code. If you don\'t do it, someone will have to do it sometime. There is no need to delete and update our code of our previous results, because it could be that it is the best so it must be taken. There is no need to blame the previous programmer for his code either, just assume that every solution really is the best solution he decided to be used.\n\nKeep learning, because it is a process that is increasingly making us big, making us stay afloat and compete in a world with rapid change.\n\n### May it be usefull for you...',html:'<h2>Introduction to the problem</h2>\n<p>Programmers are often identified with someone who writes code to make software.Not wrong, because most of us (programmers) do have daily work to write lines of code to build a feature, fix errors (defects) in a software.</p>\n<p>Writing code becomes a fundamental skill for a programmer, we are required to be able to translate a solution that has been previously designed into a line of code to solve various problems and improvements in software products.</p>\n<p>The ability to write code like this is not common to be over-exploited in some workplace programmers themselves. Especially when it is faced with <em>deadlines</em> which are urgent. We can just blindly write code that originates without regard to the various rules that we should follow. Things like this will end in beaing a <em>technical debt</em> on ourselves and our own team in the futur and regarding this technical debt when  reading your explanation <a href="https://martinfowler.com/">Martin Fowler</a> on the following page <a href="https://martinfowler.com/bliki/TechnicalDebt.html">Technical Debt ↗️</a> can be associated with financial debt which if we do not pay now,  one day we will still have to pay it (plus the interest too).</p>\n<p>The art of deleting and updating code or better known as <strong>Refactoring</strong>, is the process of repairing code, removing parts that are no longer needed, putting together multiple parts, and various things related to code cleaning without changing the end result to the user.\nTherefore programmers do not just need to know about how to write and add code, but must also know when to delete and update the code, to the best of your ability.</p>\n<h2>Why do programmers write origin code?</h2>\n<p>Programmers have a variety of reasons why they write code from the origin, of course we can\'t generalize it because it could be the reason that it is indeed the best when the decision is taken.</p>\n<p>For this we can look at <a href="https://martinfowler.com/bliki/TechnicalDebtQuadrant.html">Technical Debt Quadrant ↗️</a> as Martin Fowler explained, in a nutshell, look at the following picture:</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/the-art-of-deleting-and-updating-the-code/quadran.png" alt="Technical Debt Quadrant" height="200px" width="200px">\n<p><small class="caption">Image taken from page https://martinfowler.com<small></p>\n<h2>Why do we have to delete and update the code?</h2>\n<p>There is a jargon that is often echoed by many friends in the programmers space, that &quot;If the application is okay, why should it be changed?&quot;. The jargon isn\'t wrong, but it\'s also not completely true.The word &quot;all right&quot; can actually be relative to the point of view that we see it.\nFine can be yes, because our end users did not experience an error when using our application.Just fine can be wrong, because it turns out that maybe in terms of code formulation, our application makes it difficult for the programmer team to develop new features or fix errors that already exist or that might be in the future.</p>\n<p>Some reasons why we must delete or update a code according to Martin Fowler on the book <strong><a href="https://refactoring.com/">Refactoring ↗️</a></strong> among others:</p>\n<h3>Improve software design</h3>\n<p>A design can basically be good but as time progresses and more and more changes and additions to it, becomes increasingly difficult to see the design. The process of removing, update and improve the code is expected to clean up various irregularities that make the design of a software become difficult to be seen and understood.</p>\n<h3>Make it easy to understand</h3>\n<p>The more code, the more difficult it is to understand how the code works. One solution is to apply a good design. It is normal for us to often write code thinking about how to keep the program running and forgetting how the next programmer will understand it.</p>\n<h3>Helps find errors</h3>\n<p>The easier it is to understand a code, the more effective it is to detect various errors that have already occurred and the possibility that errors will occur more easily.</p>\n<h3>Help write code faster</h3>\n<p>The end result is that us as programmers we can write code, add various features, fix errors more quickly. Although some people will also argue that the speed of development will not always be directly proportional to the good design of a system.</p>\n<h2>When is the best time to do it?</h2>\n<p>I also took this from the <strong>Refactoring</strong> book which explained the best times to make changes to the code are as follows:</p>\n<h3>When adding a function</h3>\n<p>It is common for us when creating a function for the first time, just add it, when making the same function the second time, just copy the code and let the double code occur, but when you have to make the same function for the third time, then think about uniting it in one place that can be used together. Not infrequently when we are given the task to create a small feature, but end up having to update a lot of code to the bottom because it is difficult to add these features without changing from the basic.</p>\n<h3>When it comes to fixing errors</h3>\n<p>When we are assigned to fix the error, we are required to trace the trace backward to follow the flow of the code to understand and find the point where the error occurred. Therefore, when tracking in order to find the cause of this is very difficult, it could be because at the beginning of writing the code it was not thought about how the code will be read by others. Making improvements at this time is also a quite appropriate time because it is usually accompanied by assistance from the Tester who ensures the application continues to run as expected.</p>\n<h3>When code review</h3>\n<p>Code review is the right time to team up among programmers to correct errors or bugs , taking given opinions to the solutions , including giving opinions about how large the design of the project and code is.</p>\n<h2>Lessons that can be taken</h2>\n<p>The world of technology is developing very fast, there are just breakthroughs and solutions every day. Choosing a profession as a programmer means you have to be ready with the speed of change. What we think is the best solution now may become irrelevant in the near future.\nStay updated with the latest developments, don\'t feel upset when you have to delete and update your code. If you don\'t do it, someone will have to do it sometime. There is no need to delete and update our code of our previous results, because it could be that it is the best so it must be taken. There is no need to blame the previous programmer for his code either, just assume that every solution really is the best solution he decided to be used.</p>\n<p>Keep learning, because it is a process that is increasingly making us big, making us stay afloat and compete in a world with rapid change.</p>\n<h3>May it be usefull for you...</h3>\n',attributes:{title:"The art of deleting and updating the code",slug:"the-art-of-deleting-and-updating-the-code",date:"2019-07-02",minute2read:10,description:"Story telling about my daily job to deleting my peer's code",categories:["programming"],cover:"https://www.mazipan.xyz/content-images/the-art-of-deleting-and-updating-the-code/quadran.png",_meta:{resourcePath:"/home/travis/build/mazipan/blog-2.0/contents/published/the-art-of-deleting-and-updating-the-code/en.md"}},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Introduction to the problem")]),_vm._v(" "),_c(\'p\',[_vm._v("Programmers are often identified with someone who writes code to make software.Not wrong, because most of us (programmers) do have daily work to write lines of code to build a feature, fix errors (defects) in a software.")]),_vm._v(" "),_c(\'p\',[_vm._v("Writing code becomes a fundamental skill for a programmer, we are required to be able to translate a solution that has been previously designed into a line of code to solve various problems and improvements in software products.")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'h2\',[_vm._v("Why do programmers write origin code?")]),_vm._v(" "),_c(\'p\',[_vm._v("Programmers have a variety of reasons why they write code from the origin, of course we can\'t generalize it because it could be the reason that it is indeed the best when the decision is taken.")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"/content-images/the-art-of-deleting-and-updating-the-code/quadran.png","alt":"Technical Debt Quadrant","height":"200px","width":"200px"}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'h2\',[_vm._v("Why do we have to delete and update the code?")]),_vm._v(" "),_c(\'p\',[_vm._v("There is a jargon that is often echoed by many friends in the programmers space, that \\"If the application is okay, why should it be changed?\\". The jargon isn\'t wrong, but it\'s also not completely true.The word \\"all right\\" can actually be relative to the point of view that we see it.\\nFine can be yes, because our end users did not experience an error when using our application.Just fine can be wrong, because it turns out that maybe in terms of code formulation, our application makes it difficult for the programmer team to develop new features or fix errors that already exist or that might be in the future.")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c(\'h3\',[_vm._v("Improve software design")]),_vm._v(" "),_c(\'p\',[_vm._v("A design can basically be good but as time progresses and more and more changes and additions to it, becomes increasingly difficult to see the design. The process of removing, update and improve the code is expected to clean up various irregularities that make the design of a software become difficult to be seen and understood.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Make it easy to understand")]),_vm._v(" "),_c(\'p\',[_vm._v("The more code, the more difficult it is to understand how the code works. One solution is to apply a good design. It is normal for us to often write code thinking about how to keep the program running and forgetting how the next programmer will understand it.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Helps find errors")]),_vm._v(" "),_c(\'p\',[_vm._v("The easier it is to understand a code, the more effective it is to detect various errors that have already occurred and the possibility that errors will occur more easily.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Help write code faster")]),_vm._v(" "),_c(\'p\',[_vm._v("The end result is that us as programmers we can write code, add various features, fix errors more quickly. Although some people will also argue that the speed of development will not always be directly proportional to the good design of a system.")]),_vm._v(" "),_c(\'h2\',[_vm._v("When is the best time to do it?")]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c(\'h3\',[_vm._v("When adding a function")]),_vm._v(" "),_c(\'p\',[_vm._v("It is common for us when creating a function for the first time, just add it, when making the same function the second time, just copy the code and let the double code occur, but when you have to make the same function for the third time, then think about uniting it in one place that can be used together. Not infrequently when we are given the task to create a small feature, but end up having to update a lot of code to the bottom because it is difficult to add these features without changing from the basic.")]),_vm._v(" "),_c(\'h3\',[_vm._v("When it comes to fixing errors")]),_vm._v(" "),_c(\'p\',[_vm._v("When we are assigned to fix the error, we are required to trace the trace backward to follow the flow of the code to understand and find the point where the error occurred. Therefore, when tracking in order to find the cause of this is very difficult, it could be because at the beginning of writing the code it was not thought about how the code will be read by others. Making improvements at this time is also a quite appropriate time because it is usually accompanied by assistance from the Tester who ensures the application continues to run as expected.")]),_vm._v(" "),_c(\'h3\',[_vm._v("When code review")]),_vm._v(" "),_c(\'p\',[_vm._v("Code review is the right time to team up among programmers to correct errors or bugs , taking given opinions to the solutions , including giving opinions about how large the design of the project and code is.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Lessons that can be taken")]),_vm._v(" "),_c(\'p\',[_vm._v("The world of technology is developing very fast, there are just breakthroughs and solutions every day. Choosing a profession as a programmer means you have to be ready with the speed of change. What we think is the best solution now may become irrelevant in the near future.\\nStay updated with the latest developments, don\'t feel upset when you have to delete and update your code. If you don\'t do it, someone will have to do it sometime. There is no need to delete and update our code of our previous results, because it could be that it is the best so it must be taken. There is no need to blame the previous programmer for his code either, just assume that every solution really is the best solution he decided to be used.")]),_vm._v(" "),_c(\'p\',[_vm._v("Keep learning, because it is a process that is increasingly making us big, making us stay afloat and compete in a world with rapid change.")]),_vm._v(" "),_c(\'h3\',[_vm._v("May it be usefull for you...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("The ability to write code like this is not common to be over-exploited in some workplace programmers themselves. Especially when it is faced with "),_c(\'em\',[_vm._v("deadlines")]),_vm._v(" which are urgent. We can just blindly write code that originates without regard to the various rules that we should follow. Things like this will end in beaing a "),_c(\'em\',[_vm._v("technical debt")]),_vm._v(" on ourselves and our own team in the futur and regarding this technical debt when  reading your explanation "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/"}},[_vm._v("Martin Fowler")]),_vm._v(" on the following page "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/bliki/TechnicalDebt.html"}},[_vm._v("Technical Debt ↗️")]),_vm._v(" can be associated with financial debt which if we do not pay now,  one day we will still have to pay it (plus the interest too).")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("The art of deleting and updating code or better known as "),_c(\'strong\',[_vm._v("Refactoring")]),_vm._v(", is the process of repairing code, removing parts that are no longer needed, putting together multiple parts, and various things related to code cleaning without changing the end result to the user.\\nTherefore programmers do not just need to know about how to write and add code, but must also know when to delete and update the code, to the best of your ability.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("For this we can look at "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"}},[_vm._v("Technical Debt Quadrant ↗️")]),_vm._v(" as Martin Fowler explained, in a nutshell, look at the following picture:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'small\',{staticClass:"caption"},[_vm._v("Image taken from page https://martinfowler.com"),_c(\'small\')])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Some reasons why we must delete or update a code according to Martin Fowler on the book "),_c(\'strong\',[_c(\'a\',{attrs:{"href":"https://refactoring.com/"}},[_vm._v("Refactoring ↗️")])]),_vm._v(" among others:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("I also took this from the "),_c(\'strong\',[_vm._v("Refactoring")]),_vm._v(" book which explained the best times to make changes to the code are as follows:")]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content-markdown"},[o("h2",[e._v("Introduction to the problem")]),e._v(" "),o("p",[e._v("Programmers are often identified with someone who writes code to make software.Not wrong, because most of us (programmers) do have daily work to write lines of code to build a feature, fix errors (defects) in a software.")]),e._v(" "),o("p",[e._v("Writing code becomes a fundamental skill for a programmer, we are required to be able to translate a solution that has been previously designed into a line of code to solve various problems and improvements in software products.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),o("h2",[e._v("Why do programmers write origin code?")]),e._v(" "),o("p",[e._v("Programmers have a variety of reasons why they write code from the origin, of course we can't generalize it because it could be the reason that it is indeed the best when the decision is taken.")]),e._v(" "),e._m(2),e._v(" "),o("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"/content-images/the-art-of-deleting-and-updating-the-code/quadran.png",alt:"Technical Debt Quadrant",height:"200px",width:"200px"}}),e._v(" "),e._m(3),e._v(" "),o("h2",[e._v("Why do we have to delete and update the code?")]),e._v(" "),o("p",[e._v('There is a jargon that is often echoed by many friends in the programmers space, that "If the application is okay, why should it be changed?". The jargon isn\'t wrong, but it\'s also not completely true.The word "all right" can actually be relative to the point of view that we see it.\nFine can be yes, because our end users did not experience an error when using our application.Just fine can be wrong, because it turns out that maybe in terms of code formulation, our application makes it difficult for the programmer team to develop new features or fix errors that already exist or that might be in the future.')]),e._v(" "),e._m(4),e._v(" "),o("h3",[e._v("Improve software design")]),e._v(" "),o("p",[e._v("A design can basically be good but as time progresses and more and more changes and additions to it, becomes increasingly difficult to see the design. The process of removing, update and improve the code is expected to clean up various irregularities that make the design of a software become difficult to be seen and understood.")]),e._v(" "),o("h3",[e._v("Make it easy to understand")]),e._v(" "),o("p",[e._v("The more code, the more difficult it is to understand how the code works. One solution is to apply a good design. It is normal for us to often write code thinking about how to keep the program running and forgetting how the next programmer will understand it.")]),e._v(" "),o("h3",[e._v("Helps find errors")]),e._v(" "),o("p",[e._v("The easier it is to understand a code, the more effective it is to detect various errors that have already occurred and the possibility that errors will occur more easily.")]),e._v(" "),o("h3",[e._v("Help write code faster")]),e._v(" "),o("p",[e._v("The end result is that us as programmers we can write code, add various features, fix errors more quickly. Although some people will also argue that the speed of development will not always be directly proportional to the good design of a system.")]),e._v(" "),o("h2",[e._v("When is the best time to do it?")]),e._v(" "),e._m(5),e._v(" "),o("h3",[e._v("When adding a function")]),e._v(" "),o("p",[e._v("It is common for us when creating a function for the first time, just add it, when making the same function the second time, just copy the code and let the double code occur, but when you have to make the same function for the third time, then think about uniting it in one place that can be used together. Not infrequently when we are given the task to create a small feature, but end up having to update a lot of code to the bottom because it is difficult to add these features without changing from the basic.")]),e._v(" "),o("h3",[e._v("When it comes to fixing errors")]),e._v(" "),o("p",[e._v("When we are assigned to fix the error, we are required to trace the trace backward to follow the flow of the code to understand and find the point where the error occurred. Therefore, when tracking in order to find the cause of this is very difficult, it could be because at the beginning of writing the code it was not thought about how the code will be read by others. Making improvements at this time is also a quite appropriate time because it is usually accompanied by assistance from the Tester who ensures the application continues to run as expected.")]),e._v(" "),o("h3",[e._v("When code review")]),e._v(" "),o("p",[e._v("Code review is the right time to team up among programmers to correct errors or bugs , taking given opinions to the solutions , including giving opinions about how large the design of the project and code is.")]),e._v(" "),o("h2",[e._v("Lessons that can be taken")]),e._v(" "),o("p",[e._v("The world of technology is developing very fast, there are just breakthroughs and solutions every day. Choosing a profession as a programmer means you have to be ready with the speed of change. What we think is the best solution now may become irrelevant in the near future.\nStay updated with the latest developments, don't feel upset when you have to delete and update your code. If you don't do it, someone will have to do it sometime. There is no need to delete and update our code of our previous results, because it could be that it is the best so it must be taken. There is no need to blame the previous programmer for his code either, just assume that every solution really is the best solution he decided to be used.")]),e._v(" "),o("p",[e._v("Keep learning, because it is a process that is increasingly making us big, making us stay afloat and compete in a world with rapid change.")]),e._v(" "),o("h3",[e._v("May it be usefull for you...")])])},this.$options.staticRenderFns=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The ability to write code like this is not common to be over-exploited in some workplace programmers themselves. Especially when it is faced with "),o("em",[e._v("deadlines")]),e._v(" which are urgent. We can just blindly write code that originates without regard to the various rules that we should follow. Things like this will end in beaing a "),o("em",[e._v("technical debt")]),e._v(" on ourselves and our own team in the futur and regarding this technical debt when  reading your explanation "),o("a",{attrs:{href:"https://martinfowler.com/"}},[e._v("Martin Fowler")]),e._v(" on the following page "),o("a",{attrs:{href:"https://martinfowler.com/bliki/TechnicalDebt.html"}},[e._v("Technical Debt ↗️")]),e._v(" can be associated with financial debt which if we do not pay now,  one day we will still have to pay it (plus the interest too).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The art of deleting and updating code or better known as "),t("strong",[this._v("Refactoring")]),this._v(", is the process of repairing code, removing parts that are no longer needed, putting together multiple parts, and various things related to code cleaning without changing the end result to the user.\nTherefore programmers do not just need to know about how to write and add code, but must also know when to delete and update the code, to the best of your ability.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For this we can look at "),t("a",{attrs:{href:"https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"}},[this._v("Technical Debt Quadrant ↗️")]),this._v(" as Martin Fowler explained, in a nutshell, look at the following picture:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("small",{staticClass:"caption"},[this._v("Image taken from page https://martinfowler.com"),t("small")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Some reasons why we must delete or update a code according to Martin Fowler on the book "),t("strong",[t("a",{attrs:{href:"https://refactoring.com/"}},[this._v("Refactoring ↗️")])]),this._v(" among others:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("I also took this from the "),t("strong",[this._v("Refactoring")]),this._v(" book which explained the best times to make changes to the code are as follows:")])}]}}}}}}]);