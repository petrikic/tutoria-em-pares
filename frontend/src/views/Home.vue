<template>
  <div>
      <Header/>
      <Nav/>
      <Login/>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/main/Nav'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import Login from '../components/Login'

export default {
  name: 'Home',
  components: {
    Nav,
    Header,
    Login,
    Footer
  }
}
</script>
