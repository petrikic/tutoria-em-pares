<template>
  <v-app>
    <NavDrag />
    <DashCompleto />
  </v-app>
</template>

<script>
import NavDrag from "../components/dashboard/NavDrag";
import DashCompleto from "../components/dashboard/completo/DashCompleto";
export default {
  name: "View-Completo",
  components: {
    NavDrag,
    DashCompleto
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
