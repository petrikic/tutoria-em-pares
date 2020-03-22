<template>
  <v-card flat tile>
    <Nav />
    <v-img src="../../assets/Banner-site-_-programacao3-01-4.png" aspect-ratio="4" class="blur"></v-img>
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
/* .blur {
  filter: blur(8px);
} */
</style>
