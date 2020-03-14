<template>

  <div class="app">
    <router-view/>
    <Footer/>
   
  </div>
</template>

<script>
import Footer from './components/main/Footer'
export default {
  
  name: 'App',
  components: {
    Footer

   
  },
};
</script>
