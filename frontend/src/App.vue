<template>
  <v-app>
    <div class="app">
      <router-view />
      <Footer />
    </div>
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
