<template>
  <div id="app">
    <MainHeader />
    <div class="container">
      <img src="./assets/logo.png">
      <router-view></router-view>
      <button type="button" name="button" class="btn btn-primary">Olá mundo</button>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/layouts/header/Main'

export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
