<template>
  <v-btn class="green black--text" text @click="tornarAluno(tutoria)">TORNAR-SE ALUNO</v-btn>
</template>
<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "botaoTornarAluno",
  props: {
    tutoria: {
        type: Object        
    },
  },
  methods: {
    tornarAluno(tutoria) {       
      tutorias
        .updateTutoriaOferecida(tutoria._id, tutoria)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Incluído à Tutoria com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr;
          this.$store.state.texto = "Falha na Inclusão à Tutoria!";
        });
    }
  }
};
</script>