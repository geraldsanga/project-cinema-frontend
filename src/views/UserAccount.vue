<template>
  <div>
    <BaseHeader/>
    <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
      <div class="container user_account_card">
        <div class="card text-center">
            <div class="card-header">
              <h1>{{user.first_name}} {{user.last_name}}</h1>
            </div>
            <div class="card-body">
              <img src="../assets/logo.png" alt="User Image" class="rounded-circle">
              <h5 class="card-title"><b>{{user.username}}</b></h5>
              <p class="card-text">{{user.email}}</p>
          </div>
          <div class="card-footer pb-4">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-secondary mt-1" data-toggle="modal" data-target="#exampleModalCenter">
              Update Information
            </button>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Update Information</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="alert alert-success" role="alert" v-if="success">
                    Information successfully updated
                  </div>
                  <form @submit.prevent="update_user_info">
                    <div class="form-group">
                      <label for="InputEmail">Email address</label>
                      <input type="email" disabled class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
                    </div>
                    <div class="form-group">
                      <label for="InputUsername">Username</label>
                      <input type="text" class="form-control" id="InputUsername" placeholder="Username" v-model="user.username">
                      <small v-if="show_error" style="color: red"> {{user_error}}</small>
                    </div>
                    <div class="form-group">
                      <label for="InputFirstName">First Name</label>
                      <input type="text" class="form-control" id="InputFirstName" placeholder="First Name" v-model="user.first_name">
                    </div>
                    <div class="form-group">
                      <label for="InputLastName">Last Name</label>
                      <input type="text" class="form-control" id="InputLastName" placeholder="Last Name" v-model="user.last_name">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-secondary">Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>    
    </transition>
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
import axios from 'axios'
export default {
  name: "UserAccount",
  components: {
    BaseHeader,
  },
  data () {
    return {
      show_error: false,
      user_error: '',
      success: false,
    }
  },
  computed: {
    user(){
      return this.$store.getters.getUserInformation
    },
    user_token(){
      return this.$store.getters.getUserToken
    }
  },
  methods: {
    async update_user_info(){
      this.show_error = false
      this.success = false
      try{
        let response = await axios.patch('auth/user/', 
        {username: this.user.username, first_name: this.user.first_name, last_name: this.user.last_name},
        {headers: {'Authorization': `Token ${this.user_token}`}})
        this.$store.commit('SET_USER_INFO', response.data)
        this.success = true
      }catch(error){
        if(error.response.data.username){
          this.show_error = true,
          this.user_error = error.response.data.username[0]
        }
      }
    }
  }
}
</script>

<style>
  .user_account_card {
    margin-top: 200px;

  }
</style>