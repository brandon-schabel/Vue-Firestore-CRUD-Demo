<template>
  <v-container>
    <v-btn @click.prevent="createNote()">Create</v-btn>
    <v-btn @click.prevent="getNotes()">Get</v-btn>
  </v-container>
</template>

<script>
import { db } from '../main.js'

export default {
  created: function () {
    console.log(db)
  },
  data () {
    return {
    }
  },
  methods: {
    createNote () {
      db.collection('users').add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      }).then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        console.error('Error adding document: ', error)
      })
    },
    getNotes () {
      db.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
    }
  }
}
</script>
