<template>
    <div>
       <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-btn text >
        <v-icon>mdi-school</v-icon>
        <v-toolbar-title>Tutoria</v-toolbar-title>
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>
