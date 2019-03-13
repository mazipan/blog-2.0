const firebase = require('firebase/app')
require('firebase/database')

export function initFirebase () {
  var config = {
    apiKey: process.env.FIREBASE_API_KEY || '',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
    databaseURL: process.env.FIREBASE_DATABASE_URL || '',
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || ''
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  return firebase
}

export function getClapsUrl (slug) {
  return `${slug}/claps`
}

export function getHitsUrl (slug) {
  return `${slug}/hits`
}

export function getClapsRefs (firebaseInstance, slug) {
  const REF_URL = getClapsUrl(slug)
  return firebaseInstance.database().ref(REF_URL)
}

export function getHitsRefs (firebaseInstance, slug) {
  const REF_URL = getHitsUrl(slug)
  return firebaseInstance.database().ref(REF_URL)
}

export function subscribeHitsData (firebaseInstance, slug, callback) {
  const hitsRefs = getHitsRefs(firebaseInstance, slug)
  hitsRefs.on('value', callback)
}

export function subscribeClapsData (firebaseInstance, slug, callback) {
  const clapsRefs = getClapsRefs(firebaseInstance, slug)
  clapsRefs.on('value', callback)
}

export function getHitsData (firebaseInstance, slug, callback) {
  const hitsRefs = getHitsRefs(firebaseInstance, slug)
  hitsRefs.once('value', callback)
}

export function getClapsData (firebaseInstance, slug, callback) {
  const clapsRefs = getClapsRefs(firebaseInstance, slug)
  clapsRefs.once('value', callback)
}

export function setHitsData (firebaseInstance, slug, value) {
  const hitsRefs = getHitsRefs(firebaseInstance, slug)
  hitsRefs.set(value)
}

export function setClapsData (firebaseInstance, slug, value) {
  const clapsRefs = getClapsRefs(firebaseInstance, slug)
  clapsRefs.set(value)
}

export function createNewRef (firebaseInstance, newRef) {
  firebaseInstance.database().ref().update(newRef)
}
