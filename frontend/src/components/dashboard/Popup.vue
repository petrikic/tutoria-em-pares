<template >
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn text slot="activator" @click="dialog = !dialog" class="green black--text">
      <v-icon left>mdi-plus-circle</v-icon>Tutorias
    </v-btn>
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
          <v-flex  >          
          </v-flex>                              

          <v-layout class="mx-0 mt-3">
              <v-row align="center">
            <v-flex xs6 sm4 md6 class="ml-5">
              <v-select
                :items="items"
                item-text="opcao"
                item-value="value"          
                label="Tutoria"
                dense
                outlined
                v-model="fields.oferecida"               
              ></v-select>
            </v-flex>
             </v-row>
            <v-flex  xs6 sm4 md4>
              <v-btn text @click="submit()" class="success" :loading="loading">Add Tutoria</v-btn>
            </v-flex>
          </v-layout>
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
      items: [
        {
          opcao: 'Ofereço Tutoria',
          value: true
        },
        {
          opcao: 'Quero Tutoria',
          value: false,
        },
      ],
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
      console.log(this.fields);
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
