<template>
  <v-app>
    <NavDrag />
    <DashTutores />
  </v-app>
</template>

<script>
import NavDrag from "../components/dashboard/NavDrag";
import DashTutores from "../components/dashboard/tutores/DashTutor";
export default {
  name: "View-Tutoria",
  components: {
    NavDrag,
    DashTutores
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
