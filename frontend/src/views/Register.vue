<template>
  <div>
    <Nav/>
    <Registro/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '../components/main/Nav'
import Registro from '../components/Registro'
import Footer from '../components/main/Footer'
export default {
  name: 'Register',
  components: {
    Registro,
    Nav,
    Footer
  }
}
</script>

