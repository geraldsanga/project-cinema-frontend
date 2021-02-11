<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeOut">
  <div>
    <div style="margin-top: 200px">
    <div class="row">
      <div class="col">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
      <div class="col align-self-center">
        <p>Dont have an account yet? <router-link :to="{ name: 'Signup' }">Signup</router-link></p>
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