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