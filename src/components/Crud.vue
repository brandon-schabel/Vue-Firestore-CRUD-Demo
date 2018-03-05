<template>
  <v-container>

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
  }
}
</script>
