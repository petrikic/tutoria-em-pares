<template>
  <div>
    <v-btn fab text @click="dialog = !dialog" class="green">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-row justify="center" v-if="dialog === true">
      <v-dialog v-model="dialog" max-width="700">
        <v-card>
          <v-form class="px-5 py-8" ref="form">
            <h1 class="d-flex justify-center align-center">Alterar tutoria</h1>
            <v-text-field
              v-model="fields.institution"
              :value="fields.institution"
              label="Bloco"
              prepend-icon="mdi-castle"
            ></v-text-field>
            <v-text-field
              v-model="fields.discipline"
              :value="fields.discipline"
              label="Disciplina"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-textarea
              v-model="fields.content"
              :value="fields.content"
              label="Duvida"
              prepend-icon="mdi-table-edit"
            ></v-textarea>
            <div v-if="fields.oferecida">
              <v-card-title>Data da Tutoria</v-card-title>
              <v-layout class="mb-5" wrap>
                <v-flex xs8 sm6>
                  <v-date-picker light color="grey" v-model="date.day" flat class="mr-3 pb-4"></v-date-picker>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs8 sm6>
                  <v-time-picker light color="grey" v-model="date.time" flat></v-time-picker>
                </v-flex>
              </v-layout>
            </div>
            <v-btn
              class="success mx-0 mt-3"
              text
              @click="dialog = false, atualizarDashoboard()"
            >Alterar</v-btn>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import tutorias from "../../../service/tutorias";
export default {
  data() {
    return {
      dialog: false,
      date: {}
    };
  },
  props: {
    fields: {}
  },

  methods: {
    dateFormate() {
      const hours = this.date.time.match(/^(\d+)/)[1];
      const minutes = this.date.time.match(/:(\d+)/)[1];
      const year = this.date.day.match(/^(\d+)/)[1];
      const month = this.date.day.match(/-(\d+)/)[1];
      const day = this.date.day.match(/(\d+)(?!.*\d)/)[1];

      const dateVar = new Date(year, month - 1, day, hours, minutes, "00");
      this.fields.data = dateVar;
    },
    atualizarDashoboard() {
      if (this.fields.oferecida) this.dateFormate();

      tutorias
        .updateTutoria(this.fields._id, this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Tutoria alterado com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr;
          this.$store.state.texto = "Falha ao alterar tutoria!";
        });
    }
  }
};
</script>>