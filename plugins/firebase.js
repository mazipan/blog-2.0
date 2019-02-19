import Vue from 'vue'
const firebase = require('firebase/app')
require('firebase/database')

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'mazipan-blog.firebaseapp.com',
  databaseURL: 'https://mazipan-blog.firebaseio.com',
  projectId: 'mazipan-blog',
  storageBucket: '',
  messagingSenderId: '331001770357'
}

firebase.initializeApp(config)
Vue.prototype.$firebase = firebase
