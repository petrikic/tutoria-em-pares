<template>

  <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
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
                  <v-btn color="primary" @click="rota(), clearMemory()" class="meio">Login</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="texto-card">
                  <v-spacer></v-spacer> 
                  <v-router><a href=""> Ajuda</a></v-router>
                  <v-router><a href=""> Ja tenho conta</a></v-router>
                </div>
              </v-card-actions>
            </v-card>
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
   name: 'Login',
   data() {
      return {
        fields: {},
        stats: '',
        drawer: null,
      }
    },
  methods: {  
      rota() {
         axios.post('http://localhost:3000/auth/register', this.fields)
            .then(response => console.log(response))
            .catch(error => console.log(error))
      },
      clearMemory() {
          document.getElementById('nome').value = this.stats;
          document.getElementById('email').value = this.stats;
          document.getElementById('password').value = this.stats;
      },
      alerta() {
        alert("Email nao inserido")
      }
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