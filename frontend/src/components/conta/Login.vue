<template>
  <v-container fill-height>
    <v-layout class="d-flex flex-wrap justify-space-around align-center">
      <v-flex xs12 sm12 md6>
        <carrossel />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8 md4>
        <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
            <span>{{usuarios}}</span>
          <v-btn text color="white" @click="snackbar= false">Close</v-btn>
        </v-snackbar>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-toolbar-title class="mx-4 blue--text">Tutoria logo</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-form>
          <v-text-field
            id="email"
            label="Email"
            name="email"
            type="email"
            :rules="emailRules"
            v-model="fields.email"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            type="password"
            :rules="passwordRules"
            v-model="fields.password"
            @keypress.enter="enviar(), clearMemory()"
          ></v-text-field>
          <v-card-actions class="d-flex justify-start">
            <v-btn color="blue" class="white--text" @click="enviar(), clearMemory()">Acessar</v-btn>
          </v-card-actions>
        </v-form>
        <v-container>
          <v-card-actions class="d-flex justify-center">
            <v-btn text class="body-1 blue--text" router to="/register">Nao tenho conta</v-btn>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center">
            <v-btn text class="body-1 blue--text" router to="/forgot_password"
            >Esqueci minha senha</v-btn>
          </v-card-actions>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import tutorias from "../../service/tutorias";
import Carrossel from "../Carrossel.vue";
export default {
  name: "login",
  components: {
    Carrossel
  },
  data() {
    return {
      fields: {
        email: "",
        password: ""
      },
      stats: "",
      drawer: null,
      usuarios: "",
      snackbar: false,
      color: "",
      emailRules: [
        v => !!v || "E-mail e requerido",
        v => /.+@.+\..+/.test(v) || "E-mail tem que ser valido"
      ],
      passwordRules: [v => !!v || "Senha e requerido"]
    };
  },
  methods: {
    enviar() {
          tutorias.logar(this.fields)
            .then(response => {
          let is_admin = response.data.user.is_admin;
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", response.data.token);
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              if (is_admin == 1) {
                this.$router.push("admin");
              } else {
                this.$router.push("dashboard");
              }
            }
          }
        })
        .catch(err => {
            this.snackbar = true;
            this.color = "red";
            err
            return this.usuarios = err
        })
    },
    clearMemory() {
      this.fields = {}
    }
  }
};
</script>

<style>
</style>
