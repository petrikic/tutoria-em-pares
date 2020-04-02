<template>
  <div class="altura">
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    <h1 class="d-flex justify-center subheading grey--text">Envie sua sugestao</h1>
    <v-container>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-text-field
            id="email"
            label="Email"
            name="email"
            type="email"
            outlined
            v-model="fields.email"
          ></v-text-field>
          <v-text-field
            id="assunto"
            label="Assunto"
            name="assunto"
            type="text"
            outlined
            v-model="fields.assunto"
          ></v-text-field>
          <quill-editor
            id="content"
            ref="myQuillEditor"
            type="text"
            v-model="fields.content"
            :options="editorOption"
          />
          <v-list class="d-flex flex-row">
            <v-btn
              @click="sendEmail()"
              class="mx-5"
              medium
              color="blue white--text "
            >Enviar</v-btn>
            <v-btn @click="descartar()" medium color="blue  white--text">Descartar</v-btn>
            <v-btn text color="grey">
              <v-icon size="30px">mdi-paperclip</v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import tutorias from "../../../service/tutorias";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "DashSugestao",
  components: {
    quillEditor
  },
  data() {
    return {
      menu: false,
      fields: {},
      editorOption: {},
      emailRules: [
        v => !!v || "E-mail e requirido",
        v => /.+@.+\..+/.test(v) || "E-mail Precisa ser valido"
      ]
    };
  },
  methods: {
    descartar() {
      this.fields = {}
    },
    sendEmail() {
      tutorias
        .sendEmail(this.fields)
        .then(response => {
          response
          this.$store.getters.snackbarRes
          this.$store.state.texto = "Email enviado com sucesso!"
          this.fields = {}
        })
        .catch(err => {
          this.$store.getters.snackbarErr
          this.$store.state.texto = "Falha ao enviar email";
          this.fields = {}
          err
        });
    }
  }
};
</script>

<style>
</style>
