<template>
  <v-app>
    <NavDrag />
    <DashTutor />
  </v-app>
</template>

<script>
import DashTutor from '../components/dashboard/tutores/DashTutor'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    DashTutor,
    NavDrag,
  }
}
</script>

<style>

</style>