<template>
  <div class="altura">
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    
    <v-flex xs12 sm12 md12>
    <v-container class="my-12">
    <h1 class="d-flex justify-center subheading grey--text">Dashboard</h1>
      <v-layout class="d-flex flex-wrap justify-center align-center">
        <v-flex xs12 sm8 md4>
        <v-btn dense text color="black" class="mb-4"  @click="sortBy('institution')">
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
        <v-flex xs12 sm8 md4 >
        <v-btn dense text color="black" class="mb-4" @click="refresh(), refreshProject()">
          <v-icon left large >mdi-refresh</v-icon>
          <span class="body-1">Refresh</span>
        </v-btn>
        </v-flex>
      </v-layout>
      
      <v-card flat class="mb-10 " v-for="project in projects" :key="project.id">
        <div v-if="project.status === 'Agendado' ? true : false">
          <v-divider></v-divider>
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Bloco</div>
              <div>{{ project.institution }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Disciplina</div>
              <div>{{ project.discipline }}</div>
            </v-flex>
            <v-flex xs12 sm4 md4>
              <div class="caption grey--text">Conteudo</div>
              <div class="text-justify ">{{ project.content }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Data</div>
              <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="d-flex justify-center caption grey--text">Nome</div>
              <div class="d-flex justify-center mt-6">
              <v-avatar size="100" >
                <div v-if="project.user.profile === undefined ? true : false">
                  <img src="../../../../assets/silhueta-interrogação.jpg" style="width: 100%; height: 100px;" >
                </div>
                <div v-else>
                  <img :src="project.user.profile"  style="width: 100%; height: 100px;" >
                </div>
              </v-avatar>
              <div class="d-flex align-self-center mx-4">
              {{ project.user.nome }}
              </div>
            </div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Status</div>
              <div>{{ project.status }}</div>
            </v-flex>

            <!-- BOTOES DO DASHBOARD -->
            
            <v-flex xs6 sm4 md1>
              <v-list class="d-flex flex-row">
                <v-list-item>
                  <v-btn
                    fab
                    text
                    @click="dialog = !dialog , receberTutoria(project) "
                    class="error"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-row justify="center" v-if="dialog === true">
                    <v-dialog v-model="dialog" persistent max-width="500">
                      <v-card>
                        <v-card-title
                          class="headline"
                        >Voce tem certeza que deseja deletar esta tutoria?</v-card-title>
                        <v-card-text>
                          Caso dejese deletar esta tutoria, esteje ciente que estes dados serao apagados da base
                          dados da nossa plataforma, e voce nao podera consultar novamente esta tutoria!!.
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="red darken-1" text @click="dialog = false">Discordar</v-btn>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false, removerDashboard()"
                          >Aceito</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-flex>
            <!-- FINAL DOS BOTOES -->
             <v-flex xs12 sm8 md1>
              <div>
                <v-list-item class="d-flex justify-start align-end">
                  <v-btn class="green black--text">ACEITAR PROPOSTA DE PROVA</v-btn>
                </v-list-item>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </div>
      </v-card>
      <Pagination :tutorias = projects />
    </v-container>
    </v-flex>
  </div>
</template>

<script>
import tutorias from "../../../../service/tutorias";
import Pagination from "../Pagination"

export default {
  components: {
    Pagination
  },
  data() {
    return {
      projects: {},
      fields: {},
      user: {},
      isActive: false,
      dialog: false,
      dialog1: false,
      tutoria: {},
      pages: [],
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
          this.user = JSON.parse(localStorage.getItem('user'))
        })
        .catch(err => err);
    },
    receberTutoria(project) {
      this.tutoria = project;
      this.fields = this.tutoria;
    },
    removerDashboard() {
      tutorias
        .removerTutoria(this.tutoria._id)
        .then(response => {
          response;
          this.$store.getters.snackbarRes
          this.$store.state.texto = "Tutoria removida com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$.store.stete.texto = "Falha ao remover tutoria!";
        });
    },
  }
};
</script>

<style>
.project{
  border-left: 4px solid tomato;
  border-right: 4px solid tomato;
}

.altura {
  margin-top: 5%;
}

</style>
