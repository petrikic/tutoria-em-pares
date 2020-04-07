<template>
  <v-btn class="green black--text" slot="activator" text @click="doTutoriaUpdate(tutoria)">Fazer tutoria</v-btn>
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
      const user = JSON.parse(localStorage.getItem('user'))
      tutoria.status = "Agendado";
      tutoria.tutor = user._id
      tutorias
        .updateTutoria(tutoria._id, tutoria)
        .then(response => {
          response;
          console.log(response)
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