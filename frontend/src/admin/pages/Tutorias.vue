<template>
  <v-app>
    <NavDrag />
    <Dashboard />
  </v-app>
</template>

<script>
import Dashboard from '../components/dashboard/Dashboard'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    Dashboard,
    NavDrag,
  }
}
</script>

<style>

</style>