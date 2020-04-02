<template>
 
      <div class="altura">
        <h1 class="d-flex justify-center subheading grey--text ">Tutores</h1>

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
            <div v-if="project.status === 'Aguardando' ? true : false">
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
                  <div class="caption grey--text">Data da Tutoria</div>
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

              <div v-if="project.user.semestre > 1 ? true : false">
              <v-list-item
                 v-if="project.user._id !== user._id ? true : false"
                class="d-flex justify-start align-end"
              >
                <v-btn
                  class="green black--text"
                  text
                  @click="doTutoriaUpdate(project)"
                >TORNAR-SE ALUNO</v-btn>
              </v-list-item>
            </div>
              </v-layout>
               <v-divider></v-divider>
            </div>
          </v-card>
        </v-container>
      </div>
</template>

<script>
import tutorias from "../../../../service/tutorias";
export default {
  components: {

  },
  data() {
    return {
      projects: {},
      tutoria: {},
      nomes: {},
      isActive: false,
      user: {},
      dialogs: false,
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
        const user = JSON.parse(localStorage.getItem("user"));
        this.user = user;
      })
      .catch(err => err)
    },
  }
};
</script>

<style>
.project.Completada {
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
