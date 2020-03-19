<template>
  <div>
    {{chat()}}
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'test',
  data(){
    return{

    }
  },
  methods: {
    chat: function() {
      axios.get('/', 'http://localhost:3000').then(res => console.log(res))
    }
  }
}
</script>

<style>

</style>
