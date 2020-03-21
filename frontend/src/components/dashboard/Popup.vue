<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn text slot="activator" @click="dialog = !dialog" class="success">Adicionar Tutoria</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
          v-model="fields.title"
          label="Title"
          prepend-icon="mdi-castle"
          :rules="inputRules"
          >
          </v-text-field>
          <v-text-field
          v-model="fields.description"
          label="Title"
          prepend-icon="mdi-folder"
          :rules="inputRules"
          >
          </v-text-field>
          <v-textarea

          label="Information"
          prepend-icon="mdi-table-edit"
          :rules="inputRules"
          >
          </v-textarea>
          <v-spacer></v-spacer>

          <v-btn flat @click="submit()" class="success mx-0 mt-3" :loading="loading">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      fields: {},
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
  submit() {
    this.loading = true
    console.log(this.fields)
    axios.post('http://localhost:3000/projects/', this.fields)
      .then(response => {
        console.log(response.headers)
        response.headers = localStorage.getItem('jwt')
        console.log(localStorage.getItem('jwt'))
        this.loading = false
      })
      .catch(err => {
        console.log(err.response.data)
        setTimeout(() => {
          this.loading = false
        }, 1000)

      })


   }
  }
}
</script>
