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
                    v-model="fields.nome"
                    id="nome"
                    label="Nome"
                    name="nome"
                    type="nome"
                  ></v-text-field>
                  <v-text-field
                    v-model="fields.email"
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    v-model="fields.password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  ></v-text-field>
              <v-container >
                  <v-btn color="blue" class="white--text" @click="enviar(), clearMemory()">
                  Cadastrar
                  </v-btn>
              </v-container>

                </v-form>
              <v-container>

                  <v-card-actions>
                    <div class="texto-card">
                      <router-link to="/login"><a href="">Tenho uma conta</a></router-link>
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
export default {
   name: 'Register',
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
      enviar: function() {
          axios.post('http://localhost:3000/auth/register', this.fields)
            .then(res =>  console.log(res))
            .catch(err => {
              console.log(err.response.status)
            if(err.response.status === 403){
              this.popup = true
              setTimeout(() => {
              this.popup = false
            }, 4000)
              this.color = 'red'
              return this.usuarios = err.response.data
          }
         })
      },
      clearMemory: function() {
          document.getElementById('nome').value = this.stats;
          document.getElementById('email').value = this.stats;
          document.getElementById('password').value = this.stats;
      },
  }
}


</script>

<style>
  a {
    text-decoration: none;
    margin: 15px;
  }
  .texto-card {
    margin: 0px auto 0px auto;
  }
  .meio {
    margin-left: 38%;
  }
</style>
