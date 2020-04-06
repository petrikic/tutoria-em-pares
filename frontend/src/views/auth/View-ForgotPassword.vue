<template>
<v-app>
  <Nav/>
  <ForgotPassword/>
</v-app>
</template>

<script>
import ForgotPassword from '../../components/auth/ForgotPassword'
import Nav from '../../components/main/Nav'
export default {
  components: {
    ForgotPassword,
    Nav
  }
};
</script>

<style>
</style>
