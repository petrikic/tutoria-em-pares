<template>

      <div class="altura">
        <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
          <span>{{$store.state.texto}}</span>
          <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
        </v-snackbar>
        <h1 class="d-flex justify-center subheading grey--text">Dashboard</h1>

        <v-container class="my-5">
          <v-layout row class="d-flex justify-center">
            <v-btn small text color="black" class="mr-3" @click="sortBy('institution')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="body-1">Ordenar por Bloco</span>
            </v-btn>
            <v-btn small text color="black" @click="sortBy('discipline')">
              <v-icon left small>mdi-file-document</v-icon>
              <span class="body-1">Ordenar por disciplina</span>
            </v-btn>
            <v-btn
              small
              text
              color="black"
              class="d-flex ml-5"
              @click="refresh(), refreshProject()"
            >
              <v-icon left medium class="ml-2">mdi-refresh</v-icon>
            </v-btn>
          </v-layout>

          <v-card flat class="mb-10" v-for="project in projects" :key="project.id">
            <div v-if="project.status === 'Aguardando' ? true : false">

               <v-divider></v-divider>
              <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs6 sm4 md1>
                  <div class="caption grey--text">Bloco</div>
                  <div>{{ project.institution }}</div>
                </v-flex>
                <v-flex xs6 sm4 md1>
                  <div class="caption grey--text">Disciplina</div>
                  <div>{{ project.discipline }}</div>
                </v-flex>
                <v-flex xs12 md4>
                  <div class="caption grey--text">Conteudo</div>
                  <p class="text-justify mx-8">{{ project.content }}</p>
                </v-flex>
                <v-flex xs2 sm4 md2>
                  <div class="caption grey--text">Data</div>
                  <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Nome</div>
                  <div>{{ project.user.nome }}</div>
                </v-flex>
                <v-flex xs2 sm4 md1>
                  <div class="caption grey--text">Status</div>
                  <div>{{ project.status }}</div>
                </v-flex>


                <!-- BOTOES DO DASHBOARD -->
                <v-flex xs2 sm4 md1 v-if="project.user._id === JSON.parse($store.state.user)._id ? true : false">
                  <v-list class="d-flex flex-row">
                    <v-list-item>
                      <v-btn
                        fab
                        text
                        @click="dialog1 = !dialog1 , receberTutoria(project) "
                        class="green"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      <v-row justify="center" v-if="dialog1 === true">
                        <v-dialog v-model="dialog1" max-width="600">
                          <v-card>
                            <v-form class="px-5 py-8" ref="form">
                              <h1 class="d-flex justify-center align-center">Alterar tutoria</h1>
                              <v-text-field
                                v-model="fields.institution"
                                :value="fields.institution"
                                label="Bloco"
                                prepend-icon="mdi-castle"
                                :rules="inputRules"
                              ></v-text-field>
                              <v-text-field
                                v-model="fields.discipline"
                                :value="fields.discipline"
                                label="Disciplina"
                                prepend-icon="mdi-folder"
                                :rules="inputRules"
                              ></v-text-field>
                              <v-textarea
                                v-model="fields.content"
                                :value="fields.content"
                                label="Duvida"
                                prepend-icon="mdi-table-edit"
                                :rules="inputRules"
                              ></v-textarea>
                              <v-btn
                                class="success mx-0 mt-3"
                                text
                                @click="dialog1 = false, atualizarDashoboard()"
                              >Alterar</v-btn>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                              </v-card-actions>
                            </v-form>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-list-item>
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
                <div v-if="project.user.semestre < 1 ? false : true">
                 <v-list-item
                 v-if="project.user._id !== JSON.parse($store.state.user)._id ? true : false"
                 class="d-flex justify-start align-end">
                  <v-btn
                    class="green black--text"
                    text
                    @click="doTutoriaUpdate(project)"
                  >Fazer tutoria</v-btn>
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
import tutorias from "../../service/tutorias";

export default {
  data() {
    return {
      projects: {},
      fields: {},
      isActive: false,
      dialog: false,
      dialog1: false,
      tutoria: {},
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

        })
        .catch(err => err);
    },
    receberTutoria(project) {
      this.tutoria = project;
      this.fields = this.tutoria
    },
    removerDashboard() {
      tutorias
        .removerTutoria(this.tutoria._id)
        .then(response => {
          response
          this.$store.getters.snackbarResponse
          this.$store.state.texto = "Tutoria removida com sucesso!";
        })
        .catch(err => {
          err
          this.$store.getters.snackbarErr
          this.$store.state.texto = "Falha ao remover tutoria!";
        });
    },
    atualizarDashoboard() {
      tutorias
        .updateTutoria(this.tutoria._id, this.fields)
        .then(response => {
          response
          this.$store.state.snackbar = true;
          this.$store.state.color = "green";
          this.$store.state.texto = "Tutoria alterado com sucesso!";
        })
        .catch(err => {
          err
          this.$store.state.snackbar = true;
          this.$store.state.color = "red";
          this.$store.state.texto = "Falha ao alterar tutoria!";
        });
    },
    doTutoriaUpdate(project) {
      project.status = 'Agendado'
      tutorias.updateTutoria(project._id, project)
        .then(response => {
          response
          this.snackbar = true;
          this.color = "green";
          this.texto = "Tutoria agendada com sucesso!";
        })
        .catch(err => {
          err
          this.snackbar = true;
          this.color = "red";
          this.texto = "Falha no agendamento da tutoria!";
        })
    }
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
