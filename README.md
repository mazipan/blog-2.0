# 🗣 Blog-2.0

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/974204443ba449c69058d5906c9d25c6)](https://www.codacy.com/app/mazipan/blog-2.0?utm_source=github.com&utm_medium=referral&utm_content=mazipan/blog-2.0&utm_campaign=Badge_Grade) [![Travis](https://img.shields.io/travis/mazipan/blog-2.0.svg)](https://travis-ci.org/mazipan/blog-2.0) ![Dependencies](https://img.shields.io/david/mazipan/blog-2.0.svg)

> A personal blog by Irfan Maulana built with Nuxt.js


See may latest [Blog-3.0](https://github.com/mazipan/blog-3.0)

## Live

<https://mazipan-blog.netlify.com/>

## Logo

![Logo](static/favicon-96x96.png)

Raw file in this [vectr.com link](https://vectr.com/mazipan/i7V7tBB5z.png?width=512&height=512&select=i7V7tBB5zpage0)

## Screenshoot

|                Homepage               |            Post Detail            |
| :-----------------------------------: | :-------------------------------: |
| ![Homepage](screenshoot-homepage.png) | ![Detail](screenshoot-detail.png) |


## Features

- Support AMP
- Support PWA
- Support english and bahasa Indonesia for posts
- Generate RSS Feed and Sitemap.xml
- Save as draft before publish
- Support adding categories for each post
- Support for sponsored post
- Lazy load image in post page using [VueTinyLazyloadImg](https://github.com/mazipan/vue-tiny-lazyload-img)
- Form for subscriber using NetlifyForm
- Like and page view using Firebase real-time DB
- Syntax highlighting using Prism.js

## Firebase Setup

We use `Firebase` Real Time Database, so you need to create file `.env` before running this project in your local.

```bash
FIREBASE_API_KEY= your firebase `apiKey` config
FIREBASE_AUTH_DOMAIN= your firebase `authDomain` config
FIREBASE_DATABASE_URL= your firebase `databaseURL` config
FIREBASE_PROJECT_ID= your firebase `projectId` config
FIREBASE_STORAGE_BUCKET= your firebase `storageBucket` config
FIREBASE_MESSAGING_SENDER_ID= your firebase `messagingSenderId` config
```

Create DB in Firebase Database with your own name, and import from file `firebase-db-export.json` in this project.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Thanks for these awesome repo

-   [Dracula Theme](https://github.com/dracula/dracula-theme)
-   [Marinaaisa](https://github.com/marinaaisa/marinaaisa-website-2018)
-   [Overreacted.io](https://overreacted.io/)

* * *

Copyright © 2019 by Irfan Maulana
