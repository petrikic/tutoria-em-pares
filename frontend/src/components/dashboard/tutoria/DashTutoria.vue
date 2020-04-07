<template>
  <v-content>
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
      <v-card flat class="mb-10 zoom" v-for="project in projects" :key="project.nome">
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
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a v-on="on" :href="`/dashboard/perfil/${project.user._id}`">
                    <div class="d-flex justify-center caption grey--text">Nome</div>
                    <div class="d-flex justify-center mt-6">
                      <v-avatar size="100">
                        <div v-if="project.user.profile === undefined ? true : false">
                          <img
                            src="../../../assets/silhueta-interrogação.jpg"
                            style="width: 100%; height: 100px;"
                          />
                        </div>
                        <div v-else>
                          <img :src="project.user.profile" style="width: 100%; height: 100px;" />
                        </div>
                      </v-avatar>
                      <div
                        class="body-1 black--text d-flex align-self-center mx-4"
                      >{{ project.user.nome }}</div>
                    </div>
                  </a>
                </template>
                <span>Perfil</span>
              </v-tooltip>
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
            <div v-if="project.tutor === user._id ? true : false">
              <v-list-item class="d-flex justify-start align-end">
                <Prova :project="project" msg="Elaborar Prova" color="red" />
              </v-list-item>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <div class="text-center">
        <a @click="refresh()">
          <v-pagination v-model="page" :value="page" :length="paginas"></v-pagination>
        </a>
      </div>
    </v-container>
  </v-content>
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
      page: 1,
      paginas: 0,
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
    calcularNumeroPagina(totalPages) {
      const numeroPaginas = totalPages / 10;
      this.paginas = Math.ceil(numeroPaginas);
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    refresh() {
      tutorias
        .paginationAgendado(this.page)
        .then(response => {
          this.projects = response.data.data;
          this.calcularNumeroPagina(response.data.count);
          this.user = JSON.parse(localStorage.getItem("user"));
        })
        .catch(err => err);
      this.$router.push(`/dashboard/tutorias/pagina/${this.page}`);
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

.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}
</style>
