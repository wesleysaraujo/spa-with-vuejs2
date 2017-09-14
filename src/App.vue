<template>
  <div id="app">
    <div class="container">
      <img src="./assets/logo.png">
      <router-view></router-view>
      <button type="button" name="button" class="btn btn-primary">Olá mundo</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
