<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
      <span>{{texto}}</span>
      <v-btn text color="white" flat @click="snackbar= false">Close</v-btn>
    </v-snackbar>
    <v-app-bar app color="purple darken-4" dark height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
      <v-icon xLarge color="white" left>mdi-school</v-icon>
      <router-link router to="/">
        <v-toolbar-title class="headline white--text">Tutoria</v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-row>
        <v-col col="6" class="d-flex justify-center align-center white--text">
          <v-text-field
            id="search"
            placeholder="Search"
            name="search"
            type="search"
            outlined
            class="mt-6"
            append-icon="mdi-magnify"
          />
        </v-col>
        <v-col col="6"></v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app >
      <v-list-item-avatar height="150px" width="100%" class="d-flex flex-column my-10">
        <v-avatar size="100" class>
          <img class="text-lg-center" src="../../assets/silhueta-interrogação.jpg" />
        </v-avatar>
        <p class="d-flex justify-center black--text subheading mt-1">{{fields.nome}}</p>
      </v-list-item-avatar>
      <v-spacer></v-spacer>
      <v-list-item class="d-flex justify-center mb-6">
        <Popup
          @projectAdded="snackbar=true, color='teal lighten-2', texto='Tutoria cadastrada com Sucesso!'"
          @projectFalied="snackbar=true, color='red', texto='Nao foi possivel cadastrar a tutoria!'"
        />
      </v-list-item>
      <v-list flat>
        <v-list-item class="my-4" v-for="item in items" :key="item.text" :to="item.route" link>
          <v-list-item-action>
            <v-icon class="black--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import Popup from "./Popup";
import tutorias from '../../service/tutorias'
export default {
  name: "NavDrag",
  components: {
    Popup
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    fields: {},
    color: "",
    texto: "",
    items: [
      {
        icon: "mdi-face-profile",
        text: "Perfil",
        route: "/dashboard/perfil"
      },
      {
        icon: "mdi-face",
        text: "Tutores",
        route: "/dashboard/tutores"
      },
      {
        icon: "mdi-plus-circle",
        text: "Tutorias",
        route: "/dashboard"
      },
      {
        icon: "mdi-clock",
        text: "Tutorias agendadas",
        route: "/dashboard/tutorias"
      },
      {
        icon: "mdi-marker-check",
        text: "Tutorias completas",
        route: "/dashboard/completos"
      },
      {
        icon: "mdi-email",
        text: "Enviar sugestao",
        route: "/dashboard/sugestao"
      }
    ],
  }),
  mounted(){
    this.pickUser()
  },
  methods: {
    pickUser(){
      tutorias.listarUsers()
        .then(response => {
         const user = JSON.parse(localStorage.getItem('user'))
          response.forEach(element => {
            if(user._id === element._id){
             this.fields = element
            }
          });
        })
        .catch(err => err)
    }
  }
};
</script>

<style>
</style>
