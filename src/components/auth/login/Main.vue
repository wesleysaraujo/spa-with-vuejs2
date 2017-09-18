<template>
  <div id="auth" class="row-fluid">
    <div class="col-sm-4 col-sm-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title text-center">Bem vindo</h3>
        </div>
        <div class="panel-body">
          <form class="form-signin" method="post">
            <div class="form-group">
              <label for="email" class="control-label">E-mail</label>
              <input type="text" name="email" id="email" class="form-control" value="" v-model="auth.email">
            </div>
            <div class="form-group">
              <label for="password" class="control-label">Senha</label>
              <input type="text" name="password" id="password" class="form-control" value="" v-model="auth.password">
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" value="" v-model="auth.rememberme">
                Mantenha-me conectado
              </label>
              <label>
                | <a href="#">Sou novo por aqui</a>
              </label>
            </div>
            <button type="button" name="login_button" class="btn btn-primary btn-block">Acessar meu perfil</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'auth',
  data () {
    return {
      auth: {
        email: '',
        password: '',
        rememberme: false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
