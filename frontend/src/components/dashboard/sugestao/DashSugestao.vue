<template>
  <div class="altura">
    <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
      <span>{{texto}}</span>
      <v-btn text color="white" @click="snackbar= false">Close</v-btn>
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
            :rules="emailRules"
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
              @click="sendEmail(), descartar()"
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
      stats: "",
      snackbar: false,
      color: "",
      texto: "",
      emailRules: [
        v => !!v || "E-mail e requirido",
        v => /.+@.+\..+/.test(v) || "E-mail Precisa ser valido"
      ]
    };
  },
  methods: {
    descartar() {
      document.getElementById("email").value = this.stats;
      document.getElementById("assunto").value = this.stats;
    },
    sendEmail() {
      tutorias
        .sendEmail(this.fields)
        .then(response => {
          response
          this.snackbar = true;
          this.texto = "Email enviado com sucesso";
          this.color = "green";
        })
        .catch(err => {
          this.snackbar = true;
          this.texto = "Falha ao enviar email";
          this.color = "red";
          err
        });
    }
  }
};
</script>

<style>
</style>
