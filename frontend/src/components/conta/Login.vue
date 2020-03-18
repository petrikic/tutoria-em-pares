<template>

  <div id="app">
  <v-app id="inspire">
    <v-content>
<!-- How about adding fill-height to the v-container and align-center to the v-layout: -->
      <v-container
        fill-height
      >
        <v-layout
          align-center
          justify-space-around
        >
          <v-flex
           xs12
           sm12
           md6
          >
            <carrossel/>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex
            xs12
            sm8
            md4
          >

          <v-toolbar v-if="popup"
          :class="color"
          height="30"
          >
          <v-toolbar-title
          class="mx-auto black--text"
          >
            {{usuarios}}
          </v-toolbar-title>
          </v-toolbar>
             <v-toolbar
                flat
              >
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
                v-model="fields.email"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="fields.password"
              ></v-text-field>
              <v-container >
                  <v-btn color="blue" class="white--text" @click="enviar(), clearMemory()">
                  Acessar
                  </v-btn>
              </v-container>
                </v-form>
              <v-container>
                  <v-card-actions>
                    <div class="texto-card">
                      <router-link to="/register"><a href="">Não tenho conta</a></router-link>
                    </div>
                  </v-card-actions>
                  <v-card-actions>
                    <div class="texto-card">
                      <router-link to="/register"><a href="">Esqueci minha senha</a></router-link>
                    </div>
                  </v-card-actions>
              </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>


<script>
import axios from 'axios'
import Carrossel from '../Carrossel.vue'
export default {
    name: 'login',
      components: {
    Carrossel
    },
    data() {
      return {
        fields: {},
        stats: '',
        drawer: null,
        usuarios: '',
        popup: false,
        color: ''
      }
    },
     methods: {
      enviar() {
      axios.post('http://localhost:3000/auth/authenticate', this.fields)
        .then(res => {
          console.log(res)
          if(res.status === 203){
            this.popup = true
            this.color = 'red'
            return this.usuarios = res.data
          }
        if(res.status === 200){
          this.color = 'green'
          return this.usuarios = 'Connectado com sucesso'
        }
        })
        .catch(err => console.log(err))

      },
      clearMemory() {
          document.getElementById('email').value = this.stats;
          document.getElementById('password').value = this.stats;
      },

  }
}
</script>

<style>


</style>
