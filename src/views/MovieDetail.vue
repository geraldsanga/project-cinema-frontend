<template>
  <div>
    <BaseHeader/>
    <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeIn">
    <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="mt-4 text_color">{{ movie.title }}</h1>
            <p class="lead text_color">
              Directed by
              <a href="#">{{ movie.director }}</a>
            </p>
            <hr>
            <p class="text_color">Premiered on {{ movie.premier_date }}</p>
            <hr>
            <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + movie.image" alt="" style="width:900px;height:300px;">
            <hr>
            <p class="lead text_color">
              {{ movie.description}}
            </p>
            <hr>
              <div v-if="screenings.length">
                <div class="card my-4" v-for="(screening, index) in screenings" :key="index">
                  <h5 class="card-header">{{ screening.hall }} - {{ screening.theater }}</h5>
                  <div class="card-body">
                    <h5 class="card-title">Showing on: {{ screening.start_time }} hrs</h5>
                    <button class="btn btn-secondary" @click="$router.push( 
                      {path: `/checkout_movie/${screening.id}/${screening.movie}/${screening.theater}/${screening.hall}/${screening.start_time}`})">Book a Ticket</button>
                  </div>
                </div>
              </div>
              <div v-else-if="screenings.length == 0" class="mx-auto text-center" style="color: #ff0f0f">
                <h2 class="mt-5">There are currently no screenings for this movie</h2>
              </div>
              <div v-else>
                <div class="spinner-border text-warning" role="status">
                  <span class="sr-only">Loading...</span>
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
  name: "MovieDetail",
  components: {
    BaseHeader,
  },
  props: ['id'],
  computed: {
    movie(){
      return this.$store.getters.getMovieById(this.id) 
    },
    screenings(){
      return this.$store.getters.getScreenings
    }
  },
  created(){
    this.$store.dispatch('fetchScreenings', this.id)
  }
}
</script>
<style>
  .text_color{
    color: white;
  }
</style>