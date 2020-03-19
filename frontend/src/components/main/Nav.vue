<template>
 <v-card tile>
    <v-app-bar
      dark
      height=80
      fixed
      color="purple darken-4"
    >
    <h1><a :href="hrefLogo" class="white--text">LOGO TUTORIA</a> </h1>
    <v-spacer></v-spacer>
    <v-flex
    row
    >
    <v-col>
      <v-text-field
      id="search"
      placeholder="Search"
      name="search"
      type="search"
      outlined
      class="mt-6"
      >
      </v-text-field>
    </v-col>
    <v-col col=6>
     <v-btn-icon>
        <v-icon class="mt-8" xLarge>mdi-magnify</v-icon>
      </v-btn-icon>
    </v-col>
    </v-flex>
    <v-btn class="purple darken-4 mr-3" large height=100% text>
    <router-link to='/login' class="white--text">
    Login
    </router-link>
    </v-btn>
    <v-btn text class="purple darken-4 mr-6" height=100% large>
    <router-link to='/register' class="white--text">
    Register
    </router-link>
    </v-btn>
  </v-app-bar>
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
