---
title: Panduan Unit Testing di Vue.js
slug: panduan-unit-testing-di-vuejs
date: '2019-02-25'
minute2read: 20
description: Langkah-langkah memasang dan melakukan testing pada kode Vue.js dan Nuxt.js dengan belajar dari berbagai kasus yang terjadi pada proyek nyata
---

## Mengenai Unit Testing

Unit testing (UT) merupakan bagian terkecil dari proses pengetesan sebuah aplikasi perangkat lunak. UT berfokus untuk mengetest bagian terkecil sebuah aplikasi yakni potongan-potongan kode yang dibuat oleh pengembangnya, itu mengapa UT paling ideal dibuat oleh pengembang itu sendiri. Dengan mengetest kode-kode kecil di dalam sebuah aplikasi diharapkan kita bisa menghasilkan aplikasi perangkat lunak dengan kualitas yang lebih bisa dijamin.

## Prinsip Utama

Ada beberapa prinsip utama dalam melakukan unit testing, beberapa diantaranya yang dikenal dengan **FIRST**

1. **F - Fast** (Cepat), unit test harus bisa dieksekusi dengan cepat, tidak memakan waktu yang lebih lama dibandingkan ketika harus menjalankan aplikasi secara utuh untuk melakukan test manual.
2. **I - Isolated** (Dapat Diisolasi), unit test harus bisa diisolasi antar satu dengan yang lain, ketika terjadi kegagalan maka harus bisa dipastikan tidak merembet ke berkas testing pada bagian lain.
3. **R - Repeatable** (Dapat Diulang), unit testing harus bisa dijalankan kapan saja dan menghasilkan hasil yang sama. Tidak terikat pada hari tertentu, waktu tertentu atau zona waktu tertentu.
4. **S - Self-Validating** (Validasi Diri Sendiri),
5. **T - Timely** (Tepat Waktu), unit test seharusnya tidak menghabiskan terlalu banyak waktu untuk dibuat, keberadaannya tidak boleh memakan porsi dari pekerjaan yang harus diselesaikan.

## Beberapa Siklus Hidup Umum di Unit Test

1. Setup
2. Test Execution
3. Teardown

## Memasang Unit Testing di Vue dan Nuxt

Saya akan spesifik membahas bagaimana cara memasang Unit Test pada *framework* [Jest](https://jestjs.io/en/) beberapa kode yang akan saya sertakan pun akan spesifik pada Jest, bila Anda menggunakan *framework* lain, bisa melihat pada referensi yang akan saya sertakan berikut:

+ [Memasang unit test pada Mocha + Webpack](https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-mocha-webpack.html)
+ [Memasang unit test pada Karma](https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-karma.html)

Untuk Jest sendiri berikut cara memasang Unit Test pada beberapa projek:

### Memasang Jest menggunakan Vue-CLI 3

+ Pasang Vue-CLI 3 dengan perintah

```bash
yarn add @vue/cli

#atau

npm i -g @vue/cli
```

+ Buat projek baru dengan `vue create my-project-name`. Pilih *"Manually select features"* dan centang "Unit Testing" dan "Jest" untuk runner unit testnya, silakan lihat artikel resmi [membuat project baru dengan Vue-CLI](https://cli.vuejs.org/guide/creating-a-project.html) untuk lebih jelasnya.

+ Jalankan unit test dengan perintah `yarn test:unit` dan semua konfigurasi sudah dibuatkan oleh Vue-CLI tanpa kita harus melakukan secara manual.

### Memasang Jest pada tanpa Vue-CLI

Pasang beberapa dependency untuk menjalankan unit test dengan jest berikut:

```bash
yarn add jest babel-jest vue-jest @vue/test-utils -D

# atau

npm i jest babel-jest vue-jest @vue/test-utils --dev
```

Perintah tersebut akan menambahkan dependency berikut pada projek kita:

+ `jest`
+ `babel-jest`
+ `vue-jest`
+ `@vue/test-utils`

Buat file konfigurasi untuk Jest dengan nama file `jest.config.js` dengan isi konfigurasi sebagai berikut:

```javascript
module.exports = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+.js$': '<rootDir>/node_modules/babel-jest',
    '^.+.vue$': '<rootDir>/node_modules/vue-jest'
  }
}
```

Pada konfigurasi diatas, beberapa yang perlu kalian ketahui  seperti `moduleNameMapper` merupakan `alias` dari direktori kita seperti yang biasa kita lakukan di `webpack`. Sementara `transform` digunakan untuk men-transpile kode sebelum diproses oleh Jest, kita gunakan `babel-jest` dan `vue-jest` untuk membaca komponen berkas tunggal (*single file komponen*) pada Vue.

Karena kita menggunakan `babel` juga pada unit test kita, maka jika belum ada konfigurasi babel pada projek kita, silakan tambahkan konfigurasi berikut:

```javascript
// babel.config.js
module.exports = {
  presets: [
    [
      '@vue/app'
    ],
  ],
};
```

Selanjutnya kita bisa memasang `script` tambahan pada `package.json` kita seperti berikut:

```javascript
{
  "scripts": {
    "test:unit": "jest"
  }
}
```

Secara default, jest akan menganggap semua file yang berekstensi `.spec.js` atau `.test.js` sebagai file unit test yang akan dijalankan pada saat perintah `jest` diketikkan.

### Memasang Jest pada Nuxt dengan `create-nuxt-app`

Untuk memasang Jest pada Nuxt, bisa melalui `create-nuxt-app` yang bisa dilakukan dengan perintah:

```bash
yarn create nuxt-app my-project-name
# atau
npm init nuxt-app my-project-name
# atau
npx create-nuxt-app my-project-name
```

Pada pilihan "Choose your favorite test framework:", silakan pilih "Jest" sebagai unit test yang akan digunakan.

Jalankan unit test dengan perintah `yarn test`.


### Memasang Jest pada Nuxt secara manual

Hampir tidak ada perbedaan dengan bagian [Memasang Jest pada tanpa Vue-CLI](#memasang-jest-pada-tanpa-vue-cli) pada projek Vue biasa tanpa Nuxt. Perbedaan mungkin hanya ada pada konfigurasi `babel`, karena pada Vue-CLI kita memanfaatkan babel presets dari Vue yang telah terpasang pada saat membuat projek Vue.

Kita cukup melakukan konfigurasi babel untuk environment "test" karena projek Nuxt sudah memiliki konfigurasi babel bawaan, seperti berikut contohnya:

```javascript
{
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
}
```

## Perbedaan Dasar Soal Nuxt dengan Vue

Pada saat ingin membuat unit test untuk projek Nuxt dengan Vue ada beberapa perbedaan yang mesti kalian tau sebelumnya. Seperti kita tau bahwa Nuxt dibangun diatas Vue namun dengan banyak fitur bawaan yang mungkin saja tidak akan kalian temui pada projek Vue yang tanpa Nuxt. Beberapa perbedaan adalah Nuxt punya beberapa `tag` spesial yang mirip dengan Vue namun tidak akan kalian temui disana, seperti beberapa tag berikut:

```html
<nuxt></nuxt>
<nuxt-child></nuxt-child>
<nuxt-link></nuxt-link>
<no-ssr></no-ssr>
```

Selain itu Nuxt memiliki beberapa properti pada `SFC` nya seperti berikut diantaranya:

```javascript
export default {
  head () {},
  asyncData () {},
  fetch () {},
  nuxtServerInit () {},
  validate () {},
  middleware: '',
  layout: ''
}
```

Projek Nuxt tidak memiliki `router.js` seperti yang biasanya kita buat di projek Vue, Nuxt akan menggunakan struktur folder untuk men-*generate* berkas `router.js` untuk projek kita yang letaknya ada di direktori `.nuxt`.

Beberapa projek Nuxt juga tidak melakukan *instance* secara manual terhadap storenya, seperti biasa kita lakukan dengan script seperti ini misalnya:

```javascript
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
```

Dengan mengetahui beberapa perbedaan mendasar ini, nantinya akan berguna ketika kita menemui error yang sebelumnya tidak kita temui pada projek Vue namun ternyata kita temui pada projek Nuxt.

## Testing JavaScript File Sederhana

Untuk mengetest berkas JavaScript biasa tentu lebih mudah dibandingkan untuk melakukan test pada file `SFC` Vue. Misalnya saja kita punya berkas `helper` dengan nama berkas `math-util.js`, di dalamnya terdapat kode seperti berikut:

```javascript
export function add (a, b) {
  return a + b
}

export function min (a, b) {
  return a - b
}

export function increment (a) {
  return add(a, 1)
}

export function decrement (a) {
  return min(a, 1)
}
```

Maka kita bisa membuatkan berkas untuk unit test dengan nama `math-util.spec.js` seperti berikut contohnya:

```javascript
import { add, min, increment, decrement } from '@/helpers/math-util'

describe('math-util.js', () => {
  it('add function should return correct value', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(2, 2)).toBe(4)
    expect(add(2, 3)).toBe(5)
    expect(add(3, 4)).toBe(7)
  })

  it('min function should return correct value', () => {
    expect(min(7, 1)).toBe(6)
    expect(min(5, 2)).toBe(3)
    expect(min(4, 3)).toBe(1)
    expect(min(3, 1)).toBe(2)
  })

  it('increment function should return correct value', () => {
    expect(increment(1)).toBe(2)
    expect(increment(5)).toBe(6)
    expect(increment(4)).toBe(5)
    expect(increment(8)).toBe(9)
  })

  it('decrement function should return correct value', () => {
    expect(decrement(2)).toBe(1)
    expect(decrement(5)).toBe(4)
    expect(decrement(4)).toBe(3)
    expect(decrement(8)).toBe(7)
  })
})
```

## Testing Mounting Komponen Vue

## Testing Method di Komponen Vue

## Testing Props di Komponen Vue

## Testing Computed dan Watcher

## Testing Event Emitter

## Testing Perpindahan Route

## Testing Vuex

## Testing Dengan Vue-i18n

## Testing Pemanggilan API


---

References:

1. [https://www.guru99.com/unit-testing-guide.html](https://www.guru99.com/unit-testing-guide.html)
2. [https://lmiller1990.github.io/vue-testing-handbook/](https://lmiller1990.github.io/vue-testing-handbook/)
3. [https://vue-test-utils.vuejs.org/](https://vue-test-utils.vuejs.org/)