<template>
  <v-container fill-height>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
            <span>{{usuarios}}</span>
          <v-btn text color="white"  @click="snackbar= false">Close</v-btn>
        </v-snackbar>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-toolbar-title class="mx-4 blue--text">Register</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form>
          <v-text-field
            v-model="fields.nome"
            id="nome"
            label="Nome"
            name="nome"
            type="nome"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="fields.email"
            type="email"
            id="email"
            label="Email"
            :rules="emailRules"
            name="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="fields.password"
            id="password"
            label="Password"
            name="password"
            type="password"
            :rules="passwordRules"
            required
            @keypress.enter="enviar(), clearMemory()"
          ></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-start blue--text">
          <v-btn color="primary" class="white--text" @click="enviar(), clearMemory()">Cadastrar</v-btn>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center blue--text">
          <v-btn text class="body-1 blue--text" router to="/login">Tenho uma conta</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import tutorias from "../../service/tutorias";
export default {
  name: "Register",
  data() {
    return {
      fields: {},
      stats: "",
      drawer: null,
      color: "",
      usuarios: '',
      snackbar: false,
      emailRules: [
        v => !!v || "E-mail e requerido",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      nameRules: [
        v => !!v || "Nome e requerido",
        v => (v && v.length <= 15) || "Name must be less than 15 characters"
      ],
      passwordRules: [
        v => !!v || "Senha e requerido",
        v => (v && v.length <= 15) || "Password must be less than 15 characters"
      ]
    };
  },
  methods: {
    enviar() {
      tutorias.registrar(this.fields)
        .then(response => {
          response
          this.snackbar = true;
          this.color = "green";
          setTimeout(() => {
            this.popup = false;
          }, 4000);
          return this.usuarios = "Usuario cadastrado com sucesso";
        })
        .catch(err => {
          err
          if (err.response.status === 403) {
            this.snackbar = true;
            this.color = "red";
            setTimeout(() => {
              this.popup = false;
            }, 4000);
            return this.usuarios = err.response.data;
          }
        });
    },
    clearMemory: function() {
      this.fields = {}
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
