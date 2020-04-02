<template>
    <v-card-text class="d-flex flex-row" >
      <v-autocomplete
        v-model="model"
        :items="states"
        :label="`Search`"
        persistent-hint
        class="text-justify"
        @keypress.enter="ola(model)"
      >
      </v-autocomplete>
      <v-btn icon  xLarge @click.prevent="ola(model)">
        <v-icon>mdi-magnify</v-icon></v-btn>
    </v-card-text>
</template>

<script>
import tutorias from '../../service/tutorias'
  export default {
    data () {
      return {
        model: '',
        states: [],
        searchResults: [],
        tutorias: {},
        options: {
          shouldSort: true,
          includeMatches: true,
          threshold: 0.5,
          location: 0,
          distance: 500,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ['institution', 'content']
      },
      }
    },
    created(){
      tutorias.listar()
        .then(res => {
          res.forEach(element => {
            const string = element.institution+ " " 
            + element.discipline
            
            this.states.push(string)
          });

          this.tutorias = res
        
        })
        .catch(err => err)
    },
    methods:{
      ola(model){
        this.tutorias.forEach(element => {
          const string = element.institution + ' ' + element.discipline 
          if(model == string )
            this.searchResults.push(element) 
        });
      },
      //  performSearch() {
      //   this.$search(this.model, this.states, this.options)
      //     .then(results => {
      //       this.searchResults = results
      //       console.log(results)
      //     })
      // },
    }
  }
</script>