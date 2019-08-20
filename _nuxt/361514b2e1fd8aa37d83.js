(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{179:function(e,n){e.exports={body:'## Latar Belakang ⛈\n\nDalam pekerjaan kami sehari-hari, kami menggunakan ESLint untuk hampir semua kode di repositori FE. Idealnya, pengembang harus menjalankan ESLint pada lingkungan development dan memastikan branch yang dia kerjakan bersih dari segala peringatan dan kesalahan dari ESLint. Demi kebaikan bersama, kami juga menempatkan git hook menggunakan `husky` untuk menjalankan ESLint sebelum mendorong perubahan ke *origin*. Tapi itu tidak cukup untuk flow kami saat ini, saya tidak tahu mengapa, kadang-kadang ada saja kode yang tidak lulus aturan ESL di branch asal. Pada akhirnya kami memutuskan untuk menempatkan skrip ESLint ini di dalam proses Continuous Integration (CI) kami.\n\nSayangnya, pengembang kami tidak terlalu suka membaca log secara penuh yang telah tersedia pada alat CI kami, mereka lebih suka melihat laporan HTML untuk setiap tahap yang dijalankan dalam CI. Setelah membaca dokumentasi resmi dari ESLint, saya menemukan bagian tentang [ESLint formatter ↗️](https://eslint.org/docs/user-guide/formatters/). Kami ternyata dapat memproduksi laporan berupa HTML dengan formatter ini.\n\nKami melakukan trial and error untuk bukti kesasihan tentang pembuatan laporan HTML dari ESLint kami. Setelah sehari menggunakan reporter HTML resmi di CI kami, kami menemukan bahwa formatter HTML resmi dari ESLint ternyata tidak membuat log ketika ada beberapa kesalahan dan hanya memunculkan pesan kesalahan dengan kode 1 tanpa ada satupun log seperti yang kami harapkan. Kami bisa melihat laporan HTML tetapi kami kehilangan log kami. Dan hal ini jelas bukan seperti yang kami harapkan.\n\nAkhirnya, kami memutuskan untuk membuat formatter kami sendiri yang menggabungkan kekuatan reporter HTML dan menyimpan log kesalahan di sistem log kami.\n\nKami menyebutnya `eslint-formatter-html-extended`!\n\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/eslint-formatter-html-extended/eslint-html.png" alt="ESLint formatter HTML Extended" height="200">\n\n## Unboxing 📦\n\nPada dasarnya, kami tidak ingin mengerjakan hal-hal yang sudah dikerjakan orang lain. Jadi, kami hanya menggabungkan dua jenis formatter dari ESLint. Kami memilih formatter HTML oleh [JulianLaval ↗️](https://github.com/JulianLaval) dan formatter Stylish oleh [Sindre Sorhus ↗️](https://github.com/sindresorhus). Kami juga menambahkan sedikit sentuhan perubahan dalam laporan output HTML agar lebih indah dan mudah dinavigasi.\n\n## Penggunaan ☀️\n\nInstall dependensi lewat perintah:\n\n```bash\n$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n```\n\nMengacu pada [docs ↗️](https://eslint.org/docs/user-guide/formatters/), kita hanya diharuskan menambahkan argumen `-f nameFormatter -o nameFile` pada ESLint skript, seperti:\n\n```bash\n$ eslint --ext .js . -f html-extended -o eslint-report.html\n```\n\nFormatter ini kami terbitkan sebagai kode sumber terbuka yang dapat Anda lihat di [Github repository ↗️](https://github.com/mazipan/eslint-formatter-html-extended), silakan fork atau buat issue baru bila menemukan masalah.\n\n### Demikian artikel kali ini, semoga bermanfaat...',html:'<h2>Latar Belakang ⛈</h2>\n<p>Dalam pekerjaan kami sehari-hari, kami menggunakan ESLint untuk hampir semua kode di repositori FE. Idealnya, pengembang harus menjalankan ESLint pada lingkungan development dan memastikan branch yang dia kerjakan bersih dari segala peringatan dan kesalahan dari ESLint. Demi kebaikan bersama, kami juga menempatkan git hook menggunakan <code>husky</code> untuk menjalankan ESLint sebelum mendorong perubahan ke <em>origin</em>. Tapi itu tidak cukup untuk flow kami saat ini, saya tidak tahu mengapa, kadang-kadang ada saja kode yang tidak lulus aturan ESL di branch asal. Pada akhirnya kami memutuskan untuk menempatkan skrip ESLint ini di dalam proses Continuous Integration (CI) kami.</p>\n<p>Sayangnya, pengembang kami tidak terlalu suka membaca log secara penuh yang telah tersedia pada alat CI kami, mereka lebih suka melihat laporan HTML untuk setiap tahap yang dijalankan dalam CI. Setelah membaca dokumentasi resmi dari ESLint, saya menemukan bagian tentang <a href="https://eslint.org/docs/user-guide/formatters/">ESLint formatter ↗️</a>. Kami ternyata dapat memproduksi laporan berupa HTML dengan formatter ini.</p>\n<p>Kami melakukan trial and error untuk bukti kesasihan tentang pembuatan laporan HTML dari ESLint kami. Setelah sehari menggunakan reporter HTML resmi di CI kami, kami menemukan bahwa formatter HTML resmi dari ESLint ternyata tidak membuat log ketika ada beberapa kesalahan dan hanya memunculkan pesan kesalahan dengan kode 1 tanpa ada satupun log seperti yang kami harapkan. Kami bisa melihat laporan HTML tetapi kami kehilangan log kami. Dan hal ini jelas bukan seperti yang kami harapkan.</p>\n<p>Akhirnya, kami memutuskan untuk membuat formatter kami sendiri yang menggabungkan kekuatan reporter HTML dan menyimpan log kesalahan di sistem log kami.</p>\n<p>Kami menyebutnya <code>eslint-formatter-html-extended</code>!</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/eslint-formatter-html-extended/eslint-html.png" alt="ESLint formatter HTML Extended" height="200">\n<h2>Unboxing 📦</h2>\n<p>Pada dasarnya, kami tidak ingin mengerjakan hal-hal yang sudah dikerjakan orang lain. Jadi, kami hanya menggabungkan dua jenis formatter dari ESLint. Kami memilih formatter HTML oleh <a href="https://github.com/JulianLaval">JulianLaval ↗️</a> dan formatter Stylish oleh <a href="https://github.com/sindresorhus">Sindre Sorhus ↗️</a>. Kami juga menambahkan sedikit sentuhan perubahan dalam laporan output HTML agar lebih indah dan mudah dinavigasi.</p>\n<h2>Penggunaan ☀️</h2>\n<p>Install dependensi lewat perintah:</p>\n<pre><code class="language-bash">$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n</code></pre>\n<p>Mengacu pada <a href="https://eslint.org/docs/user-guide/formatters/">docs ↗️</a>, kita hanya diharuskan menambahkan argumen <code>-f nameFormatter -o nameFile</code> pada ESLint skript, seperti:</p>\n<pre><code class="language-bash">$ eslint --ext .js . -f html-extended -o eslint-report.html\n</code></pre>\n<p>Formatter ini kami terbitkan sebagai kode sumber terbuka yang dapat Anda lihat di <a href="https://github.com/mazipan/eslint-formatter-html-extended">Github repository ↗️</a>, silakan fork atau buat issue baru bila menemukan masalah.</p>\n<h3>Demikian artikel kali ini, semoga bermanfaat...</h3>\n',attributes:{title:"Mengeksten HTML Formatter resmi ESLint",slug:"eslint-formatter-html-extended",date:"2019-02-19",minute2read:3,description:"Alasan mengapa kami memutuskan untuk mengeksten HTML Formatter resmi ESLint's",categories:["javascript","eslint"],cover:"https://www.mazipan.xyz/content-images/eslint-formatter-html-extended/eslint-html.png",_meta:{resourcePath:"/home/travis/build/mazipan/blog-2.0/contents/published/eslint-formatter-html-extended/index.md"}},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Latar Belakang ⛈")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'p\',[_vm._v("Kami melakukan trial and error untuk bukti kesasihan tentang pembuatan laporan HTML dari ESLint kami. Setelah sehari menggunakan reporter HTML resmi di CI kami, kami menemukan bahwa formatter HTML resmi dari ESLint ternyata tidak membuat log ketika ada beberapa kesalahan dan hanya memunculkan pesan kesalahan dengan kode 1 tanpa ada satupun log seperti yang kami harapkan. Kami bisa melihat laporan HTML tetapi kami kehilangan log kami. Dan hal ini jelas bukan seperti yang kami harapkan.")]),_vm._v(" "),_c(\'p\',[_vm._v("Akhirnya, kami memutuskan untuk membuat formatter kami sendiri yang menggabungkan kekuatan reporter HTML dan menyimpan log kesalahan di sistem log kami.")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"/content-images/eslint-formatter-html-extended/eslint-html.png","alt":"ESLint formatter HTML Extended","height":"200"}}),_vm._v(" "),_c(\'h2\',[_vm._v("Unboxing 📦")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'h2\',[_vm._v("Penggunaan ☀️")]),_vm._v(" "),_c(\'p\',[_vm._v("Install dependensi lewat perintah:")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c(\'h3\',[_vm._v("Demikian artikel kali ini, semoga bermanfaat...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Dalam pekerjaan kami sehari-hari, kami menggunakan ESLint untuk hampir semua kode di repositori FE. Idealnya, pengembang harus menjalankan ESLint pada lingkungan development dan memastikan branch yang dia kerjakan bersih dari segala peringatan dan kesalahan dari ESLint. Demi kebaikan bersama, kami juga menempatkan git hook menggunakan "),_c(\'code\',{pre:true},[_vm._v("husky")]),_vm._v(" untuk menjalankan ESLint sebelum mendorong perubahan ke "),_c(\'em\',[_vm._v("origin")]),_vm._v(". Tapi itu tidak cukup untuk flow kami saat ini, saya tidak tahu mengapa, kadang-kadang ada saja kode yang tidak lulus aturan ESL di branch asal. Pada akhirnya kami memutuskan untuk menempatkan skrip ESLint ini di dalam proses Continuous Integration (CI) kami.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Sayangnya, pengembang kami tidak terlalu suka membaca log secara penuh yang telah tersedia pada alat CI kami, mereka lebih suka melihat laporan HTML untuk setiap tahap yang dijalankan dalam CI. Setelah membaca dokumentasi resmi dari ESLint, saya menemukan bagian tentang "),_c(\'a\',{attrs:{"href":"https://eslint.org/docs/user-guide/formatters/"}},[_vm._v("ESLint formatter ↗️")]),_vm._v(". Kami ternyata dapat memproduksi laporan berupa HTML dengan formatter ini.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Kami menyebutnya "),_c(\'code\',{pre:true},[_vm._v("eslint-formatter-html-extended")]),_vm._v("!")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Pada dasarnya, kami tidak ingin mengerjakan hal-hal yang sudah dikerjakan orang lain. Jadi, kami hanya menggabungkan dua jenis formatter dari ESLint. Kami memilih formatter HTML oleh "),_c(\'a\',{attrs:{"href":"https://github.com/JulianLaval"}},[_vm._v("JulianLaval ↗️")]),_vm._v(" dan formatter Stylish oleh "),_c(\'a\',{attrs:{"href":"https://github.com/sindresorhus"}},[_vm._v("Sindre Sorhus ↗️")]),_vm._v(". Kami juga menambahkan sedikit sentuhan perubahan dalam laporan output HTML agar lebih indah dan mudah dinavigasi.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ yarn add eslint-formatter-html-extended -D\\n# OR\\n$ npm i eslint-formatter-html-extended --dev\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Mengacu pada "),_c(\'a\',{attrs:{"href":"https://eslint.org/docs/user-guide/formatters/"}},[_vm._v("docs ↗️")]),_vm._v(", kita hanya diharuskan menambahkan argumen "),_c(\'code\',{pre:true},[_vm._v("-f nameFormatter -o nameFile")]),_vm._v(" pada ESLint skript, seperti:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ eslint --ext .js . -f html-extended -o eslint-report.html\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Formatter ini kami terbitkan sebagai kode sumber terbuka yang dapat Anda lihat di "),_c(\'a\',{attrs:{"href":"https://github.com/mazipan/eslint-formatter-html-extended"}},[_vm._v("Github repository ↗️")]),_vm._v(", silakan fork atau buat issue baru bila menemukan masalah.")]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-markdown"},[t("h2",[e._v("Latar Belakang ⛈")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("Kami melakukan trial and error untuk bukti kesasihan tentang pembuatan laporan HTML dari ESLint kami. Setelah sehari menggunakan reporter HTML resmi di CI kami, kami menemukan bahwa formatter HTML resmi dari ESLint ternyata tidak membuat log ketika ada beberapa kesalahan dan hanya memunculkan pesan kesalahan dengan kode 1 tanpa ada satupun log seperti yang kami harapkan. Kami bisa melihat laporan HTML tetapi kami kehilangan log kami. Dan hal ini jelas bukan seperti yang kami harapkan.")]),e._v(" "),t("p",[e._v("Akhirnya, kami memutuskan untuk membuat formatter kami sendiri yang menggabungkan kekuatan reporter HTML dan menyimpan log kesalahan di sistem log kami.")]),e._v(" "),e._m(2),e._v(" "),t("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"/content-images/eslint-formatter-html-extended/eslint-html.png",alt:"ESLint formatter HTML Extended",height:"200"}}),e._v(" "),t("h2",[e._v("Unboxing 📦")]),e._v(" "),e._m(3),e._v(" "),t("h2",[e._v("Penggunaan ☀️")]),e._v(" "),t("p",[e._v("Install dependensi lewat perintah:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),t("h3",[e._v("Demikian artikel kali ini, semoga bermanfaat...")])])},this.$options.staticRenderFns=[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Dalam pekerjaan kami sehari-hari, kami menggunakan ESLint untuk hampir semua kode di repositori FE. Idealnya, pengembang harus menjalankan ESLint pada lingkungan development dan memastikan branch yang dia kerjakan bersih dari segala peringatan dan kesalahan dari ESLint. Demi kebaikan bersama, kami juga menempatkan git hook menggunakan "),n("code",{pre:!0},[this._v("husky")]),this._v(" untuk menjalankan ESLint sebelum mendorong perubahan ke "),n("em",[this._v("origin")]),this._v(". Tapi itu tidak cukup untuk flow kami saat ini, saya tidak tahu mengapa, kadang-kadang ada saja kode yang tidak lulus aturan ESL di branch asal. Pada akhirnya kami memutuskan untuk menempatkan skrip ESLint ini di dalam proses Continuous Integration (CI) kami.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Sayangnya, pengembang kami tidak terlalu suka membaca log secara penuh yang telah tersedia pada alat CI kami, mereka lebih suka melihat laporan HTML untuk setiap tahap yang dijalankan dalam CI. Setelah membaca dokumentasi resmi dari ESLint, saya menemukan bagian tentang "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/formatters/"}},[this._v("ESLint formatter ↗️")]),this._v(". Kami ternyata dapat memproduksi laporan berupa HTML dengan formatter ini.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Kami menyebutnya "),n("code",{pre:!0},[this._v("eslint-formatter-html-extended")]),this._v("!")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Pada dasarnya, kami tidak ingin mengerjakan hal-hal yang sudah dikerjakan orang lain. Jadi, kami hanya menggabungkan dua jenis formatter dari ESLint. Kami memilih formatter HTML oleh "),n("a",{attrs:{href:"https://github.com/JulianLaval"}},[this._v("JulianLaval ↗️")]),this._v(" dan formatter Stylish oleh "),n("a",{attrs:{href:"https://github.com/sindresorhus"}},[this._v("Sindre Sorhus ↗️")]),this._v(". Kami juga menambahkan sedikit sentuhan perubahan dalam laporan output HTML agar lebih indah dan mudah dinavigasi.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ yarn add eslint-formatter-html-extended -D\n# OR\n$ npm i eslint-formatter-html-extended --dev\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Mengacu pada "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/formatters/"}},[this._v("docs ↗️")]),this._v(", kita hanya diharuskan menambahkan argumen "),n("code",{pre:!0},[this._v("-f nameFormatter -o nameFile")]),this._v(" pada ESLint skript, seperti:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ eslint --ext .js . -f html-extended -o eslint-report.html\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Formatter ini kami terbitkan sebagai kode sumber terbuka yang dapat Anda lihat di "),n("a",{attrs:{href:"https://github.com/mazipan/eslint-formatter-html-extended"}},[this._v("Github repository ↗️")]),this._v(", silakan fork atau buat issue baru bila menemukan masalah.")])}]}}}}}}]);