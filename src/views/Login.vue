<template>
<transition name='view' enter-active-class="animate__animated animate__fadeIn animate__slower">
  <div class="container mt-5">
    <div style="margin-top: 200px">
    <div class="row">
      <div class="col">
          <form class="form-signin" @submit.prevent="submit">
            <h1 class="h3 mb-3 font-weight-normal text_color">Sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required >
            <button class="btn btn-lg btn-secondary btn-block text_color" type="submit">Sign in</button>
          </form>
          
      </div>
      <div class="col align-self-center">
        <p class="text_color">Dont have an account yet? <router-link :to="{ name: 'Signup' }">Signup</router-link></p>
      </div>
    </div>
  </div>
  </div>
</transition>
</template>
<script>
</script>
<style scoped>
.text_color{
  color: white;
}
</style>
