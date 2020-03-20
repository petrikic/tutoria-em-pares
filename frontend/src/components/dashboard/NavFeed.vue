<template>
  <v-app-bar
      app
      clipped-left
      color="purple darken-4"
      dark
      height=80
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
      <v-icon
        xLarge
        color="white"
        left
      >
        mdi-school
      </v-icon>

      <v-toolbar-title class="headline white--text">
          Tutoria
      </v-toolbar-title>
      <v-spacer />
      <v-row>
      <v-col col=6 class="d-flex justify-center align-center white--text">
        <v-text-field
        id="search"
        placeholder="Search"
        name="search"
        type="search"
        outlined
        class="mt-6"
        append-icon="mdi-magnify"
        />
      </v-col>
      <v-col col=6>

      </v-col>
      </v-row>
    </v-app-bar>
</template>

<script>
export default {
  name: 'NavFeed',
  props: {
    drawer: null,
  }
}
</script>

<style>

</style>
