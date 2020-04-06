<template>
  <v-app>
    <NavDrag />
    <DashPerfil />
  </v-app>
</template>

<script>
import NavDrag from "../../components/dashboard/NavDrag";
import DashPerfil from "../../components/dashboard/perfil/DashPerfil";
export default {
  name: "View-Perfil",
  components: {
    NavDrag,
    DashPerfil
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
