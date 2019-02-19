---
title: Developing Blog 2.0 with Nuxt.js
slug: blog-2.0-in-nuxtjs
date: '2019-02-19'
minute2read: 5
description: Explaining how static site called Blog 2.0 was built using Nuxt.js
---

## Dan's movement 🏃

If you already read this article "[Why My New Blog Isn’t on Medium](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae)" by [Dan Abramov](https://twitter.com/dan_abramov) than You already knew that Dan moved to [Overreacted.io](https://overreacted.io/) instead of using Medium.com.

I personally love the writing experience in Medium.com, but some of Dan's reasons is also happened to me.

Before building Blog 2.0 I already have my own Blog in top Wordpress platform in [mazipanneh.com](https://mazipanneh.com/blog/). But since I'm not familiar with Wordpress, the Blog is pretty far from my own expectations in term of *User Interface* (UI), Speed, and *Developer Experience* (DX). The good things is Wordpress already releasing it's [Gutenberg](https://github.com/WordPress/gutenberg) that giving so many improvement in the writing experience. After upgrade to Gutenberg from Classic Editor, I decide to leave Medium.com and write in Wordpress (again) and success writing some articles using Gutenberg. But I am not satisfy with the DX when using Wordpress, as a *Frontend Developer* that have poor skill in PHP.

## Time for Vue 🕺

I already worked with [Vue](https://vuejs.org/) in the past few years and falling in love with the DX. Recently I made [smesummit.id](https://www.smesummit.id/) and [Quran Offline](https://quran-offline.netlify.com/) using [Nuxt.js](https://nuxtjs.org/) - The Vue.js Framework. I prefer Nuxt because it's focus in delivering a better DX for Vue Developer. We can generate static website easier in Nuxt, Sitemap, PWA, Feed and many other cool things. After develop [smesummit.id](https://www.smesummit.id/) and [Quran Offline](https://quran-offline.netlify.com/), it give me more confidence to implement same approach to generate my own static blog using latest technology in Vue. The big problem is I never learn about using Nuxt as Blog generator, luckily I found this article "[Website with blog and portfolio using Vue.js + Nuxt + Markdown](https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/)" by [Marina Aísa](https://twitter.com/MarinaAisa) and she open the codes. Based on her article and after seeing the code, I creating this Blog 2.0.

With Blog 2.0, I have full control in my Blog. I can tweak the UI, improving page load speeds and adding new content easier than I ever imagine.

## Unboxing 📦

Behind this Blog 2.0, `nuxt@2.4.3` is installed as main framework that organize all the things. Adding `@nuxtjs/pwa`, `@nuxtjs/sitemap` and `nuxt-webfontloader` module to this Nuxt Application.

[Prism.js](https://prismjs.com/) for syntax highlighter, [Vue Tiny Lazy Load](vue-tiny-lazyload-img) for lazy loading image using Intersection Observer API.

For UI, I only adding [modern-normalize](https://github.com/sindresorhus/modern-normalize) by [Sindre Sorhus](https://github.com/sindresorhus/) and craft from scratch for the UI layouting and styling. I highly inspired by simplicity UI in Dan's [Overreacted.io](https://overreacted.io/) and pick color scheme from [Dracula Theme](https://github.com/dracula/dracula-theme). I also pick some `helpers` from Dan's repo.

## It's still Beta 🅱️

It's still beta, I even have no clue about Domain I should use for this Blog 2.0. This is just for proof of concept (POC) in developing static blog using Nuxt.js. Still far away from *perfecto*, but I believe this is a good baby step.

If you interest how this Blog 2.0 built, you can see the codes in this link: [https://github.com/mazipan/blog-2.0](https://github.com/mazipan/blog-2.0)

