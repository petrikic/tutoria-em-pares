<template>
  <v-app>
    <NavDrag />
    <Admin />
  </v-app>
</template>

<script>
import Admin from '../components/Admin'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    Admin,
    NavDrag,
  }
}
</script>

<style>

</style>