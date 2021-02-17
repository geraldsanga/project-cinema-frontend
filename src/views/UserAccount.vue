<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">

  <div>
    <BaseHeader/>
    <div class="container user_account_card">
      <div class="card text-center">
          <div class="card-header">
            <h1>Gerard Sanga</h1>
          </div>
          <div class="card-body">
            <img src="../assets/logo.png" alt="User Image" class="rounded-circle">
            <h5 class="card-title"><b>gerrysanga</b></h5>
            <p class="card-text">0745365220</p>
            <p class="card-text">gerrysanga33@protonmail.ch</p>
        </div>
        <div class="card-footer pb-4">
        </div>
      </div>
    </div>    
  </div>
</transition>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  components: {
    BaseHeader,
  }
}
</script>

<style>
  .user_account_card {
    margin-top: 200px;

  }
</style>