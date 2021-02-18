<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__slower">
  <div class="container">
    <div style="margin-top: 200px">
      <div class="row">
        <div class="col-12 text-center">
            <form class="form-signin" @submit.prevent="signup">
              <h1 class="h3 mb-3 font-weight-normal text_color">Register</h1>
              <label for="inputUsername" class="sr-only mb-3">Username</label>
              <input type="text" id="inputUsername" v-model="username" class="form-control mb-2" placeholder="Username" required autofocus>
              <label for="inputEmail" class="sr-only mb-3">Email</label>
              <input type="text" id="inputEmail" v-model="email" class="form-control mb-2" placeholder="Email Address" required autofocus>
              <label for="inputPassword1" class="sr-only">Password</label>
              <input type="password" id="inputPassword1" v-model="password1" class="form-control" placeholder="Password" required>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" v-model="password2" class="form-control" placeholder="Re-type Password" required>
              <button class="btn btn-lg btn-secondary btn-block" type="submit">Sign up</button>
            </form>
      </div>
      <div class="col text-center align-self-center w-25 p-3">
        <h5 class="text_color">Already have an account? <router-link :to="{ name: 'Login' }" class="nounderline">Signin</router-link></h5>
        <transition name='view' enter-active-class="animate__animated animate__bounceIn animate__faster">
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
export default {
  data() {
    return {
      email: '',
      username: '',
      password1: '',
      password2: '',
      show_error: false,
      error: '',
    }
  },
  methods: {
    async signup(){
      this.show_error = false
      try{
        let response = await axios.post('auth/registration/', 
                      { username: this.username, email: this.email, password1: this.password1, password2: this.password2}
                      )
        this.$store.commit('SET_USER', response.data.key)
        this.$router.push('/')
      }catch(error){
        if(error.message == "Network Error"){
          this.error = "Our services are currently offline. We are really sorry for the INKOVINIENSI :("
          this.show_error = true
        }else{
          if(error.response.data.username && error.response.data.password1){
            this.error = `The username ${this.username} is already taken, please try another one. `
            this.error += 'Also, make sure that the two passwords match and they contain atleast eight characters'
            this.show_error = true
          }else if(error.response.data.email){
            this.error = error.response.data.email[0]
            this.show_error = true
            this.password1 = ''
            this.password2 = ''
          }else if(error.response.data.username){
            this.error = error.response.data.username[0]
            this.show_error = true
            this.password1 = ''
            this.password2 = ''
          }else if(error.response.data.password1){
            this.error = 'Please make sure that the two passwords match and they contain atleast eight characters'
            this.show_error = true
            this.password1 = ''
            this.password2 = ''
          }else if(error.response.data.non_field_errors){
            this.error = 'Please make sure that the two passwords match'
            this.show_error = true
            this.password1 = ''
            this.password2 = ''
          }
          console.log(error.response.data)
        }
      }
    },
  },
}
</script>
<style>
.text_color{
  color: white;
}
</style>