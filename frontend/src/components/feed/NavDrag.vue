<template>
  <v-app>
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
      color="purple darken-4"
      dark
      height=80
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" />
      <v-icon
        xLarge
        color="white"
        left
      >
        mdi-school
      </v-icon>

      <v-toolbar-title class="headline white--text">
          Tutoria
      </v-toolbar-title>
      <v-spacer />
      <v-row>
      <v-col col=6 class="d-flex justify-center align-center white--text">
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
      <v-col col=6>

      </v-col>
      </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'NavDrag',
  components: {

  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-youtube-subscription', text: 'Perfil' },
      { icon: 'mdi-plus-circle', text: 'Adicionar Projeto' },
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
}
</script>

<style>

</style>
