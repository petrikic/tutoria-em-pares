<template>
  <v-content>
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>

    <v-flex xs12 sm12 md12>
      <v-container class="my-12">
        <h1 class="d-flex justify-center subheading grey--text">Dashboard</h1>
        <v-layout class="d-flex flex-wrap justify-center align-center">
          <v-flex xs12 sm8 md4>
            <v-btn dense text color="black" class="mb-4" @click="sortBy('institution')">
              <v-icon left large>mdi-folder</v-icon>
              <span class="body-1">Ordenar por Bloco</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm8 md4>
            <v-btn dense text color="black" class="mb-4" @click="sortBy('discipline')">
              <v-icon left large>mdi-file-document</v-icon>
              <span class="body-1">Ordenar por disciplina</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm8 md4>
            <v-btn dense text color="black" class="mb-4" @click="refresh(), refreshProject()">
              <v-icon left large>mdi-refresh</v-icon>
              <span class="body-1">Refresh</span>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-card flat class="mb-10 zoom" v-for="project in projects" :key="project.id">

            <v-divider></v-divider>
            <v-layout row wrap :class="`d-flex flex-wrap pa-3 project ${project.status}`">
              <v-flex xs12 sm4 md1>
                <div class="caption grey--text">Bloco</div>
                <div class="body-1 black--text">{{ project.institution }}</div>
              </v-flex>
              <v-flex xs12 sm4 md1>
                <div class="caption grey--text">Disciplina</div>
                <div class="body-1 black--text">{{ project.discipline }}</div>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <div class="caption grey--text">Conteudo</div>
                <div class="body-1 black--text text-justify">{{ project.content }}</div>
              </v-flex>
              <v-flex xs12 sm4 md2>
                <div class="caption grey--text" link>Data</div>
                <div class="body-1 black--text">{{ project.data | moment("DD/MM/YYYY") }}</div>
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
                              src="../../assets/silhueta-interrogação.jpg"
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
                <div class="body-1 black--text">{{ project.status }}</div>
              </v-flex>

              <!-- BOTOES DO DASHBOARD -->

              <v-flex xs6 sm4 md1 v-if="project.user._id === user._id ? true : false">
                <v-list class="d-flex flex-row">
                  <v-list-item>
                    <btnAlterarTutoria :fields = "project" />
                  </v-list-item>
                  <v-list-item>
                   <btnDeletarTutoria :fields = "project"/>
                  </v-list-item>
                </v-list>
              </v-flex>
              <!-- FINAL DOS BOTOES -->
              <div v-if="project.user.semestre <= 1 ? false: true">
                <v-list-item
                  v-if="project.user._id !== user._id ? true : false"
                  class="d-flex justify-start align-end"
                >
                  <botaoFazerTutoria :tutoria="project" />
                </v-list-item>
              </div>
            </v-layout>
            <v-divider></v-divider>
        </v-card>
        <div class="text-center">
          <a @click="refresh()">
            <v-pagination v-model="page" :value="page" :length="paginas"></v-pagination>
          </a>
        </div>
      </v-container>
    </v-flex>
  </v-content>
</template>

<script>
import tutorias from "../../service/tutorias";
import botaoFazerTutoria from "../dashboard/botoes/botaoFazerTutoria";
import btnAlterarTutoria from "../dashboard/botoes/btnAlterarTutoria";
import btnDeletarTutoria from "../dashboard/botoes/btnDeletarTutoria";

export default {
  components: {
    btnAlterarTutoria,
    botaoFazerTutoria,
    btnDeletarTutoria
  },
  data() {
    return {
      page: 1,
      paginas: 0,
      projects: {},
      fields: {},
      user: {},
      isActive: false,
      tutoria: {},
      pages: []
    };
  },
  mounted() {
    this.$nextTick(function () {
       this.refresh();
  })
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
        .paginationTutoria(this.page)
        .then(response => {
          this.projects = response.data.data;
          this.calcularNumeroPagina(response.data.count);
          this.user = JSON.parse(localStorage.getItem("user"));
        })
        .catch(err => err);

      this.$router.push(`/dashboard/pagina/${this.page}`);
    },
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
a {
  text-decoration: none;
  color: black;
}

.zoom:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background: whitesmoke;
  /* background: wheat; */
}
</style>
