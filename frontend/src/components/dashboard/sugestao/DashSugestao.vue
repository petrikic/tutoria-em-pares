<template>
  <div class="altura">
    <h1 class="d-flex justify-center subheading grey--text">Envie sua sugestao</h1>
    <v-container>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-text-field
            id="email"
            label="Email"
            name="email"
            type="email"
            :rules="emailRules"
            v-model="fields.email"
          ></v-text-field>
          <v-text-field
            id="assunto"
            label="Assunto"
            name="assunto"
            type="text"
            v-model="fields.assunto"
          ></v-text-field>
          <quill-editor
            ref="myQuillEditor"
            id="content"
            type="text"
            v-model="fields.content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          />
          <v-list class="d-flex flex-row">
            <v-btn @click="sendEmail()" class="mx-5" flat medium color="blue white--text">Enviar</v-btn>
            <v-btn @click="descartar()" flat medium color="white black--text">Descartar</v-btn>
            <v-btn text flat color="grey" @click="loadingFile(file)">
              <v-icon size="30px">mdi-paperclip</v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
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
      document.getElementById("content").value = this.stats;
    },
    sendEmail() {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("jwt")}`;
      axios
        .post("http://localhost:3000/email", this.fields)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style>
</style>
