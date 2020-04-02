<template>
  <div class="altura">
    <h1 class="d-flex justify-center subheading grey--text">Dashboard</h1>


    
    <v-container class="d-flex justify-center">
      <v-layout class="d-flex flex-wrap justify-center align-center">
        <v-flex xs12 sm8 md4>
          <v-btn dense text color="black" @click="sortBy('institution')">
            <v-icon left large>mdi-folder</v-icon>
            <span class="body-1">Ordenar por Bloco</span>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm8 md4>
          <v-btn dense text color="black" class @click="sortBy('discipline')">
            <v-icon left large>mdi-file-document</v-icon>
            <span class="body-1">Ordenar por disciplina</span>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm8 md4>
          <v-btn dense text color="black" class="d-flex" @click="refresh(), refreshProject()">
            <v-icon left large>mdi-refresh</v-icon>
            <span class="body-1">Refresh</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>


    
    <v-container class="d-flex flex-column justify-center">
      <v-card flat class="mb-10 card" v-for="project in projects" :key="project.nome">
        <div v-if="project.status === 'Agendado' ? true : false">
          <v-divider></v-divider>
          <v-layout row wrap :class="`pa-3 project ${project.status} ` ">
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Bloco</div>
              <div>{{ project.institution }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Disciplina</div>
              <div>{{ project.discipline }}</div>
            </v-flex>
            <v-flex xs12 sm4 md5>
              <div class="caption grey--text">Conteudo</div>
              <p class="text-justify">{{ project.content }}</p>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Data</div>
              <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Nome</div>
              <div>{{ project.user.nome }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Status</div>
              <div>{{ project.status }}</div>
            </v-flex>
            <v-flex xs12 sm8 md1>
              <div v-if="project.user._id === user._id ? true : false">
                <v-list-item class="d-flex justify-start align-end">
                  <FinalizarTutoria :project="project" />
                </v-list-item>
              </div>
            </v-flex>
            <v-flex xs12 sm8 md1 class="d-flex justify-start">
              <div v-if="project.tutor === user._id ? true : false">
                <v-list-item class="d-flex justify-start align-end">
                  <Prova :project="project" msg="Elaborar Prova" color="red" />
                </v-list-item>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FinalizarTutoria from "../dialogs/FinalizarTutoria";
import Prova from "../dialogs/Prova";
import tutorias from "../../../service/tutorias";
export default {
  components: {
    FinalizarTutoria,
    Prova
  },
  data() {
    return {
      projects: {},
      tutoria: {},
      nomes: {},
      isActive: false,
      user: {},
      dialogs: false
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
      tutorias
        .listar()
        .then(response => {
          this.projects = response;
          const user = JSON.parse(localStorage.getItem("user"));
          this.user = user;
        })
        .catch(err => err);
    }
  }
};
</script>

<style>
.project.Completada {
  border-left: 4px solid #3cd1c2;
  border-right: 4px solid #3cd1c2;
}
.project.Aguardando {
  border-left: 4px solid orange;
  border-right: 4px solid orange;
}
.project.Agendado {
  border-left: 4px solid tomato;
  border-right: 4px solid tomato;
}
.altura {
  margin-top: 5%;
}
.card:hover {
  background: #616161;
}
</style>
