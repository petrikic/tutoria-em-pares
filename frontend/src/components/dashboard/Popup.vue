<template >
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn text slot="activator" @click="dialog = !dialog" class="success">Adicionar Tutoria</v-btn>
    <v-card>
      <v-card-title>
        <h2>Adicionar nova Tutoria</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="fields.institution"
            label="Bloco"
            prepend-icon="mdi-castle"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="fields.discipline"
            label="Disciplina"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            v-model="fields.content"
            label="Duvida"
            prepend-icon="mdi-table-edit"
            :rules="inputRules"
          ></v-textarea>
          <v-spacer></v-spacer>

          <v-btn flat @click="submit()" class="success mx-0 mt-3" :loading="loading">Add Tutoria</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fields: {
        institution: "",
        discipline: "",
        content: ""
      },
      menu: false,
      inputRules: [
        v => !!v || "Este campo é requerido",
        v => v.length >= 3 || "O tamanho minino de caracteres é de 3"
      ],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("jwt")}`;
      this.loading = true;
      axios
        .post("http://localhost:3000/tutorias/", this.fields)
        .then(response => {
          console.log(response.data);
          setTimeout(() => {
            this.loading = false;
          }, 500);
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectAdded");
          this.$emit("refreshProject");
        })
        .catch(err => {
          console.log(err.response.data);
          this.loading = false;
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectFalied");
        });
    },
    clearMemory() {
      this.fields.institution = "";
      this.fields.discipline = "";
      this.fields.content = "";
    }
  }
};
</script>
