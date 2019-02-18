import Vue from 'vue'
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'

// polyfill for intersection-observer
require('intersection-observer')

Vue.use(VueTinyLazyloadImg)
