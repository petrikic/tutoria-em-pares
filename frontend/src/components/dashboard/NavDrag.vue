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

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item-avatar height="150px" width="100%" class="d-flex flex-column mt-10">
        <v-avatar size="100" class>
          <img class="text-lg-center" src="https://picsum.photos/250/300?image=660" />
        </v-avatar>
        <p class="d-flex justify-center black--text subheading mt-1">User</p>
      </v-list-item-avatar>
      <v-spacer></v-spacer>
      <v-list-item class="d-flex justify-center mb-6">
        <Popup
          @projectAdded="snackbar=true, color='teal lighten-2', texto='Tutoria cadastrada com Sucesso!'"
          @projectFalied="snackbar=true, color='red', texto='Nao foi possivel cadastrar a tutoria!'"
        />
      </v-list-item>
      <v-list dense flat>
        <v-list-item v-for="item in items" :key="item.text" :to="item.route" link>
          <v-list-item-action>
            <v-icon class="black--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">
          <strong>CHAT</strong>
        </v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from "./Popup";
export default {
  name: "NavDrag",
  components: {
    Popup
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    color: "",
    texto: "",
    items: [
      {
        icon: "mdi-youtube-subscription",
        text: "Perfil",
        route: "/dashboard/perfil"
      },
      { icon: "mdi-plus-circle", text: "Dashboard", route: "/dashboard" },
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
        icon: "mdi-youtube-subscription",
        text: "Enviar sugestao",
        route: "/dashboard/sugestao"
      }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  })
};
</script>

<style>
</style>
