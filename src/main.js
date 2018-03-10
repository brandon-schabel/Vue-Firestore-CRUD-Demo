// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import config from './config'

require('firebase/firestore')

Vue.use(Vuetify, {theme: {
  primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
}})
Vue.use(VueFirestore)

Vue.config.productionTip = false

var firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.firestore()
console.log(db)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
