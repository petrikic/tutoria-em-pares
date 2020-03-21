<template>
  <div class="altura">
    <h1 class="d-flex justify-center subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-btn small flat color="grey" class="mr-3" @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="body-1">Ordenar por Bloco</span>
        </v-btn>
        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>mdi-face</v-icon>
          <span class="body-1 ">Ordenar por nome</span>
        </v-btn>
        <v-btn small flat color="grey" class="d-flex ml-5" @click="refresh(), refreshProject()">
          <v-icon left medium class="ml-2">mdi-refresh</v-icon>
        </v-btn>
      </v-layout>

      <v-card flat class="mb-10" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md4>
            <div class="caption grey--text">Conteudo</div>
            <div>{{ project.content }}</div>
          </v-flex>
          <v-flex xs2 sm4 md1>
            <div class="caption grey--text">Pessoa</div>
            <div>{{ project.user.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Bloco</div>
            <div>{{ project.institution }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Disciplina</div>
            <div>{{ project.discipline }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Data</div>
            <div>{{ project.data }}</div>
          </v-flex>
          <v-flex xs2 sm4 md1>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      projects: []
    }
  },
  mounted(){
    this.refresh()
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
    refresh(){
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
      axios.get('http://localhost:3000/tutorias/').then(response => {
      this.projects = response.data.tutorias
      console.log(response.data.tutorias)
    })
    .catch(err => {
      console.log(err.response.data)
    })
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.Aguardando{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.altura {
  margin-top: 5%;
}
</style>
