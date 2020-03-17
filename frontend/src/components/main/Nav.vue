<template>
<v-toolbar
  dark
  color="primary"
  max-height="100px"
>
  <v-toolbar-title class="title-margin">Tutoria em Pares</v-toolbar-title>
  <v-spacer></v-spacer>

  <v-toolbar-items class="hidden-sm-and-down white--text">
    <v-btn text><router-link  to="/login">
    Login
    </router-link>
    </v-btn>

    <v-divider vertical></v-divider>
    <v-btn text ><router-link to="/register">
    Register
    </router-link>
    </v-btn>

    <v-divider vertical></v-divider>



    <v-divider vertical></v-divider>
  </v-toolbar-items>

  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>
