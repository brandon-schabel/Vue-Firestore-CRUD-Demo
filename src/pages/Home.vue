<template>
  <v-layou>
    <app-crud></app-crud>
  </v-layou>
</template>

<script>
import Crud from '@/components/Crud'

export default {
  name: 'Home',
  components: {
    appCrud: Crud
  },
  data () {
    return {
    }
  }
}
</script>
