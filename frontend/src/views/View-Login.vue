<template>
  <div>
    <header/>
    <login/>
  </div>
</template>

<script>

import Login from '../components/Login'
import Header from '../components/main/Header'
export default {
  name: 'View-Login',
  components: {
    Login,
    Header
  }
}
</script>
