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
          v-model="fields.institution"
          label="Title"
          prepend-icon="mdi-castle"
          :rules="inputRules"
          >
          </v-text-field>
          <v-text-field
          v-model="fields.discipline"
          label="Title"
          prepend-icon="mdi-folder"
          :rules="inputRules"
          >
          </v-text-field>
          <v-textarea
          v-model="fields.content"
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
      fields: {
        institution: '',
        discipline: '',
        content: '',
      },
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
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
    this.loading = true
    axios.post('http://localhost:3000/tutorias/', this.fields)
      .then(response => {
        console.log(response.data)
        setTimeout(() => {
          this.loading = false
        }, 500)
        this.dialog = false
        this.clearMemory()
        this.$emit('projectAdded')
        this.$emit('refreshProject')

      })
      .catch(err => {
        console.log(err.response.data)
        setTimeout(() => {
          this.loading = false
        }, 1000)
        this.dialog = false
        this.clearMemory()
        this.$emit('projectFalied')
      })
   },
   clearMemory(){
     this.fields.institution = ""
     this.fields.discipline = ""
     this.fields.content = ""
   }
  }
}
</script>
