<template>
  <v-app>
    <NavDrag />
    <DashCompleto />
  </v-app>
</template>

<script>
import DashCompleto from '../components/dashboard/completo/DashCompleto'
import NavDrag from '../components/dashboard/NavDrag'
export default {
  components: {
    DashCompleto,
    NavDrag,
  }
}
</script>

<style>

</style>