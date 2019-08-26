---
title: Pelajaran dari membangun microsite untuk Tokopedia Anniversary
slug: lesson-learned-from-building-tokopedia-anniv-microsite
date: '2019-08-21'
minute2read: 10
description: Berbagai pelajaran yang kami dapat saat membangun microsite untuk acara ulang tahun Tokopedia ke-10
categories: [programming]
cover: https://www.mazipan.xyz/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/tokopedia-anniv.png
---

## Pembukaan

Tokopedia baru saja berulang tahun ke-10, dan untuk merayakannya kami meyiapkan satu *microsite* untuk sebagai perantara menyampaikan pesan kepada para pengunjung setia kami. Kalian bisa melihat halaman tersebut di alamat [https://www.tokopedia.com/ulang-tahun/ ↗️](https://www.tokopedia.com/ulang-tahun/).

Pada artikel ini, saya mewakili tim akan bercerita dari sisi *Engineering*, terutama pelajaran yang kami dapatkan dari proses pembangunan *microsite* tersebut.

Kami percaya kalau hampir setiap lingkungan kerja itu unik, banyak hal yang bisa dengan mudah kita aplikasikan pada suatu lingkungan namun pada lingkungan lain malah serasa susah, sangat susah atau bahkan tidak mungkin untuk dilakukan (*paling tidak pada saat ini). Pelajaran selalu bisa diambil dari setiap fase, bukan hanya dari hal sukses bisa juga dari kegagalan yang telah kita lalui. Tidak perlu malu karena telah mengerjakan sesuatu dengan salah, tapi pastikan kita tidak akan mengulangi hal salah yang sama di masa yang akan datang.

Pun dalam proses membangun *microsite* kali ini. Bagi yang belum tau *microsite*, ini merupakan jenis website yang ringan dan memiliki alur logika yang sederhana. *Microsite* biasanya merupakan webuah website yang independen dan terlepas dari produk utama. Ini dilakukan agar bisa memaksimalkan tujuan utama dari *microsite* itu sendiri yang diharapkan agar bisa cepat diubah, cepat diperbaiki, cepat dibangun tanpa harus terkait dengan produk utama yang biasanya memiliki level kompleksitas yang lebih tinggi.

Dan mari kita bicarakan berbagai hal baik dan buruk yang bisa kita pelajari bersama-sama dari proses pembangunan *microsite* ini.

## Penampakan

Sebelum membicarakan lebih lanjut, mungkin teman-teman perlu melihat sekilas tampilan dari *microsite* tersebut.

### Tampilan Desktop Web

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/anniv-desktop.gif" alt="Desktop Web" height="200" width="auto">

### Tampilan Mobile Web

<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/lesson-learned-from-building-tokopedia-anniv-microsite/anniv-mobile.gif" alt="Mobile Web" height="200" width="auto">

## Timeline

Kami perlu berikan catatan sebelumnya dari sisi waktu pembangunan *microsite* ini, projek ini dibuat dengan mengikuti ilmu *Sangkuriang* dimana diminta dibangun dalam waktu satu sprint yang tidak lebih dari dua minggu termasuk segala *ceremony* persiapan deployment yang harus selesai dalam waktu tersebut. Hal ini karena tentu saja tanggal ulang tahun Tokopedia tidak mungkin diundur, yang harus bisa menyesuaikan adalah *development time*.

## Kebutuhan dari Produk

Setelah turun *requirement* dari tim produk, ternyata website yang akan dibangun merupakan *microsite* yang sangat-sangat *fancy*. Penuh dengan animasi menarik pada saat *scroll down*. Belum cukup *microsite* ini juga bertaburan gambar dan beberapa video dimana-mana, beberapa malah berada pada lokasi yang kritis yang akan memaksa pengguna untuk memuat di masa-masa awal. Ok, *requirement* sudah terlihat dan tidak bisa digoyang lagi soal kemauan membuat *microsite* yang super *fancy* ini.

Sebagai *engineer*, pilihan kita adalah banyak berdoa 😂 semoga *microsite* ini tidak akan menimbulkan kegaduhan dan bisa tetap bertahan dihajar traffic yang menggila nantinya.

## Kebutuhan dari SRE

Selain kebutuhan dari tim produk, ada juga kebutuhan lain dari tim SRE dimana direncanakan bahwa *microsite* ini akan menerima traffic yang cukup tinggi terutama menjelang hari H dimana hampir semua platfom Tokopedia akan meletakan tautan ke *microsite* ini pada halaman beranda mereka.

## Platform

Dipastikan bahwa *microsite* ini akan diakses lewat peramban baik desktop maupun mobile, sehingga dua jenis ini harus bisa bekerja sama baiknya. Menyusul adalah platfom Apps baik Android maupun iOS yang akan menampilkan *microsite* ini lewat WebView mereka.

## Pemilihan Teknologi

Pada akhirnya *engineer* yang mengerjakan *microsite* ini memutuskan untuk menggunakan `jQuery` dibantu dengan pustaka [ScrollMagic ↗️](https://scrollmagic.io/) untuk membangun berbagai animasi interaksi ketika pengguna melakukan *scroll down*.

Tentu saja pemilihan `jQuery` bukanlah hal yang biasa di Tokopedia, dimana para *engineer* sudah terlalu #React dan pastinya susah untuk diminta melakukan coding di `jQuery`. Tapi melihat pada kebutuhan dan waktu yang dipunya, sepertinya tidak ada pilihan lain selain berharap pada kehebatan jQuery melakukan *DOM manipulation*.

## Proses Pembangunan

Maka dimulailah pengerjaan pembangunan *microsite* ini dengan dasar teknologi menggunakan `jQuery`.

## Pelajaran yang didapat

### Demikian artikel kali ini, semoga bermanfaat...
