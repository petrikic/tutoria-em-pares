<template>
  <v-content>
    <h1 class="d-flex justify-center subheading grey--text">Tutores</h1>

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
      <v-card flat class="mb-10" v-for="project in projects" :key="project.id">
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
              <div class="caption grey--text">Conteudo</div>
              <p class="text-justify mr-12">{{ project.content }}</p>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Data da Tutoria</div>
              <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
              <div class="caption grey--text">Horário</div>
              <div>{{ project.data | moment("HH:mm") }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Nome</div>
              <div>{{ project.tutor.nome }}</div>
            </v-flex>
            <v-flex xs2 sm4 md1>
              <div class="caption grey--text"> Alunos</div>
             <p>{{ project.users.length }}/10</p>  
            </v-flex>
             
            <!-- BOTOES DO DASHBOARD -->

            <v-flex xs6 sm4 md1 v-if="project.tutor._id === user._id ? true : false">
              <v-list class="d-flex flex-row">
                <v-list-item>
                  <btnAlterarTutoria :fields="project" />
                </v-list-item>
                <v-list-item>
                  <btnDeletarTutoria :fields="project" />
                </v-list-item>
              </v-list>
            </v-flex>
            <!-- FINAL DOS BOTOES -->

            <v-list-item
              v-if="project.tutor._id !== user._id ? true : false"
              class="d-flex justify-start align-end"
            >
              <botaoTornarAluno :tutoria="project" />
            </v-list-item>
          </v-layout>                      
          <v-divider></v-divider>
      </v-card>
    </v-container>
  </v-content>   
</template>

<script>
import btnDeletarTutoria from "../botoes/btnDeletarTutoria";
import btnAlterarTutoria from "../botoes/btnAlterarTutoria";
import botaoTornarAluno from "../botoes/botaoTornarAluno";
import tutorias from "../../../service/tutorias";
export default {
  components: {
    btnAlterarTutoria,
    btnDeletarTutoria,
    botaoTornarAluno
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
        .listarTutoriasOferecidas()
        .then(response => {
          this.projects = response;
          this.user = JSON.parse(localStorage.getItem("user"));
        })
        .catch(err => err);
    }
  }
};
</script>

<style>
.project.Completada {
  border-left: 4px solid #3cd1c2;
}
.project.AguardandoAluno {
  border-left: 4px solid orange;
  border-right: 4px solid orange;
}
.project.Agendado {
  border-left: 4px solid tomato;
}
.altura {
  margin-top: 5%;
}
</style>
