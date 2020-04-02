<template>
  <div class="altura">
    <h1 class="d-flex justify-center align-center mt-12 subheading grey--text">Perfil</h1>

    <v-container class="d-flex justify-center align-center">
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title class="cyan darken-1">
              <span class="headline white--text">{{fields.nome}}</span>

              <v-spacer></v-spacer>

              <v-btn fab small @click="isEditing = !isEditing">
                <v-icon v-if="isEditing">mdi-close</v-icon>
                <v-icon v-else>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-face</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  :value="fields.nome"
                  v-model="fields.nome"
                  color="white"
                  label="Nome"
                ></v-text-field>

                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-whatsapp</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  :value="fields.telefone"
                  v-model="fields.telefone"
                  color="white"
                  label="Whatsapp"
                ></v-text-field>

                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  :value="fields.email"
                  v-model="fields.email"
                  color="white"
                  label="Email"
                ></v-text-field>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-note</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="true"
                  color="white"
                  :value="semestre"
                  label="Semestre"
                ></v-text-field>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-lock</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  :value="fields.rga"
                  v-model="fields.rga"
                  label="Rga"
                ></v-text-field>
              </v-list-item>
              <v-spacer></v-spacer>

              <v-card-actions class="d-flex justify-end align-center">
                <v-btn :disabled="!isEditing" color="success" @click="put()" large>Salvar</v-btn>
                <input
                  style="display: none;"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />
                <v-btn fab large :disabled="!isEditing" text @click="$refs.file.click()">
                  <v-icon>mdi-paperclip</v-icon>
                </v-btn>
              </v-card-actions>
            </v-list>
             <div v-if="this.fields.profile === undefined">
              <v-img src='../../../../assets/silhueta-interrogação.jpg' height="500px" width="100%"></v-img>
            </div>
            <div v-else>
              <v-img :src=link  height="500px" width="100%"></v-img>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import tutorias from "../../../../service/tutorias";
export default {
  name: "DashPerfil",
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      fields: {},
      link: '',
      semestre: '',
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
        tutorias.listarUsers()
        .then(response => {
         const user = JSON.parse(localStorage.getItem('user'))
          response.forEach(element => {
            if(user._id === element._id){
             this.fields = element
            }
          });
          const rga = this.fields.rga.substring(0,4)
          if(this.fields.rga === '' || this.fields.rga === null ||
          this.fields.rga === undefined){
            this.semestre = ''
          }else {
            this.semestre = this.calcularSemestre(rga)
          }


          this.link = this.fields.profile
        
        })
        .catch(err => err)
    },
    put() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
      this.fields.semestre = this.semestre
      if(this.file === undefined){
        tutorias.updateUser(this.fields._id, this.fields)
          .then(response => {
            response;
          })
          .catch(err => err);
      }
      else{
        let config = {
        headers: {
          'Accept': '',
          'Content-Type': 'multipart/form-data'
        }
      }
      let formData = new FormData()
      formData.append("file", this.file);
      formData.append("nome",  this.fields.nome);
      formData.append("email",  this.fields.email);
      formData.append("rga",  this.fields.rga);
      formData.append("telefone",  this.fields.telefone);
      formData.append("semestre", this.fields.semestre);
        tutorias.updateUser(this.fields._id,formData,config)
          .then(response => {
            response;
          })
          .catch(err => err)
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    calcularSemestre(rga){
      const data = new Date()
      const strings = data.toJSON()
      const dataAtual = strings.split("-")

      const mesAtual = dataAtual[1]
      const anoAtual = dataAtual[0]

      if(mesAtual < 6){
        return  ((anoAtual - rga) * 2) + 1
        
      }else{
      return  ((anoAtual - rga) * 2) + 2
        
      }
    }
  }
};
</script>

<style>
.altura {
  margin-top: 5%;
}
</style>
