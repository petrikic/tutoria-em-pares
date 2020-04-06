<template>
  <v-app>
    <Nav/>
    <v-content>
    <Content />
    </v-content>
  </v-app>
</template>


<script>
import Nav from '../../components/main/Nav'
import Content from "../../components/main/Content";
export default {
  name: "View-Home",
  components: {
    Nav,
    Content,
  },
  data: () => ({})
};
</script>
<style>
</style>
