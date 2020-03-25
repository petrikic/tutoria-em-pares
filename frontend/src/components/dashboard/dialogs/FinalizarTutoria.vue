<template>
  <v-row justify="center">
    <v-btn
      color="green black--text"
      dark
      @click.stop="dialog = true"
    >
      Finalizar Tutoria
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="480"
    >
      <v-card>
        <v-card-title class="headline">Voce tem certeza que deseja finalizar a tutoria?</v-card-title>

        <v-card-text>
        Com a finalizacao da tutoria voce tera que resolver uma prova dissertiva
        com 10 questoes elaboradas pelo seu tutor.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Discordar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Concordar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: "FinalizarTutoria",
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style>

</style>
