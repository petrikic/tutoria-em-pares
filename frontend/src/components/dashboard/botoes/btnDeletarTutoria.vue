<template>
  <div>
    <v-btn fab text @click="dialog = !dialog" class="error">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-row justify="center" v-if="dialog === true">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">Voce tem certeza que deseja deletar esta tutoria?</v-card-title>
          <v-card-text>
            Caso dejese deletar esta tutoria, esteje ciente que estes dados serao apagados da base
            dados da nossa plataforma, e voce nao podera consultar novamente esta tutoria!!.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">Discordar</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false, removerDashboard()">Aceito</v-btn>
          </v-card-actions>
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
      dialog: false
    };
  },
  props: {
    fields: {}
  },
  methods: {
    
    removerDashboard() {  

      tutorias
        .removerTutoria(this.fields._id)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Tutoria removida com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr;
          this.$.store.stete.texto = "Falha ao remover tutoria!";
        });
    }
  }
};
</script>