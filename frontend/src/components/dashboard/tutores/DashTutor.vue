<template>
  <v-content>


  <v-flex xs12 sm12 md12>
    <v-container class="d-flex flex-column justify-center">
    <h1 class="d-flex justify-center subheading grey--text">Tutores</h1>
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
          <v-flex xs2 sm4 md1>
            <div class="caption grey--text">Data da Tutoria</div>
            <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
            <div class="caption grey--text">Horário</div>
            <div>{{ project.data | moment("HH:mm") }}</div>
          </v-flex>
           <v-flex xs12 sm4 md2>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a v-on="on" :href="`/dashboard/perfil/${project.tutor._id}`">
                    <div class="d-flex justify-center caption grey--text">Nome</div>
                    <div class="d-flex justify-center mt-6">
                      <v-avatar size="100">
                        <div v-if="project.tutor.profile === undefined ? true : false">
                          <img
                            src="../../../assets/silhueta-interrogação.jpg"
                            style="width: 100%; height: 100px;"
                          />
                        </div>
                        <div v-else>
                          <img :src="project.tutor.profile" style="width: 100%; height: 100px;" />
                        </div>
                      </v-avatar>
                      <div
                        class="body-1 black--text d-flex align-self-center mx-4"
                      >{{ project.tutor.nome }}</div>
                    </div>
                  </a>
                </template>
                <span>Perfil</span>
              </v-tooltip>
            </v-flex>
          <v-flex xs2 sm4 md1>
            <div class="caption grey--text">Alunos</div>
            <p>{{ project.users.length }}/10</p>
          </v-flex>

          <!-- BOTOES DO DASHBOARD -->

          <v-flex xs6 sm4 md6 lg6 xl1 v-if="project.tutor._id === user._id ? true : false">
            <div class="d-flex">
                <btnAlterarTutoria :fields="project" class="mx-4"/>
                <btnDeletarTutoria :fields="project" />
              </div>
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
  </v-flex>
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
  border-left: 4px solid blue;
  border-right: 4px solid blue;
}
.project.Agendado {
  border-left: 4px solid tomato;
}
.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}
</style>
