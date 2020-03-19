<template>
    <v-footer
      color="purple darken-4"
      dark
      padless
    >
    <v-row >
      <v-col col=2></v-col>
      <v-col col=2 class="d-flex justify-end">
        <h1 class="mt-4">LOGO</h1>
      </v-col>
      <v-col col=2>
        <v-card-text class="white--text pt-0 text-center">
          <v-btn text class="mr-6" large>
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
      </v-card-text>
    </v-col>
    <v-col col=2>
      <v-card-text class="white--text pt-0 mt-10 body-1">
        Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS | Telefone: +55 (67) 3345-7000
      </v-card-text>
    </v-col>
    <v-col col=2>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text mt-10"
          icon
          >
            <a :href="icon.ref">
              <v-icon size="40px" class="white--text">
                {{ icon.icon }}
              </v-icon>
            </a>
           </v-btn>
          </v-card-text>
        </v-col>
        <v-col col=2></v-col>
      </v-row>
  </v-footer>

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
      ],
    }),
}
</script>

<style>
a {
  color: white;
}
</style>
