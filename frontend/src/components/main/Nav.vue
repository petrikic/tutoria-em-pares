<template>
<v-toolbar
    color="purple"
    dark
  >
    <v-toolbar-title class="title-margin">Tutoria em Pares</v-toolbar-title>

    <v-divider
      class="mx-4 subtitle-margin"
      vertical
    ></v-divider>

    <h4>My Home</h4>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text><router-link class="menu" to="/">
      Home
      </router-link>
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text><router-link class="menu" to="/About">
      About
      </router-link>
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style>
  .menu {
    text-decoration: none;
    color:white
  }
  .title-margin {
    margin-right: 15px;
  }
  .subtitle-margin{
    margin: 15px;
  }
</style>