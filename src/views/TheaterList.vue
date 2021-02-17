<template>
  <div>
    <BaseHeader/>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated">
  <div class="container mt-5">
    <div class="row">
      <div class="mx-3 top_row_text">
        <h1>Theaters currently Open</h1>
      </div>
    </div>
    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4" v-for="(theater, index) in Theaters" :key="index">
        <div class="card h-100">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + theater.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{ theater.name}}</h4>
            <p class="card-text">{{theater.contact_number}}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary" @click="$router.push({name: 'TheaterDetail',
             params: { name: theater.name, contact_number: theater.contact_number,
              coordinates: theater.location.coordinates, image: theater.image}})">More Details</button>
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
    BaseHeader
  }, 
  computed: {
    Theaters() {
      return this.$store.getters.getAllTheaters
    },
  },
  created () {
    if(this.Theaters < 1){
      this.$store.dispatch('fetchAllTheaters')
    }
  },
}
</script>
<style lang="">
  
</style>