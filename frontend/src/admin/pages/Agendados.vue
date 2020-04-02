<template>
  <v-app>
    <NavDrag />
    <DashTutoria />
  </v-app>
</template>

<script>
import DashTutoria from '../components/dashboard/tutoria/DashTutoria'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    DashTutoria,
    NavDrag,
  }
}
</script>

<style>

</style>