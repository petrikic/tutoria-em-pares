<template>
  <v-app>
    <v-container fill-height>
      <v-layout class="d-flex flex-wrap justify-space-around align-center">
        <v-flex xs12 sm12 md6>
          <carrossel />
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm8 md4>
          <v-toolbar v-if="popup" :class="color" height="30">
            <v-toolbar-title class="mx-auto black--text">{{usuarios}}</v-toolbar-title>
          </v-toolbar>
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
            ></v-text-field>
            <v-container>
              <v-btn color="blue" class="white--text" @click="enviar(), clearMemory()">Acessar</v-btn>
            </v-container>
          </v-form>
          <v-container>
            <v-card-actions>
              <div class="texto-card">
                <router-link to="/register">
                  <a href>Não tenho conta</a>
                </router-link>
              </div>
            </v-card-actions>
            <v-card-actions>
              <div class="texto-card">
                <router-link to="/register">
                  <a href>Esqueci minha senha</a>
                </router-link>
              </div>
            </v-card-actions>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
import axios from "axios";
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
      popup: false,
      color: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    enviar() {
      axios
        .post("http://localhost:3000/auth/authenticate", this.fields)
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
          console.log(err.response.status);
          if (err.response.status === 403) {
            this.popup = true;
            setTimeout(() => {
              this.popup = false;
            }, 4000);
            this.color = "red";
            return (this.usuarios = err.response.data);
          }
        });
    },
    clearMemory() {
      document.getElementById("email").value = this.stats;
      document.getElementById("password").value = this.stats;
    }
  }
};
</script>

<style>
</style>
