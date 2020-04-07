<template >
  <v-dialog max-width="700px" v-model="dialog">
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
        <v-form max-width="800px" class="px-3" ref="form">
          <v-text-field
            v-model="fields.institution"
            label="Bloco"
            prepend-icon="mdi-castle"
          ></v-text-field>
          <v-text-field
            v-model="fields.discipline"
            label="Disciplina"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
            v-model="fields.content"
            label="Dúvida ou Conteúdo"
            prepend-icon="mdi-table-edit"
           
          ></v-textarea>
          <v-spacer></v-spacer>
          <div v-if="showDateTime">
            <v-card-title>Data da Tutoria</v-card-title>
            <v-layout class="mb-5" wrap>
              <v-flex xs8 sm6>
                <v-date-picker v-model="date.day" light color="grey" flat class="mr-3 pb-4"></v-date-picker>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs8 sm6>
                <v-time-picker light color="grey" v-model="date.time" flat></v-time-picker>
              </v-flex>
            </v-layout>
          </div>
          <v-layout class="mx-0 mt-3" wrap>
            <v-row align="center">
              <v-flex xs6 sm4 md6 class="ml-5">
                <v-select
                  :items="items"
                  item-text="opcao"
                  item-value="value"
                  @change="showDateTime =fields.oferecida"
                  dense
                  outlined
                  v-model="fields.oferecida"
                ></v-select>
              </v-flex>
            </v-row>
            <v-flex xs6 sm4 md4>
              <v-btn text @click=" submit()" class="success" :loading="loading">Add Tutoria</v-btn>
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
      date: {},
      showDateTime: false,
      items: [
        {
          opcao: "Ofereço Tutoria",
          value: true
        },
        {
          opcao: "Quero Tutoria",
          value: false
        }
      ],
      fields: {},
      menu: false,
      loading: false,
      dialog: false
    };
  },

  methods: {
    dateFormate() {

        const hours = this.date.time.match(/^(\d+)/)[1];
        const minutes = this.date.time.match(/:(\d+)/)[1];
        const year = this.date.day.match(/^(\d+)/)[1];
        const month = this.date.day.match(/-(\d+)/)[1];
        const day = this.date.day.match(/(\d+)(?!.*\d)/)[1];
        const dateVar = new Date(year, month-1, day, hours, minutes,'00');
        this.fields.data = dateVar

    },
    submit() {
      this.loading = true;
      if(this.fields.oferecida === undefined){
        this.loading = false
        return this.$emit('refreshProject')
      }
    
      if(this.fields.oferecida)
      this.dateFormate()

      tutorias
        .createTutoria(this.fields)
        .then(response => {
          response
          setTimeout(() => {
            this.loading = false;
          }, 500);
          this.dialog = false;
          this.clearMemory();
          this.$emit("projectAdded");
          
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
      this.date = {};
      this.showDateTime = false;
    }
  }
};
</script>


