<template>
  <v-app>
    <Header />
    <Content />
    <Rank />
  </v-app>
</template>




<script>
import Header from "../components/main/Header";
import Content from "../components/home/Content";
import Rank from "../components/home/Rank";
export default {
  name: "View-Home",
  components: {
    Header,
    Content,
    Rank
  },
  data: () => ({})
};
</script>
<style>
</style>
