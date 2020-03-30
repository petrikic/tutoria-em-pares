<template>
  <v-row justify="center">
    <v-snackbar v-model="snackbar" :timeout="4000" top :color="cor">
      <span>{{texto}}</span>
      <v-btn text color="white" @click="snackbar= false">Close</v-btn>
    </v-snackbar>

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
            @click="enviarProva(project), dialog = false"
            >
            Enviar
            </v-btn>
            </div>
            </div>
            <div v-else>
              <div v-if="project.iframe === undefined ? true : false"
              class="py-12 px-12"
              >
              <v-card-title class="display-1 d-flex justify-center">Prova nao Elaborada!!</v-card-title>
                <p class="headline">Ola parece que o tutor ainda nao elaborou a sua prova
                  entre em contanto com ele para realizar a sua prova.
                  para que seja feito o relatorio e no final do semestre
                  obtenha as cargas horarias.
                </p>
              </div>
              <div v-else>
                <iframe :src=project.iframe width="1000" height="1346" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
              </div>
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
