<template>
  <div class="altura">
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    
    <v-flex xs12 sm12 md12>
    <v-container class="my-12">
    <h1 class="d-flex justify-center subheading grey--text">Administrativo</h1>
      
      <v-card flat class="mb-10 " v-for="project in projects" :key="project.id">
        <div v-if="project.admin !== true ? true : false">
        <v-divider></v-divider>
          <v-layout row wrap :class="`pa-3 project `">
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Nome</div>
              <div>{{ project.nome }}</div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div class="caption grey--text">Email</div>
              <div>{{ project.email }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Telefone</div>
              <div class="text-justify ">{{ project.telefone }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Data</div>
              <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Rga</div>
              <div>
              {{ project.rga }}
              </div>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Semestre</div>
              <div>{{ project.semestre }}</div>
            </v-flex>

            <!-- BOTOES DO DASHBOARD -->
            
            <v-flex xs6 sm4 md1>
              <v-list class="d-flex flex-row">
                <v-list-item>
                  <v-btn
                    fab
                    text
                    @click="dialog1 = !dialog1 , receberTutoria(project) "
                    class="green"
                  >
                    <v-icon>mdi-account-box</v-icon>
                  </v-btn>
                  <v-row justify="center" v-if="dialog1 === true">
                    <v-dialog v-model="dialog1" max-width="600">
                      <v-card>
                        <v-card-title
                          class="headline"
                        >Voce tem certeza que deseja Colocar este
                         este usuario como administrador?</v-card-title>
                        <v-card-text class="d-flex justify-center">
                          <v-btn
                            class="success  mx-0 mt-3"
                            text
                            @click="dialog1 = false, atualizarDashoboard()"
                          >Admin</v-btn>
                        </v-card-text>
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
          </v-layout>
          </div>
          <v-divider></v-divider>
      </v-card>
      <Pagination :tutorias = projects />
    </v-container>
    </v-flex>
  </div>
</template>

<script>
import tutorias from "../../service/tutorias";
import Pagination from "./dashboard/Pagination"

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
    refresh() {
      tutorias
        .listarUsers()
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
        .removeUser(this.tutoria._id)
        .then(response => {
          response;
          this.$store.getters.snackbarRes
          this.$store.state.texto = "Usuario removido com sucesso!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$.store.stete.texto = "Falha ao remover usuario voce nao tem permissao!";
        });
    },
    atualizarDashoboard() {
      this.fields.admin = true
      tutorias
        .updateAdmin(this.tutoria._id, this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes
          this.$store.state.texto = "Novo administrador!";
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$store.state.texto = "Falha ao criar um administrador!";
        });
    },
  }
};
</script>

<style>
.project {
  border-left: 4px solid red;
  border-right: 4px solid red;
}

.altura {
  margin-top: 5%;
}

</style>
