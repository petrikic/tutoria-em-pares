<template>
  <v-card>
    <a href id="HOME"></a>
    <v-toolbar height="600px">
      <v-card-text v-for="content in contents" :key="content.title">
        <v-col v-for="n in 1" :key="n.title" col="4" class="d-flex flex-column">
          <p class="ma-2 d-flex justify-center align-center">
            <v-icon size="150px" :class="content.color" class="black--text">{{ content.icon }}</v-icon>
          </p>
          <p class="d-flex justify-center mt-10 body-1 text-justify">{{content.texto}}</p>
        </v-col>
      </v-card-text>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      contents: [
        {
          ref: "/",
          icon: "mdi-history",
          texto:
            "O objetivo do tutoria em pares e para quando pessoas estao com dificuldades",
          color: "yellow--text"
        },
        {
          ref: "/",
          icon: "mdi-diamond",
          texto:
            "Contribuir entre os tutores as ações de prática de ensino, como mais uma alternativa de carreira dentro de suas respectivas áreas de estudo/atuação Colaborar e criar oportunidades para o desenvolvimento prático da ato professoral entre os acadêmicos dos cursos de licenciaturas. Propiciar uma maior interação entre os acadêmicos de mesmos cursos de diferentes semestres, assim como acadêmicos de diferentes cursos, mas que possuem uma exigências conteudistas semelhantes.",
          color: "indigo--text"
        },
        {
          ref: "/",
          icon: "mdi-recycle",
          texto:
            "O objetivo do tutoria em pares e para quando pessoas estao com dificuldades",
          color: "blue--text"
        }
      ]
    };
  }
};
</script>

<style>
</style>
