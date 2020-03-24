<template>
  <v-container fill-height>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-toolbar v-if="popup" :class="color" height="30">
          <v-toolbar-title class="mx-auto black--text">{{usuarios}}</v-toolbar-title>
        </v-toolbar>
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
          ></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-start blue--text">
          <v-btn color="primary" class="white--text" @click="enviar(), clearMemory()">Cadastrar</v-btn>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center blue--text">
          <v-btn text class="body-1 blue--text">Tenho uma conta</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import axios from "axios";
import tutorias from "../../service/tutorias";
export default {
  name: "Register",
  data() {
    return {
      fields: {},
      stats: "",
      drawer: null,
      usuarios: "",
      popup: false,
      color: "",
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
          console.log(response.data);
          this.popup = true;
          this.color = "green";
          setTimeout(() => {
            this.popup = false;
          }, 4000);
          return this.usuarios = "Usuario cadastrado com sucesso";
        })
        .catch(err => {
          console.log(err.response.status);
          if (err.response.status === 403) {
            this.popup = true;
            this.color = "red";
            setTimeout(() => {
              this.popup = false;
            }, 4000);
            return this.usuarios = err.response.data;
          }
        });
    },
    clearMemory: function() {
      document.getElementById("nome").value = this.stats;
      document.getElementById("email").value = this.stats;
      document.getElementById("password").value = this.stats;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
