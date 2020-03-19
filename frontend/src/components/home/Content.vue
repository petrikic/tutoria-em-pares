<template>
 <v-card>
   <v-toolbar
   height="600px"
   >
    <v-container class="d-flex flex-row">
      <v-card-text
      v-for="content in contents"
      :key="content"
      >
      <v-icon xLarge class="d-flex justify-center mb-2" :class="content.color">{{content.icon}}</v-icon>
      <p class="d-flex flex-column">{{content.texto}}</p>
      </v-card-text>
    </v-container>
  </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'Content',
  data(){
    return {
      contents: [
        {
          icon: 'mdi-history',
          texto: 'O objetivo do tutoria em pares e para quando pessoas estao com dificuldades',
          color: 'blue black--text'
        },
        {
          icon: 'mdi-diamond',
          texto: 'O objetivo do tutoria em pares e para quando pessoas estao com dificuldades',
          color: 'red black--text'
        },
        {
          icon: 'mdi-recycle',
          texto: 'O objetivo do tutoria em pares e para quando pessoas estao com dificuldades',
          color: 'purple blue--text'
        }
      ]
    }
  }
}
</script>

<style>

</style>
