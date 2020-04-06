<template>
  <v-content>
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    <h1 class="d-flex justify-center subheading grey--text">Envie sua sugestao</h1>
    <v-container>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card raised>
          <input
            class="caixa pa-4"
            id="email"
            placeholder="Email"
            name="email"
            type="email"
            v-model="fields.email"
          />
          <v-divider></v-divider>
          <input
            append-icon="mdi-email"
            class="caixa pa-4"
            id="assunto"
            placeholder="Assunto"
            type="text"
            outlined
            v-model="fields.assunto"
          />
          <quill-editor
            class="quill"
            id="content"
            ref="myQuillEditor"
            type="text"
            v-model="fields.content"
            :options="editorOption"
          />
          <v-list class="grey lighten-2 mt-10">
            <v-btn @click="sendEmail()" class="mx-5" medium color="blue white--text ">Enviar</v-btn>
            <v-btn @click="descartar()" medium color="blue  white--text">Descartar</v-btn>
            <v-btn text fab color="white">
              <v-icon size="30px">mdi-paperclip</v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
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
      editorOption: {}
    };
  },
  methods: {
    descartar() {
      this.fields = {};
    },
    sendEmail() {
      tutorias
        .sendEmail(this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Email enviado com sucesso!";
          this.fields = {};
        })
        .catch(err => {
          this.$store.getters.snackbarErr;
          this.$store.state.texto = "Falha ao enviar email";
          this.fields = {};
          err;
        });
    }
  }
};
</script>

<style>
.altura {
  margin-top: 5%;
}
.caixa {
  width: 100%;
  height: 60px;
}
.quill {
  height: 500px;
}
.margin {
  margin-top: -1;
}
</style>
