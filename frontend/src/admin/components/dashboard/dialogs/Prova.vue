<template>
    <div>
      
    </div>
</template>

<script>
import tutorias from "../../../../service/tutorias";
export default {
  name: "Prova",
  props: {
    msg: String,
    color: String,
    project: Array
  },
   data () {
      return {
        tutoria: {},
        dialog: false,
        includeFiles: true,
        fields: {},
        user: {},
        snackbar: false,
        cor: '',
        texto: '',
      }
    },
    methods: {
      enviarProva(project){
      this.tutoria = project
      project.iframe = this.fields.iframe
      tutorias.updateTutoria(project._id, project)
        .then(response => {
          response
          this.snackbar = true
          this.cor = 'green'
          this.texto = 'Prova elaborada com sucesso!!'
          this.fields = {}
        })
        .catch(err => {
          err
          this.snackbar = true
          this.cor = 'red'
          this.texto = 'Falha ao elabor a prova!!'
          this.fields = {}
        })
      },
  }
}
</script>

<style>

</style>
