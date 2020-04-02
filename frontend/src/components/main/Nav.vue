<template>
  <v-app-bar app color="purple darken-4" dark height="80">
      <a href="/"><v-icon xLarge color="white" left >mdi-school</v-icon></a>
        <v-toolbar-title class="headline white--text hidden-md-and-down">
           <img src="../../assets/logosos.png" alt="logoTutoria"  style="width: 50%; height: 80px;">
        </v-toolbar-title>
      <v-spacer />
      <v-row class="d-flex justify-end">
        <div class="mx-4">
        <v-btn class="purple darken-4 " text xLarge  router to="/login">Login</v-btn>
        </div>
        <div class="mx-4">
        <v-btn  class="purple darken-4 " text xLarge router to="/register">Register</v-btn>
        </div>
      </v-row>
    </v-app-bar>
</template>

<script>
export default {

  name: "Nav",
  data() {
    return {
      hrefLogo: "/"
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
