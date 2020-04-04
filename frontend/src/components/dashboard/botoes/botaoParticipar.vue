<template>
  <v-btn class="green black--text" text @click="ParticiparUpdate(tutoria)">TORNAR-SE ALUNO</v-btn>
</template>
<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "botaoParticipar",
  props: {
    tutoria: {
        type: Object        
    },
  },
  methods: {
    ParticiparUpdate(tutoria) {    
      tutoria.status = "Aguardando";
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