<template>
    <v-card tile>
    <v-footer
      color="purple darken-4"
      dark
      padless
    >
    <v-card-text class="d-flex flex-row justify-space-between">
    <v-col col=3 class="d-flex justify-end align-center">
      <h1>LOGO</h1>
    </v-col>
    <v-col col=3 class="d-flex flex-column">
      <v-btn text  large>
      <router-link to='' class="white--text body-1">
      O que e Tutoria em Pares?
      </router-link>
      </v-btn>
      <v-btn text class="mr-6" large>
      <router-link to='' class="white--text body-1">
      O que e o PET Sistemas
      </router-link>
      </v-btn>
      <v-btn text class="mr-6" large>
      <router-link to='' class="white--text body-1">
      Blog
      </router-link>
      </v-btn>
      <v-btn text class="mr-6" large>
      <router-link to='' class="white--text body-1">
      Pessoas que colaboraram!
      </router-link>
      </v-btn>
    </v-col>
    <v-col col=3 class="d-flex align-center">
      <p class="text-justify subtitle-1">
      Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS |
      <strong>Telefone: +55 (67) 3345-7000</strong>
      </p>
    </v-col>
    <v-col col=3 class="d-flex align-center">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 white--text "
        icon
      >
      <a :href="icon.ref">
        <v-icon size="40px" class="white--text">
          {{ icon.icon }}
        </v-icon>
      </a>
    </v-btn>
    </v-col>
        </v-card-text>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  components: {

  },
   data: () => ({
      icons: [
        {
        icon:'fab fa-facebook',
        ref: 'https://www.facebook.com/'
        },
        {
        icon:'fab fa-twitter',
        ref: 'https://twitter.com/'
        },
        {
        icon:'fab fa-linkedin',
        ref: 'https://www.linkedin.com/'
        },
        {
        icon:'fab fa-instagram',
        ref: 'https://www.instagram.com'
        },
        {
        icon:'fab fa-github',
        ref: 'https://github.com/'
        },
      ],
    }),
}
</script>

<style>
a {
  color: white;
}
</style>
