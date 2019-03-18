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

Pada konfigurasi diatas, beberapa yang perlu kalian ketahui  seperti `moduleNameMapper` merupakan `alias` dari direktori kita seperti yang biasa kita lakukan di `webpack`. Sementara `transform` digunakan untuk men-transpile kode sebelum diproses oleh Jest, kita gunakan `babel-jest` dan `vue-jest` untuk membaca komponen berkas tunggal (*single file komponen* - **SFC**) pada Vue.

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

Dalam melakukan unit testing pada **SFC**, hal pertama yang harus kita lakukan adalah memastikan kita berhasil memasang atau *mounting* komponen tersebut ke dalam Virtual DOM yang ada di unit test runner. Terdengar mudah memang, tapi seringkali justru ini menjadi hal yang tersulit untuk dikerjakan karena setelah berhasil melakukan bagian ini biasanya bagian selanjutnya akan terasa lebih mudah. Untuk bisa melakukan *mounting* kita diharuskan menyiapkan semua kebutuhan awal sebuah komponen tersebut agar bisa di-*mounting*. Cara paling bar-bar yang biasa saya lakukan adalah dengan *trial and error*, tapi bila kita telah terbiasa nanti kita bisa lebih mendeteksi lebih awal kebutuhan apa saja yang harus kita siapkan untuk *mounting* komponen tersebut.

Saya beri contoh misalkan ada komponen dengan templat seperti berikut:

```html
<template>
  Hello world, {{ message }}
</template>
```

Dari templat tersebut, kita mesti mencari tau darimana datangnya nilai `{{ message }}` karena ini dibutuhkan pada saat pertama kali komponen tersebut nantinya dipasang. Bila datang dari `data ()` bisa jadi aman karena data akan otomatis terbuat ketika komponen dipasang, bila datang dari `props` berarti kita perlu mengoper props tersebut juga pada unit test kita.

Untuk contoh yang akan kita gunakan dalam melakukan *mounting* komponen di unit test akan mengikuti dari contoh yang dibuat oleh tim Vue melalui Vue-CLI yang di generate pada saat awal kita membuat projek baru, berikut contoh melakukan *mounting* komponen di unit test:

katakanlah kita mempunyai berkas dengan nama `HelloWorld.vue` yang berisi:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- banyak kode lain yang kita hilangkan karena dianggap tidak diperlukan -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

Maka pada berkas `hello-world.spec.js` kita bisa membuat unit test sebagai berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg ketika dilempar', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
```

Dari kode diatas kita belajar dasar-dasar memasang komponen pada unit test menggunakan `@vue/test-utils`, kita menggunakan API `shallowMount` dibandingkan `mount` karena kemampuan untuk memalsukan komponen anak sehingga kita tidak perlu mendefinisikan kebutuhan dari komponen anak dari komponen tersebut dan cukup fokus untuk mendefinisikan kebutuhan komponen terkait saja. Hal ini tentu selaras dengan prinsip *isolated* pada unit testing. Pada contoh diatas kita menambahkan opsi `propsData` untuk mengoper `props` yang nanti akan kita bahas di bagian terpisah dibawah nanti.

## Testing Method di Komponen Vue

Setelah sebelumnya kita berhasil melakukan *mounting*, maka tugas berikutnya akan lebih mudah seperti yang sudah kita bahas sebelumnya. Pada bagian sebelumnya kita hanya melakukan *mounting* komponen tanpa memanggil *method* apapun, berikut contoh memanggil *method* dalam Vue **SFC** melalui unit test:

Menggunkan berkas sebelumnya, kita akan menambahkan *method* pada **SFC**-nya dan melakukan sedikit perubahan seperti berikut:

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sebuah pesan'
    }
  },
  methods: {
    changeMessage (newMessage) {
      this.msg = newMessage
    }
  }
}
</script>
```

Dari kode diatas, kita bisa membuatkan unit test seperti berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('berhasil mounting komponen', () => {
    const msgExpected = 'Sebuah pesan'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.msg).toBe(msgExpected)
  })

  it('berhasil memanggil changeMessage', () => {
    const msgExpected = 'Sebuah pesan'
    const msgAfterChangeExpected = 'Sebuah pesan baru'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.msg).toBe(msgExpected)
    // memanggil method changeMessage
    wrapper.vm.changeMessage(msgAfterChangeExpected)
    expect(wrapper.vm.msg).toBe(msgExpected)
  })
})
```

Dari kode unit test diatas kita bisa mengetahui bahwa kita bisa langsung mengakses berbagai fitur Vue komponen lewat `wrapper.vm`, ini sama saja seperti `this` pada **SFC** yang merujuk pada *instance* dari komponen tersebut. Kita bisa mengakses `data`, `method`, `props`, hasil dari `computed` dan lainnya menggunakan `wrapper.vm` yang merupakan fitur `@vue/test-utils`.

## Mensimulasikan Aksi Klik Elemen

Beberapa programmer tidak senang melakukan akses langsung ke *method* tanpa melalui akses ke tampilan pengguna. Seperti pada contoh sebelumnya, unit test tersebut menjadi tidak masuk akal karena method `changeMessage` pada dasarnya tidak pernah digunakan oleh templat dan menjadi hal yang sia-sia karena kode tersebut tidak pernah mempengaruhi pengguna pada akhirnya.

Untuk mengakomodir hal ini, beberapa programmer lebih senang melakukan unit test dengan mensimulasikan apa yang harus dilakukan pengguna akhir pada aplikasi mereka tanpa mengakses ke *method* secara langsung.

Dari contoh kode sebelumnya kita akan melakukan perubahan agar *method* `changeMessage` menjadi berguna, seperti berikut:

```html
<template>
  <div class="hello">
    <h1 class="message">{{ msg }}</h1>
    <button
      class="btn"
      @click="changeMessage('Sebuah pesan baru')">
      Ubah pesan
    </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sebuah pesan'
    }
  },
  methods: {
    changeMessage (newMessage) {
      this.msg = newMessage
    }
  }
}
</script>
```

Dari kode diatas, kita bisa membuatkan unit test seperti berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('berhasil mounting komponen', () => {
    const msgExpected = 'Sebuah pesan'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.message')).toBe(msgExpected)
  })

  it('berhasil memanggil changeMessage melalui aksi klik', () => {
    const msgExpected = 'Sebuah pesan'
    const msgAfterChangeExpected = 'Sebuah pesan baru'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.message')).toBe(msgExpected)

    // memanggil method changeMessage lewat aksi klik
    const buttonElemen = wrapper.find('.btn')
    buttonWrapper.trigger('click')

    // mengecek perubahan setelah klik
    expect(wrapper.find('.message')).toBe(msgAfterChangeExpected)
  })
})
```

Bisa dilihat perbedaanya dari cara kita melakukan test pada bagian sebelumnya dengan cara kita melakukan test pada bagian ini, pada bagian ini kita benar-benar mensimulasikan bagaimana tampilan dari komponen ini nantinya akan digunakan oleh pengguna.

Kedua cara yang kita contohkan benar dan boleh saja dilakukan. Kita bahkan bisa mengerjakan kedua cara tersebut dalam satu berkas unit test. Pilihan terserah pada Anda masing-masing. Cara pertama tentu lebih cepat apalagi kalau mengejar `coverage`, cara kedua lebih baik dan lebih berorientasi pada pengguna tapi seringkali menghabiskan lebih banyak waktu untuk dibuat.

## Testing Props di Komponen Vue

Sebelum melakukan test pada `props`, kita mesti mengetahui terlebih dahulu bahwa `props` adalah sebuah nilai yang dioper oleh komponen lain, nilainya berupa satu arah yang artinya tidak bisa kita ubah secara langsung dari komponen yang menerima `props`, beberapa props sudah didefinisikan tipe data maupun struktur data yang diperbolehkan. Pada unit test kita bisa menggunakan fitur `propsData` untuk melempar `props` pada komponen tanpa perlu membuat komponen induk terlebih dahulu, berikut contoh membuat unit test pada `props`:


```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ num }}</h2>
    <h3>{{ obj.name }}</h3>
    <h4>{{ obj.desc }}</h4>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    num: {
      type: Number,
      default: 0
    },
    obj: {
      type: Object,
      default: () => ({
        name: '',
        desc: ''
      })
    },
  }
}
</script>
```

Maka kita bisa membuat unit test dari kode diatas sebagai berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg ketika dilempar', () => {
    const msgProp = 'sebuah pesan'
    const numProp = 12345
    const objProp = {
      name: 'sebuah nama',
      desc: 'sebuah deskripsi'
    }
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: msgProp,
        num: numProp,
        obj: objProp,
      }
    })
    expect(wrapper.find('h1')).toBe(msgProp)
    expect(wrapper.find('h2')).toBe(numProp)
    expect(wrapper.find('h3')).toBe(objProp.name)
    expect(wrapper.find('h4')).toBe(objProp.desc)
  })
})
```

## Testing Computed dan Watcher

Untuk melakukan test pada `computed` dan `watch` kita perlu mengetahui apa yang sebenarnya dilakukan keduanya di dalam Vue **SFC**. Kita akan memahami mengenai dua hal ini lewat contoh kode berikut:

```javascript
export default {
  data () {
    return {
      firstName: 'Irfan',
      lastName: 'Maulana'
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
```

Kode yang sama bila kita selesaikan dengan `watch` akan menjadi:

```javascript
export default {
  data () {
    return {
      firstName: 'Irfan',
      lastName: 'Maulana',
      fullName: '',
    }
  },
  watch: {
    firstName (newValue) {
      this.fullName = `${newValue} ${this.lastName}`
    },
    lastName (newValue) {
      this.fullName = `${this.firstName} ${newValue}`
    }
  }
}
```

Dari contoh kode diatas, kita bisa tau bahwa `computed` akan mengkalkulasikan ulang nilainya pada saat suatu variabel yang digunakan dibawah fungsi `computed` mengalami perubahan. Ciri khas dari `computed` sendiri adalah selalu mengambalikan nilai baru yang akan menjadi bagian dari `data`, meskipun begitu nilai dari `computed` tidak bisa kita ubah secara langsung. Nilainya hanya bisa diubah dengan melakukan perubahan pada variabel yang digunakan oleh `computed` tersebut. Sedangkan pada `watch` sama-sama akan dijalankan ketika terjadi perubahan pada variabel di dalamnya, hanya saja `watch` tidak akan mengembalikan nilai baru yang bisa kita gunakan.

Berikut contoh kode untuk membuat unit test pada `computed` dan `watch`:

```javascript
<template>
  <h1>{{ fullName }}</h1>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Irfan',
      lastName: 'Maulana'
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
```

Dari kode tersebut kita membuat unit test berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('computed seharusnya ter-trigger', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('h1')).toBe('Irfan Maulana')

    // nilai firstName dan lastName akan kita ubah
    wrapper.vm.firstName = 'Syamil'
    wrapper.vm.lastName = 'Al-Khawarizmi'

    // mengecek perubahan
    expect(wrapper.find('h1')).toBe('Syamil Al-Khawarizmi')
  })
})
```

Pada kasus menggunakan `watch` bisa dilihat pada contoh kasus berikut:

```javascript
<template>
  <h1>{{ fullName }}</h1>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Irfan',
      lastName: 'Maulana',
      fullName: '',
    }
  },
  watch: {
    firstName (newValue) {
      this.fullName = `${newValue} ${this.lastName}`
    },
    lastName (newValue) {
      this.fullName = `${this.firstName} ${newValue}`
    }
  }
}
</script>
```

Dari kode tersebut kita membuat unit test berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('watch seharusnya ter-trigger', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('h1')).toBe('Irfan Maulana')

    // nilai firstName dan lastName akan kita ubah
    wrapper.vm.firstName = 'Syamil'
    wrapper.vm.lastName = 'Al-Khawarizmi'

    // mengecek perubahan
    expect(wrapper.find('h1')).toBe('Syamil Al-Khawarizmi')
  })
})
```

## Testing Event Emitter

Seringkali pada sebuah komponen kita harus melakukan `$emit` terhadap *event* yang dilempar oleh komponen induknya. Masalahnya adalah ketika kita mengetest komponen anak yang seperti ini, kita sebenarnya tidak pernah tau *event* seperti apa yang akan dilempar oleh komponen induknya. Ketidakpunyaan penglihatan kita terhadap aksi sejenis ini membuat kita tidak bisa melakukan test yang bisa kita pastikan hasilnya, karenanya kita biasanya cuma akan melakukan `Spy` terhadap fungsi seperti ini. Untungnya dari `@vue/test-utils` sudah menyediakan API yang memudahkan kita melakukan ini yakni [emitted](https://vue-test-utils.vuejs.org/api/wrapper/emitted.html).

Contoh menggunakan `emitted` sebagai berikut, misalkan kita memiliki kode:

```javascript
export default {
  methods: {
    emitSomething () {
      this.$emit('foo', 123)
    }
  }
}
```

Maka kita bisa membuatkan unit test sebagai berikut:

```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('memanggil $emit', () => {
    const wrapper = shallowMount(HelloWorld)
    wrapper.vm.emitSomething()
    expect(wrapper.emitted().foo).toBeTruthy()
    expect(wrapper.emitted('foo')).toBeTruthy()
  })
})
```

## Testing Perpindahan Route

Terkadang pada sebuah projek kita diharuskan melakukan manipulasi `route` pada sebuah seperti menggunakan `router.push`, `router.go` atau lainnya. Sebelum kita melakukan test pada kode seperti ini, kita paling tidak mesti tau apa yang terjadi ketika kita melakukan manipulasi `router` di Vue. Vue memanfaatkan pustaka tambahan yakni `Vue Router` untuk melakukan manipulasi `router` yang mana diurus secara resmi oleh tim yang sama dengan yang membuat Vue inti.

Ada dua objek yang harus kita tau ketika menggunakan `Vue Router` yakni, `route` yang bisa diakses lewat **SFC** melalui `this.$route` dan juga `router` yang bisa diakses melalui `this.$router`. `Route` adalah representasi posisi halaman saat ini, berupa objek yang berisi `path`, `name`, `query` dan sebagainya. Sementara `Router` merupakan objek yang bisa memanipulasi posisi `route` tersebut. Jadi kita akan mengakses `router` untuk mengubah `route` dan akan mengecek `route` untuk mengetahui apakah manipulasi tersebut berhasil ataukah tidak.

Contoh kode berikut akan memberikan gambaran mengenai dua hal tersebut:


```javascript
export default {
  methods: {
    changeRoute () {
      this.$router.push('/')
      // console.log(this.$route.path)
      // akan mencetak nilai /
      this.$router.push('/foo')
      // console.log(this.$route.path)
      // akan mencetak nilai /foo
      this.$router.push('/bar')
      // console.log(this.$route.path)
      // akan mencetak nilai /bar
    }
  }
}
```

## Testing Vuex

## Testing Dengan Vue-i18n

## Testing Pemanggilan API


---

References:

1. [https://www.guru99.com/unit-testing-guide.html](https://www.guru99.com/unit-testing-guide.html)
2. [https://lmiller1990.github.io/vue-testing-handbook/](https://lmiller1990.github.io/vue-testing-handbook/)
3. [https://vue-test-utils.vuejs.org/](https://vue-test-utils.vuejs.org/)