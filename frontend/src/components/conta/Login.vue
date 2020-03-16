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
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
              ></v-text-field>
              <v-container >
                  <v-btn color="blue" class="white--text">
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
import Carrossel from '../Carrossel.vue'
export default {
    name: 'login',  
      components: {
    Carrossel,
    },
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