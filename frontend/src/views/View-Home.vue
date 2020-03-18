<template>

  <v-app id="inspire">
    <Header/>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped

    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"><strong>CHAT</strong></v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="blue"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
      <v-icon
        class="mx-4"
        large
        color="white"
      >
        mdi-school
      </v-icon>

      <v-toolbar-title class="mr-12 align-center">
        <span class="white--text">Tutoria</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <!-- <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        /> -->
        <v-text-field
         :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
         append-icon="mdi-magnify"
   color="white"
          hide-details

        />
      </v-row>
    </v-app-bar>
<!--
    <v-content>
      <v-container class="fill-height">
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/aezMOO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content> -->
  </v-app>
</template>




<script>
import Header from '../components/main/Header'
export default {
  name: 'View-Home',
    components: {
    Header
  },
  props: {
      source: String,
    },
    data: () => ({

      drawer: null,
      items: [
        { icon: 'mdi-youtube-subscription', text: 'Perfil' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-lock', text: 'Lock' },
        { icon: 'mdi-book', text: 'Cursos' },
        { icon: 'mdi-clock', text: 'Tutorias agendadas' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],

    }),
    created () {
    //  this.$vuetify.theme.dark = true
    },


}
</script>
<style>

</style>
