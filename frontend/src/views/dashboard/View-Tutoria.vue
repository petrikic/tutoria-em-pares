<template>
  <v-app>
    <NavDrag />
    <DashTutoria />
  </v-app>
</template>

<script>
import NavDrag from "../../components/dashboard/NavDrag";
import DashTutoria from "../../components/dashboard/tutoria/DashTutoria";
export default {
  name: "View-Tutoria",
  components: {
    NavDrag,
    DashTutoria
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
