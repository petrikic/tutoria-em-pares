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
        <v-toolbar-title class="headline white--text hidden-md-and-down">Tutoria</v-toolbar-title>
      </router-link>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app >
      <v-list-item-avatar height="150px" width="100%" class="d-flex flex-column my-10">
        <v-avatar size="100" class>
          <div v-if="this.fields.profile === undefined">
            <img src="../../../assets/silhueta-interrogação.jpg" style="width: 100%; height: 100px;" >
          </div>
          <div v-else>
            <img :src=link  style="width: 100%; height: 100px;">
          </div>
        </v-avatar>
        <p class="d-flex justify-center black--text subheading mt-1">{{fields.nome}}</p>
      </v-list-item-avatar>
      <v-spacer></v-spacer>
      <v-list flat>
        <v-list-item class="my-4" v-for="item in items" :key="item.text" :to="item.route" link>
          <v-list-item-action>
            <v-icon class="black--text" :class="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="item.color">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()"  v-for="n in 1" :key="n.title"  link>
          <v-list-item-action>
            <v-icon class="red--text" >mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "NavDrag",
  data: () => ({
    drawer: null,
    snackbar: false,
    fields: {},
    color: "",
    texto: "",
    link: '',
    items: [
      {
        icon: "mdi-face-profile",
        text: "Administrativa",
        route: "/admin/administrativa"
      },
      {
        icon: "mdi-face-profile",
        text: "Perfil",
        route: "/admin/perfil"
      },
      {
        icon: "mdi-plus-circle",
        text: "Tutorias",
        route: "/admin"
      },
      {
        icon: "mdi-clock",
        text: "Tutorias agendadas",
        route: "/admin/agendados"
      },
      {
        icon: "mdi-face",
        text: "Tutores",
        route: "/admin/tutores"
      },
      {
        icon: "mdi-marker-check",
        text: "Tutorias completas",
        route: "/admin/completo"
      },
    ],
  }),
  mounted(){
    this.pickUser()
  },
  methods: {
    logout(){
      localStorage.removeItem('user')
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    },
    pickUser(){
      tutorias.listarUsers()
        .then(response => {
         const user = JSON.parse(localStorage.getItem('user'))
          response.forEach(element => {
            if(user._id === element._id){
             this.fields = element
            }
          });
          this.link = this.fields.profile
        })
        .catch(err => err)
    }
  }
};
</script>

<style>
a{
  text-decoration: none;
}
</style>
