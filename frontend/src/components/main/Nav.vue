<template>
  <v-app-bar app clipped-left color="purple darken-4" dark height="80">
    <v-card-text class="d-flex flex-wrap flex-row justify-space-between wrap">
      <v-col col="4" class="d-flex align-center">
        <h1>
          <a :href="hrefLogo" class="white--text">LOGO TUTORIA</a>
        </h1>
      </v-col>
      <v-col col="4" class="mt-8">
        <v-text-field
          id="search"
          placeholder="Search"
          name="search"
          type="search"
          outlined
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col col="4" class="d-flex justify-end align-center">
        <v-btn class="purple darken-4 mr-3" xLarge text router to="/login">Login</v-btn>
        <v-btn text class="purple darken-4 mr-6" xLarge router to="/register">Register</v-btn>
      </v-col>
    </v-card-text>
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
</style>
