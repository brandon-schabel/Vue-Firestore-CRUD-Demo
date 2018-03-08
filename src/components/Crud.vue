<template>
  <v-container>
    <v-layout>
      <v-btn @click.prevent="createNote()">Create</v-btn>
      <v-btn @click.prevent="getNotes()">Get</v-btn>
    </v-layout>
    <v-layout>
      <div v-for="(note, key) in notes" :key="key">{{note.content}}</div>
    </v-layout>
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
      notes: []
    }
  },
  methods: {
    createNote () {
      db.collection('notes').add({
        content: 'This is a test note',
        userID: '3549de0t004380rd',
        date: '2017Feb27'
      }).then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        console.error('Error adding document: ', error)
      })
    },
    getNotes () {
      let context = this
      db.collection('notes').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
          context.notes.push(doc.data())
        })
      })
      console.log(context.notes)
    }
  }
}
</script>
