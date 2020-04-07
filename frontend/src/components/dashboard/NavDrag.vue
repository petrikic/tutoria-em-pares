<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
      <span>{{texto}}</span>
      <v-btn text color="white"  @click="snackbar= false">Close</v-btn>
    </v-snackbar>
    <v-app-bar app color="purple darken-4" dark height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
      <v-icon xLarge color="white" left>mdi-school</v-icon>
      <router-link router to="/">
        <v-toolbar-title class="headline white--text hidden-md-and-down">Tutoria</v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-row class="ml-12">
        <v-flex xs12 sm8 md6>
          <Search/>
        </v-flex>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app >
      <div>
      <v-list-item-avatar height="150px"  width="100%" class="d-flex flex-column my-10">
        <v-avatar size="100" class>
          <div v-if="this.fields.profile === undefined">
          <img class="text-lg-center" src="../../assets/silhueta-interrogação.jpg" style="width: 100%; height: 100px;" />
          </div>
          <div v-else>
            <img :src=link  style="width: 100%; height: 100px;">
          </div>
        </v-avatar>
        <p class="d-flex justify-center black--text subheading mt-1">{{fields.nome}}</p>
      </v-list-item-avatar>
      </div>
      <v-spacer></v-spacer>
      <v-list-item class="d-flex justify-center mb-6">
        <Popup
          @projectAdded="snackbar=true, color='teal lighten-2', texto='Tutoria cadastrada com Sucesso!'"
          @projectFalied="snackbar=true, color='red', texto='Nao foi possivel cadastrar a tutoria!'"
          @refreshProject="snackbar=true, color='red', texto='Voce precisar selecionar o tipo da tutoria!'"
        />
      </v-list-item>
      <v-list flat>

         <v-list-item   v-for="n in 1" :key="n.title"  link
         router :to="`/dashboard/perfil/${id}`" >
          <v-list-item-action>
            <v-icon class="black--text" >mdi-face-profile</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text">Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

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
import Popup from "./Popup";
import Search from "../search/SearchComponent"
import tutorias from '../../service/tutorias'
export default {
  name: "NavDrag",
  components: {
    Popup,
    Search
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    fields: {},
    color: "",
    texto: "",
    link: '',
    id: '',
    items: [
      {
        icon: "mdi-plus-circle",
        text: "Tutorias",
        route: `/dashboard/pagina/1`
      },
      {
        icon: "mdi-clock",
        text: "Tutorias agendadas",
        route: `/dashboard/tutorias/pagina/1`
      },
      {
        icon: "mdi-face",
        text: "Tutores",
        route: "/dashboard/tutores"
      },
      {
        icon: "mdi-email",
        text: "Enviar sugestao",
        route: "/dashboard/sugestao"
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
         this.user = JSON.parse(localStorage.getItem('user'))
         this.id = this.user._id
          response.forEach(element => {
            if(this.user._id === element._id){
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

</style>
