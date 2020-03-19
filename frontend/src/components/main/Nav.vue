<template>
 <v-card tile>
    <v-toolbar
      dark
      height=80
      fixed
      color="purple darken-4"
    >
    <v-card-text class="d-flex flex-row justify-space-between">
      <v-col col=4 class="d-flex align-center">
        <h1><a :href="hrefLogo" class="white--text">LOGO TUTORIA</a> </h1>
      </v-col>
    <v-col col=4 class="d-flex mt-8">
      <v-text-field
      id="search"
      placeholder="Search"
      name="search"
      type="search"
      outlined
      append-icon="mdi-magnify"
      >
      </v-text-field>
    </v-col>
    <v-col col=4 class="d-flex justify-end align-center">
    <router-link to='/login' class="white--text">
    <v-btn class="purple darken-4 mr-3" xLarge  text>
    Login
    </v-btn>
    </router-link>
    <router-link to='/register' class="white--text">
    <v-btn text class="purple darken-4 mr-6" xLarge>
    Register
    </v-btn>
    </router-link>
    </v-col>
    </v-card-text>
  </v-toolbar>
</v-card>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
      hrefLogo: '/',
    }
  }
}
</script>

<style>

</style>
