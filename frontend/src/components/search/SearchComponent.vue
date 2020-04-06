<template>
  <div>
    <div class="d-flex aling-center mt-10">
      <v-text-field
        class="black--text"
        label="Search"
        outlined
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @keyup="performSearch()"
      />
      <v-btn icon fab>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
    <div class="search seachResults" v-if="searchResults.length === 0 ? false : true">
      <v-card class="white" hover v-for="searchResult in searchResults" :key="searchResult.id">
        <v-card-title class="black--text">{{searchResult.item.institution}}</v-card-title>
        <v-card-subtitle class="black--text">{{searchResult.item.discipline}}</v-card-subtitle>
        <v-card-text class="black--text">{{searchResult.item.content}}</v-card-text>
      </v-card>
    </div>
    <div class="search seachResults" v-else-if="query.length > 0 && searchResults.length <= 0">
      <v-card class="white">
        <v-card-title class="black--text">No results: {{query}}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import tutorias from "../../service/tutorias";
export default {
  data() {
    return {
      query: "",
      states: [],
      searchResults: [],
      search: [],
      searchResultsVisible: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["institution", "discipline", "content"]
      }
    };
  },
  created() {
    tutorias
      .listar()
      .then(res => {
        this.search = res;
      })
      .catch(err => err);
  },
  methods: {
    performSearch() {
      this.$search(this.query, this.search, this.options).then(results => {
        this.searchResults = results;
      });
    },
    test() {
      this.a++;
    }
  }
};
</script>

<style>
.test:hover {
  background: grey;
}
.seachResults {
  overflow: auto;
}
.search {
  position: absolute;
  top: 90%;
  width: 25%;
  height: 500px;
}
</style>