<template >
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
    <v-btn text v-on="on" @click="dialog = !dialog" class="green black--text">
      <v-icon left>mdi-plus-circle</v-icon>Tutorias
    </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>{{msg}}</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="fields.institution" label="Bloco" prepend-icon="mdi-castle"></v-text-field>
          <v-text-field v-model="fields.discipline" label="Disciplina" prepend-icon="mdi-folder"></v-text-field>
          <v-textarea v-model="fields.content" label="Duvida" prepend-icon="mdi-table-edit"></v-textarea>
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
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      this.loading = true;
      tutorias
        .createTutoria(this.fields)
        .then(response => {
          response;
          setTimeout(() => {
            this.loading = false;
          }, 500);
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectAdded");
          this.$emit("refreshProject");
        })
        .catch(err => {
          err;
          this.loading = false;
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectFalied");
        });
    },
    clearMemory() {
      this.fields = {};
    }
  }
};
</script>
