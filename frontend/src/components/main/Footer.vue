<template>
  <v-card>
      <v-footer
        absolute
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
  </v-card>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>
