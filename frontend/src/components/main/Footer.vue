<template>
  <v-footer color="purple darken-4"  dark padless>
    <v-card-text class="d-flex flex-wrap flex-row justify-space-between">
      <v-flex xs12 sm4 md2 class="d-flex justify-center mb-10">
        <img src="../../assets/logosos.png" alt="logoTutoria" style="width: 50%; height: 80px;" />
      </v-flex>
      <v-flex xs12 sm2 md4 class="d-flex flex-column">
        <a
          href="#HOME"
          text
          large
          class="text-center white--text body-1 mb-3"
        >O que e Tutoria em Pares?</a>
        <a
          href="#HOME"
          text
          large
          class="text-center white--text body-1 mb-3"
        >O que e o PET Sistemas</a>
        <a href="#HOME" text large class="text-center white--text body-1 mb-3">Blog</a>
        <a
          href="#HOME"
          text
          large
          class="text-center white--text body-1 mb-3"
        >Pessoas que colaboraram!</a>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <p class="text-justify subtitle-1">
          Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS |
          <strong>Telefone: +55 (67) 3345-7000</strong>
        </p>
      </v-flex>
      <v-flex xs12 sm5 md2>
          <a :href="icon.ref" v-for="icon in icons" :key="icon.icone" class="mx-4 my-4 white--text">
            <v-icon size="40px" class="white--text">{{ icon.icon }}</v-icon>
          </a>
      </v-flex>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: () => ({
    icons: [
      {
        icon: "fab fa-facebook",
        ref: "https://www.facebook.com/"
      },
      {
        icon: "fab fa-twitter",
        ref: "https://twitter.com/"
      },
      {
        icon: "fab fa-linkedin",
        ref: "https://www.linkedin.com/"
      },
      {
        icon: "fab fa-instagram",
        ref: "https://www.instagram.com"
      },
      {
        icon: "fab fa-github",
        ref: "https://github.com/"
      }
    ]
  })
};
</script>

<style>

</style>
