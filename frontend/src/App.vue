<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/main/Nav'
import Footer from './components/main/Footer'
export default {
  name: 'App',
  components: {
    Footer,
    Nav
  }
};
</script>
