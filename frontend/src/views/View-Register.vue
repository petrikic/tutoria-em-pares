<template>
  <v-app>
    <Nav />
    <Register />
  </v-app>
</template>

<script>
import Register from "../components/conta/Register";
import Nav from "../components/main/Nav";
export default {
  name: "View-Register",
  components: {
    Register,
    Nav
  }
};
</script>

