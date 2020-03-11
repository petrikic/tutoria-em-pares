<template>
  <div class="container centro">
    <div class="row">
      <div class="col-6">
        <b-form-input  id="ip1" v-model="fields.nome" placeholder="Nome" @keyup.enter="alerta()"></b-form-input>
      </div>
      <div class="col-6">
         <b-form-input id="ip2" v-model="fields.sobrenome" placeholder="Sobrenome" @keyup.enter="alerta()"></b-form-input>
      </div>
        <div class="col-12 button">
          <b-form-input  class="margin" id="ip3" v-model="fields.email" placeholder="Email" @keyup.enter="rota(), clearMemory()"></b-form-input>
          <b-button class="margin" variant="success" @click="rota(), clearMemory()">Submit</b-button>
          <b-button class="margin margin-button" variant="danger" @click="clearMemory()">Clear</b-button>
      </div>
    </div>
  </div>
</template>
          
<script>
import axios from 'axios'
export default {
  name: 'Login',
   data() {
      return {
        fields: {},
        stats: ''
      }
    },
  methods: {  
      rota() {
         axios.post('http://localhost:3000/clients', this.fields)
            .then(response => console.log(response))
            .catch(error => console.log(error))
      },
      clearMemory() {
          document.getElementById('ip1').value = this.stats;
          document.getElementById('ip2').value = this.stats;
          document.getElementById('ip3').value = this.stats;
      },
      alerta() {
        alert("Email nao inserido")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .margin {
    margin-top: 15px;
  }
  .margin-button {
    margin-left: 10px
  }
  .button {
    text-align: left;
  }

</style>

