<template>
  <v-btn class="green black--text" text @click="doTutoriaUpdate(tutoria)">Fazer tutoria</v-btn>
</template>
<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "botaoFazerTutoria",
  props: {
    tutoria: {
      type: Object
    }
  },
  methods: {
      doTutoriaUpdate(tutoria) {
      tutoria.status = "Agendado";
      tutoria.tutor = this.user._id
      tutorias
        .updateTutoria(tutoria._id, tutoria)
        .then(response => {
          response;
          this.$store.getters.snackbarRes
          this.$store.state.texto = "Tutoria agendada com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$store.state.texto = "Falha no agendamento da tutoria!";
        });
    }
  }
};
</script>