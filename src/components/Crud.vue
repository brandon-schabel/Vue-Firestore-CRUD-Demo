<template>
  <v-container>
    <v-layout row>
      <v-flex xs8>
        <v-text-field
          name="input-7-1"
          label="Note"
          multi-line
          v-model="note"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn @click.prevent="createNote()">Create</v-btn>
      <v-btn @click.prevent="getNotes()">Get</v-btn>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card v-for="(note, key) in notes" :key="key">{{note.content}} {{note}}</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {db} from '../main.js'

  export default {
    created: function () {
      console.log(db)
    },
    data() {
      return {
        notes: [],
        note: null
      }
    },
    methods: {
      createNote() {
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
      getNotes() {
        let context = this
        db.collection('notes').get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
            // context.notes.push(doc.data())
            let noteDoc = {
              content: doc.data().content,
              userID: doc.data().userID,
              data: doc.data().date,
              key: doc.id
            }
            context.notes.push(noteDoc)
          })
        })
        console.log(context.notes)
      }
    }
  }
</script>
