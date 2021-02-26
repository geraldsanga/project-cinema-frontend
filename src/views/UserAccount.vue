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
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
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
                  <form>
                    <div class="form-group">
                      <label for="InputEmail">Email address</label>
                      <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                      <label for="InputUsername">Username</label>
                      <input type="text" class="form-control" id="InputUsername" placeholder="Username">
                    </div>
                    <div class="form-group">
                      <label for="InputFirstName">First Name</label>
                      <input type="text" class="form-control" id="InputFirstName" placeholder="First Name">
                    </div>
                    <div class="form-group">
                      <label for="InputLastName">Last Name</label>
                      <input type="text" class="form-control" id="InputLastName" placeholder="Last Name">
                    </div>
                    <!-- <button type="submit" class="btn btn-secondary">Submit</button> -->
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-secondary">Save changes</button>
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
export default {
  components: {
    BaseHeader,
  },
  computed: {
    user(){
      return this.$store.getters.getUserInformation
    }
  }
}
</script>

<style>
  .user_account_card {
    margin-top: 200px;

  }
</style>