---
title: Mencicipi ReasonML untuk React
slug: mencicipi-reasonml-untuk-react
date: '2019-05-19'
minute2read: 10
description: Menceritakan bagaimana rasanya mencicipi sintaksis ReasonML untuk membangun antarmuka sebuah website
---

## ReasonML, makanan apa ya?

ReasonML (baca: Alasan Bercinta), bila saya kutip dari kata-kata mas Riza di blognya yang dipublikasikan [disini  ↗️](https://rizafahmi.com/2018/12/10/perkenalan-reasonml/) adalah sebuah sintaks yang berada diatas bahasa [OCaml  ↗️](https://ocaml.org/). ReasonML bisa menjadi bahasa yang *compiled-to-js* dengan bantuan [BuckleScript  ↗️](https://bucklescript.github.io/) sehingga menjadikan ReasonML pada akhirnya bisa langsung dibandingkan dengan TypeScript.

Lucunya, saya juga bahkan pertama kali dengar namanya bukan hasil dari baca dokumentasi resmi atau dengerin video kursus keren apapun tapi dari presentasi mas Riza Fahmi di [JakartaJS #45  ↗️](https://www.meetup.com/JakartaJS/events/256965042/) yang membahas State of JavaScript di 2018.

## Alasan klise belajar ReasonML

Masing-masing orang pasti punya alasan kenapa ingin belajar ini itu, atau alasan kenapa menggunakan ini dan itu. Mas Riza pun sudah menjelaskan beberapa alasan umum yang bisa kalian ambil sebagai pelecut untuk belajar ReasonML di tahun ini atau tahun depan (kalau masih ada 🤣).

Bagi saya pribadi sendiri, beberapa alasan klise kenapa kalian harus belajar ReasonML tahun ini antara lain:

### Anti Maintstream

Ini bisa jadi alasan ampuh bagi kalian yang gampang jenuh dengan suatu teknologi, belajar hal-hal yang belum marak di pasaran bisa memberikan kepuasan berbeda pada prosesnya. Pun bilamana teknologi tersebut pada akhirnya memiliki perkembangan yang bagus kedepannya, maka kalian bisa bersyukur karena sudah mengambil langkah belajar lebih dini.

### Facebook Centric Development

Sudah diketahui bersama bahwa dalam lingkungan developer sering terjadi perbedaan mazhab antara satu developer dengan developer lain, dimana biasanya pengambilan mazhab ini berpengaruh terhadap pemilihan teknologi pendukung di sekitarnya yang akan disesuaikan dengan mazhab yang mereka anut.

Facebook menjadi salah satu kiblat yang akhir-akhir ini menunjukan gelagat yang sangat baik dalam mendukung lingkungan developer. Banyak sekali alat, framework, teknologi bahkan dokumentasi terkait berbagai teknologi keluaran facebook yang dibuka sebagai kode terbuka. Mengikuti mazhab Facebook tentu bukan hal yang salah, dimana paling tidak kita bisa bersembunyi dibalik nama besar dan konsistensi Facebook dalam memelihara berbagai proyek kode terbuka mereka.

ReasonML seperti diketahui juga dipelihara oleh tim Facebook yang bisa memberikan jaminan lebih terhadap perkembangan dan adopsi kedepannya.

### Type Safe

Iya, sudah ada TypeScript. Tapi kan gak semua orang seneng pakai TypeScript. Pun bahwa tidak semua orang suka bila ada satu teknologi yang menjadi terlalu besar pada satu segmen. Untuk bahasa yang *Type Safe* di JavaScript memang saat ini TypeScript menjadi salah satu favorit banyak developer, tapi memberikan alternatif lain menjadi hal yang wajib agar masing-masing bisa terus berkembang dan saling berkompetisi.

ReasonML yang mengambil bahasa dasar dari OCaml diuntungkan dengan *Type System* yang sudah cukup mature dan teruji, ditambah kemampuan menebak *Type* dari suatu data tanpa perlu mendefinikan *Type* secara langsung (*Type Inference*) menjadikan kelebihan ReasonML dalam hal *Type System* semakin komplit.

### Functional

OCaml memang bahasa yang dasarnya menggunakan paradigma fungsional sehingga ReasonML pun mewarisi sifat ini. Bagi temen-temen yang ingin belajar bahasa dengan paradigma fungsional namun tidak terlalu *strict*, maka ReasonML salah satu pilihan terbaik buat temen-temen memulai.

## Siapa yang sudah pakai ReasonML?

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/mencicipi-reasonml-untuk-react/reasonml-users.png" alt="ReasonML Users">

Belum banyak pengguna ReasonML di dunia, tapi beberapa perusahaan besar sudah mulai mengadopsinya di production mereka. Di Indonesia sendiri sepertinya baru [Ruangguru ↗️](https://career.ruangguru.com/) yang berani terang-terangan menggunakan ReasonML di production.

## Cara Saya Belajar

Saya bukan orang yang senang belajar sintaksis karena jujur saja ini justru menjadi bagian yang paling membosankan dan gampang terlupakan oleh saya pribadi. Kalau kalian mampir ke [dokumentasi resminya ↗️](https://reasonml.github.io/docs/en/overview), kalian akan temui berbagai penjelasan lengkap dan contoh berbagai sintaksis dasar seperti penjelasan berbagai tipe data, tuple, record, variant dan sebagainya dengan mudah. Sayangnya membaca bagian ini tidak akan berpengaruh banyak bagi saya, semenit kemudian juga sudah lupa.

Bila temen-temen suka untuk belajar sintaksis terlebih dahulu, bisa langsung mampir ke [Playground ReasonML ↗️](https://reasonml.github.io/en/try?rrjsx=true&reason=C4TwDgpgBATlC8UDeAoKUD2A7CAuKAllsADRpTADuG+AzsDEQOZnrAAWMEehxrUAMwwBXGHQbN+AggDceRUuVoEAHuMZYWSiHKz4F-CASbtg6yeSxF5fcsAh6o9DVvQQANjof7bbSh7lzTX4OAhh7b15FdCFRCMdnCxjZCHifaKdVNKcJYO1dbINyIxNgbMS89CscQt8Kf2IQINd6h1BsG0UAXwBuFE9gJwRkcg78AEYQ6nwAIgAmGZDObgmpETEoecXyaUCoSaVVWYX+Wi9HA7djU2PtqutVu0itw09dR78Anhe7djDsy6CdbZH7JOQA05ZbiOUFOc4Q4rXMrQ278aqpFH7KZtJqbE52BrtHATFC9FD9VJQYTDJAAOnptBIFD+4UxczJFMGwjAwwAFABbEAAJQgAGMAJQIAB8yHptMFItFTNCrMi4zJAypw25vNokqAA) sehingga bisa coba-coba sintaksis tanpa perlu instalasi terlebih dahulu.

Saya sendiri lebih senang melihat contoh kasus aplikasi yang telah dibuat menggunakan ReasonML, dan syukurnya di halaman utamanya bahkan sudah diberikan tautan yang salah satunya mengarah ke proyek [HackerNews ↗️](https://github.com/reasonml-community/reason-react-hacker-news) yang dibuat menggunakan ReasonML dan React.

Saya memutuskan untuk melihat dan mempelajari bagaimana ReasonML bisa dikombinasikan dengan React untuk membangun sebuah antarmuka website melalui proyek HackerNews tersebut diatas.

Membuat proyek sendiri berdasarkan proyek yang sudah jadi lebih mudah bagi saya untuk melewati berbagai langkah untuk setup sebuah proyek yang biasanya lumayan memakan waktu di awal. Saya membuat proyek sederhana [https://github.com/mazipan/ghibli-reasonreact ↗️](https://github.com/mazipan/ghibli-reasonreact) yang kurang lebih saya akan membuat dua halaman yakni halaman listing dan halaman detail, datanya akan mengambil dari API publik yang disediakan pihak ketiga.

<img v-lazyload src="/images/placeholder-1x1.png" data-src="https://github.com/mazipan/ghibli-reasonreact/raw/master/screenshoot.png" alt="Ghibli ReasonReact">

## Yang saya pelajari sampai saat ini

### Mengatur tipe data
### "Return" yang tidak terlihat
### Mengatur struktur folder pada projek ReasonML
### Konvensi

## Repositori hasil belajar

[https://github.com/mazipan/ghibli-reasonreact ↗️](https://github.com/mazipan/ghibli-reasonreact)

### Demikian artikel kali ini, semoga bermanfaat...