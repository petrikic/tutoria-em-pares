<template>
  <v-row justify="center">

      <v-btn
        color="red black--text"
        dark
        @click.stop="dialog = true"
      >
        Fazer Prova
      </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="480"
    >
      <v-card>
        <v-card-title class="headline">"Voce tem certeza que deseja finalizar a tutoria?"</v-card-title>

        <v-card-text>
        Com a finalizacao da tutoria voce tera que resolver uma prova dissertiva
                  com 10 questoes elaboradas pelo seu tutor.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"

            @click="dialog = false"
          >
            Discordar
          </v-btn>

          <Prova msg="Concordar" color="green" :project = project />

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import tutorias from "../../../service/tutorias";
import Prova from './Prova'
  export default {
    name: "FinalizarTutoria",
    components: {
      Prova
    },
    props: ['project'],
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      doTutoriaUpdate(project) {
      console.log(project)
    // tutorias.updateTutoria()
    //   .then(response => {
    //     console.log(response)
    //     this.snackbar = true;
    //     this.color = "green";
    //     this.texto = "Tutoria agendada com sucesso!";
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.snackbar = true;
    //     this.color = "red";
    //     this.texto = "Falha no agendamento da tutoria!";
    //   })
    }
    },
  }
</script>

<style>

</style>
