<template>
<transition name='view' enter-active-class="animate__animated animate__fadeIn animate__slower">
  <div class="container mt-5">
    <div style="margin-top: 200px">
    <div class="row">
      <div class="col-12 text-center">
          <form class="form-signin" @submit.prevent="login">
            <h1 class="h3 mb-3 font-weight-normal text_color">Sign in</h1>
            <label for="inputEmail" class="sr-only">Username</label>
            <input type="text" id="inputEmail" class="form-control mb-2" placeholder="Username" v-model="username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" v-model="password" placeholder="Password" required >
            <button class="btn btn-lg btn-secondary btn-block text_color" type="submit">Sign in</button>
          </form>
      </div>
      <div class="col-12 text-center">
        <h5 class="text_color">Dont have an account yet? <router-link :to="{ name: 'Signup' }" class="nounderline">Signup</router-link></h5>
        <transition name='view' enter-active-class="animate__animated animate__fadeIn animate__faster">
            <div class="alert alert-danger" role="alert" v-if="show_error"> 
              {{error}} 
            </div>
        </transition>
      </div>
    </div>
  </div>
  </div>
</transition>
</template>
<script>
import axios from 'axios'
export default{
  data() {
    return {
      username: '',
      password: '',
      show_error: false,
      error: '',
    } 
    },
  methods: {
    async login(){
      this.show_error = false
      try{
        let response = await axios.post('auth/login/', 
                      { username: this.username, password: this.password}
                      )
        this.$store.commit('SET_USER', response.data.key)
        this.$router.push('/')
      }catch(error){
        if(error.message == "Network Error"){
          this.error = "Our services are currently offline. We are really sorry for the INKOVINIENSI :("
          this.show_error = true
        }else{
          this.error = error.response.data.non_field_errors[0]
          this.show_error = true
          this.password = ''
        }
      }
    },
  },
}
</script>
<style scoped>
.text_color{
  color: white;
}
.error_message{
  color: red;
}
</style>
