<template>
  <v-responsive class="overflow-y-auto" max-height="1000">
    <v-lazy
      v-model="isActive"
      :options="{
          threshold: .5
        }"
      min-height="200"
      transition="fade-transition"
    >
      <div class="altura">
        <h1 class="d-flex justify-center subheading grey--text ">Dashboard</h1>

        <v-container class="d-flex justify-center">
          <v-btn small text color="black" class="mr-3" @click="sortBy('institution')">
            <v-icon left small>mdi-folder</v-icon>
            <span class="body-1">Ordenar por Bloco</span>
          </v-btn>
          <v-btn small text color="black" @click="sortBy('nome')">
            <v-icon left small>mdi-face</v-icon>
            <span class="body-1">Ordenar por nome</span>
          </v-btn>
          <v-btn small text color="black" @click="refresh(), refreshProject()">
            <v-icon left medium class="ml-2">mdi-refresh</v-icon>
          </v-btn>
        </v-container>
        <v-container class="d-flex flex-column justify-center">
          <v-card flat class="mb-10" v-for="project in projects" :key="project.nome">
            <div v-if="project.status === 'Completo' ? true : false">
               <v-divider></v-divider>
              <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs6 sm4 md1>
                  <div class="caption grey--text">Bloco</div>
                  <div>{{ project.institution }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Disciplina</div>
                  <div>{{ project.discipline }}</div>
                </v-flex>
                <v-flex xs12 md4>
                  <div class="caption  grey--text">Conteudo</div>
                  <p class="text-justify mr-12">{{ project.content }}</p>
                </v-flex>
                <v-flex xs2 sm4 md2>
                  <div class="caption grey--text">Data</div>
                  <div>{{ project.data |  moment("DD/MM/YYYY") }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Nome</div>
                  <div>{{ project.user.nome }}</div>
                </v-flex>
                <v-flex xs2 sm4 md1>
                  <div class="caption grey--text">Status</div>
                  <div>{{ project.status }}</div>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            </div>
          </v-card>
        </v-container>
      </div>
    </v-lazy>
  </v-responsive>
</template>

<script>
import tutorias from "../../../../service/tutorias";
export default {
  data() {
    return {
      projects: {},
      nomes: {},
      isActive: false
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    refresh() {
    tutorias.listar()
      .then(response => {
        this.projects = response
      })
      .catch(err => err)
    }
  }
};
</script>

<style>
.project.Completo {
  border-left: 4px solid #3cd1c2;
}
.project.Aguardando {
  border-left: 4px solid orange;
}
.project.Agendado {
  border-left: 4px solid tomato;
}
.altura {
  margin-top: 5%;
}
</style>
