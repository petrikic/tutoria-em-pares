<template>
  <v-app>
    <Header />
    <Content />
  </v-app>
</template>




<script>
import Header from "../components/main/Header";
import Content from "../components/home/Content";
export default {
  name: "View-Home",
  components: {
    Header,
    Content,
  },
  data: () => ({})
};
</script>
<style>
</style>
