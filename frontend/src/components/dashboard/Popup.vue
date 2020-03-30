<template >
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn
      text
      slot="activator"
      @click="dialog = !dialog"
      class="green black--text"
    >
    <v-icon left >mdi-plus-circle</v-icon>
    Adicionar Tutoria</v-btn>
    <v-card>
      <v-card-title>
        <h2>{{msg}}</h2>
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

          <v-btn text @click="submit()" class="success mx-0 mt-3" :loading="loading">Add Tutoria</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import tutorias from "../../service/tutorias";
export default {
  props: {
    msg: String,
    navDrag: Boolean
  },
  data() {
    return {
      fields: {},
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
      this.loading = true;
      tutorias.createTutoria(this.fields)
        .then(response => {
          response
          setTimeout(() => {
            this.loading = false;
          }, 500);
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectAdded");
          this.$emit("refreshProject");
        })
        .catch(err => {
          err
          this.loading = false;
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectFalied");
        });
    },
    clearMemory() {
      this.fields = {}
    }
  }
};
</script>
