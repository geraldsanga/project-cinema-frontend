<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeOut">
  <div class="wrapper">
    <div style="margin-top: 200px">
      <div class="row">
        <div class="col">
            <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
              <label for="inputEmail" class="sr-only mb-3">Username</label>
              <input type="text" id="inputEmail" class="form-control" placeholder="Username" required autofocus>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Re-type Password" required>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
      </div>
      <div class="col align-self-center">
        <p>Alread have an account? <router-link :to="{ name: 'Login' }">Signin</router-link></p>
      </div>
    </div>
  </div>
  </div>
</transition>
</template>
<script>
export default {
  
}
</script>
<style>
body{
  background-color: #65c3ba;
}
</style>