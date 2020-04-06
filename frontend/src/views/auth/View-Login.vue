<template>
  <v-app>
    <Nav />
    <Login />
  </v-app>
</template>

<script>
import Login from "../../components/auth/Login";
import Nav from "../../components/main/Nav";
export default {
  name: "View-Login",
  components: {
    Login,
    Nav
  }
};
</script>
