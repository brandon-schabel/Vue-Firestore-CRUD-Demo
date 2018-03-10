<template>
  <v-layout>
    <app-crud></app-crud>
  </v-layout>
</template>

<script>
  import Crud from '../components/Crud'

  export default {
    name: 'Home',
    components: {
      appCrud: Crud
    },
    data() {
      return {}
    }
  }
</script>
