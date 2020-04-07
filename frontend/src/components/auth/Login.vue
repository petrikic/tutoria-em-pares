<template>
  <v-container fill-height class="my-12">
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    <v-layout class="d-flex flex-wrap justify-space-around align-center">
      <v-flex xs12 sm12 md6>
        <carrossel />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8 md4>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-toolbar-title class="d-flex justify-center blue--text">
            <img src="../../assets/logosos.png" alt="logoTutoria"  style="width: 100%; height: 80px;">
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-form>
          <v-text-field id="email" label="Email" name="email" type="email" v-model="fields.email"></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            type="password"
            v-model="fields.password"
            @keypress.enter="enviar()"
          ></v-text-field>
          <v-card-actions class="d-flex justify-start">
            <v-btn color="blue" class="white--text" @click="enviar()">Acessar</v-btn>
          </v-card-actions>
        </v-form>
        <v-container>
          <v-card-actions class="d-flex justify-center">
            <a class="body-1 blue--text"  href="/register">Nao tenho conta</a>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center">
            <a class="body-1 blue--text"  href="/forgot_password">Esqueci minha senha</a>
          </v-card-actions>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import tutorias from "../../service/auth";
import Carrossel from "../Carrossel.vue";
export default {
  name: "login",
  components: {
    Carrossel,
  },
  data() {
    return {
      fields: {},
      drawer: null,
    };
  },
  methods: {
    enviar() {
      tutorias
        .logar(this.fields)
        .then(response => {
          let admin = response.data.user.admin;
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", response.data.token);
          if (localStorage.getItem("jwt") != null) {  
            if (admin === true) {
              this.$router.push("admin");
               setTimeout(()=> {
                location.reload()
              }, 200)
            } else {
              this.$router.push("dashboard/pagina/1");
              setTimeout(()=> {
                location.reload()
              }, 200)
              
            }
          }

           this.fields = {};
        })
        .catch(err => {
          this.$store.getters.snackbarErr
          this.$store.state.texto = err
          this.fields = {};
        });
    },
  },
};
</script>

<style>
</style>
