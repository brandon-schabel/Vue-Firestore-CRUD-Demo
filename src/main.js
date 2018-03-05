// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
require('firebase/firestore')

Vue.use(Vuetify)
Vue.use(VueFirestore)

Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyC61qoH8POsOd51vjB5LyFL6tiefOnRcGY',
  authDomain: 'react-firebase-starter-c28c7.firebaseapp.com',
  databaseURL: 'https://react-firebase-starter-c28c7.firebaseio.com',
  projectId: 'react-firebase-starter-c28c7',
  storageBucket: 'react-firebase-starter-c28c7.appspot.com',
  messagingSenderId: '271307299986'
}
var firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.firestore()
console.log(db)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
