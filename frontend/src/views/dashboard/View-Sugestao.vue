<template>
  <v-app>
    <NavDrag />
    <DashSugestao />
  </v-app>
</template>

<script>
import NavDrag from "../../components/dashboard/NavDrag";
import DashSugestao from "../../components/dashboard/sugestao/DashSugestao";
export default {
  name: "View-Sugestao",
  components: {
    NavDrag,
    DashSugestao
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
