<template>
 <v-card>
   <v-toolbar
   height="600px"
   >
      <v-card-text
      v-for="content in contents"
      :key="content"
      >
      <v-col
      v-for="n in 1"
      :key="n"
      col=4
      class="d-flex flex-column">
      <v-btn-icon class="ma-2 d-flex justify-center align-center">
        <v-icon xLarge class="border" :class="content.color">{{content.icon}}</v-icon>
      </v-btn-icon>
      <p class="d-flex justify-center">{{content.texto}}</p>
      </v-col>
      </v-card-text>
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
          color: 'blue yellow--text'
        },
        {
          icon: 'mdi-diamond',
          texto: 'O objetivo do tutoria em pares e para quando pessoas estao com dificuldades',
          color: 'indigo darken-4--text'
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
/* .border {
  background: blue;
  border-radius: 25px;
  height: 60px;
  width: 60px;
} */
.border {
  border-radius: 25px;
  width: 15%;
}
</style>
