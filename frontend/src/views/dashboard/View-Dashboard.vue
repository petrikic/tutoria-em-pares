<template>
  <v-app>
    <NavDrag /> 
    <Dashboard />
  </v-app>
</template>

<script>
import NavDrag from "../../components/dashboard/NavDrag";
import Dashboard from "../../components/dashboard/Dashboard";
export default {
  name: "View-Feed",
  components: {
    NavDrag,
    Dashboard
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
