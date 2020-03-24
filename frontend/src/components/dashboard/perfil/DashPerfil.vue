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
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  :value="fields.telefone"
                  v-model="fields.telefone"
                  color="white"
                  label="Telefone"
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
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  :value="fields.endereco"
                  v-model="fields.endereco"
                  label="Endereco"
                ></v-text-field>
              </v-list-item>
              <v-spacer></v-spacer>

              <v-card-actions class="d-flex justify-end align-center mr-10">
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
                <v-btn large :disabled="!isEditing" @click="submitFile()">Upload</v-btn>
              </v-card-actions>
            </v-list>
            <v-img src="../../../assets/silhueta-interrogação.jpg" height="500px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import tutorias from '../../../service/tutorias'
import axios from 'axios'
export default {
  name: "DashPerfil",
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      fields: {},
      use: {},
      file: "",
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
        })
        .catch(err => console.log(err))
    },
    put() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
      tutorias.updateUser(this.fields._id, this.fields)
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
    },
    submitFile() {
      let formData = new FormData();

      formData.append("file", this.file);

      axios
        .post("http://localhost:3000/users/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log("SUCCESS!!" + response);
        })
        .catch(err => {
          console.log("FAILURE!!" + err);
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style>
.altura {
  margin-top: 5%;
}
</style>
