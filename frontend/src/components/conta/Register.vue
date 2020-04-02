<template>
  <v-container fill-height>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
          <span>{{$store.state.texto}}</span>
          <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
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
            required
          ></v-text-field>
          <v-text-field
            v-model="fields.email"
            type="email"
            id="email"
            label="Email"
            name="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="fields.password"
            id="password"
            label="Password"
            name="password"
            type="password"
            required
            @keypress.enter="enviar()"
          ></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-start blue--text">
          <v-btn color="primary" class="white--text" @click="enviar()">Cadastrar</v-btn>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center blue--text">
          <a class="body-1 blue--text"  href="/login">Tenho uma conta</a>
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
      drawer: null
    };
  },
  methods: {
    enviar() {
      tutorias
        .registrar(this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Usuario cadastrado com sucesso!";
          this.fields = {};
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$store.state.texto = err
          this.fields = {}
        });
    },
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
