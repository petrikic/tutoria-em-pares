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
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
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
                  <v-btn color="primary" class="meio">Login</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="texto-card">
                  <v-spacer></v-spacer>
                  <router-link to="/"><a href=""> Esqueci minha senha</a></router-link>
                  <a href=""><router-link to="/register">Cadastrar</router-link></a>
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
export default {
    name: 'login',
    data: () => ({
    drawer: null,
  })
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
