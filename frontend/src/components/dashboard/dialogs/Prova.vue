<template>
  <v-row justify="center">

      <v-btn
        :class="color"
        @click.stop="dialog = true"
      >
        <v-icon left>mdi-file-document</v-icon>{{msg}}
      </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-card>
          <v-card-items>
            <div v-if="msg === 'Elaborar Prova' ? true : false" class="py-5 px-5">
              <h1>Para fazer a prova precisara seguir estes passos</h1>
              <p>Aqui voce ira criar a sua prova para seguindo estes passos a seguir</p>
              <v-img src="../../../assets/thread-14228820-3195885822592301428.png" height="500px"></v-img>
              <p>Aqui voce ira pegar o link na pagina em questao e enviar para a gente.</p>
              <v-img src="../../../assets/google-forms-2.png" height="500px"></v-img>
              <v-divider></v-divider>
              <v-text-field
                label="Iframe"
                v-model="fields.iframe"
                class="mt-10"
                prepend-icon="mdi-file-document"
            ></v-text-field>
            <div class="d-flex justify-center">
            <v-btn
            color="purple black--text"
            dark
            xLarge
            @click="enviarProva(project)"
            >
            Enviar
            </v-btn>
            </div>
            </div>
            <div v-else>
            <iframe :src=link width="1000" height="1346" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            </div>
          </v-card-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "Prova",
  props: {
    msg: String,
    color: String,
    project: Array
  },
  mounted(){
   console.log()
  },
   data () {
      return {
        tutoria: {},
        dialog: false,
        includeFiles: true,
        fields: {},
        user: {},
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeVXqV5xuEKAzERR5KxaaCdlO7qc4iKPRxSnDiwvISiabAj-Q/viewform?embedded=true"
      }
    },
    methods: {
      enviarProva(project){
      this.tutoria = project
      project.iframe = this.fields.iframe
      tutorias.updateTutoria(project._id, project)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        })
      },
  }
}
</script>

<style>

</style>
