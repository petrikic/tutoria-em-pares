<template>
  <v-app>
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/main/Footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>
<style>
a{
  text-decoration: none;
}
</style>
