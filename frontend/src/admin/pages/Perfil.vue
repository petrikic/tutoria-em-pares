<template>
  <v-app>
    <NavDrag />
    <DashPerfil />
  </v-app>
</template>

<script>
import DashPerfil from '../components/dashboard/perfil/DashPerfil'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    DashPerfil,
    NavDrag,
  }
}
</script>

<style>

</style>