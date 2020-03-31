<template>
 <v-content>
   <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
      <span>{{texto}}</span>
      <v-btn text color="white" @click="snackbar= false">Close</v-btn>
  </v-snackbar>
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
                <v-toolbar-title>Esqueci senha</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Coloque o seu email"
                    name="email"
                    prepend-icon="mdi-email"
                    v-model="fields.email"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="sendPassword()">Enviar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import tutorias from '../../service/tutorias'
export default {
  name: 'ForgotPassword',
  data(){
    return{
      fields: {},
      color: '',
      snackbar: false,
      texto: '',
    }
  },
  methods: {
    sendPassword(){
      tutorias.forgotPassword(this.fields)
        .then(response => {
          response
          this.snackbar = true
          this.color = 'green'
          this.texto = "E-mail enviado com sucesso!"
          this.fields = {}
        })
        .catch(err => {
          err
          this.snackbar = true
          this.color = 'red'
          this.fields = {}
          return this.texto = err
        })
    }
  },
}
</script>

<style>

</style>
