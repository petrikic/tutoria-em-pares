<template>
  <v-card flat tile class="margin">
    <Nav />
    <img src="../../assets/SOSTUTORIA.png" 
    style="width: 100%; height: 100%; margin-top: 2%;"
    />
  </v-card>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style>

</style>
