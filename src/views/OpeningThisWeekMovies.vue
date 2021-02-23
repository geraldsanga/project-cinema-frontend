<template>
  <div>
    <BaseHeader/>
    <div class="container mt-5">
      <div class="container row">
        <h1 style="color: white">Movies Opening This Week:</h1>
      </div>
      <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
        <div v-if="OpeningThisWeekMovies.length">
          <div class="row text-center">
            <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in OpeningThisWeekMovies" :key="index">
              <div class="card h-100">
                <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
                <div class="card-body">
                  <h4 class="card-title">{{ movie.title }}</h4>
                  <p class="card-text">{{ movie.description.slice(0, 100) }}.....</p>
                </div>
                <div class="card-footer">
                  <button class="btn btn-secondary" @click="$router.push({path: `movie_detail/${movie.id}`})">More Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mx-auto text-center" style="color: #ff0f0f">
          <h2 class="mt-5">No movies will premier this week :(</h2>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  components: {
    BaseHeader
  },
   computed: {
    OpeningThisWeekMovies() {
      return this.$store.getters.getOpeningThisWeekMovies
    }
  }
}
</script>
<style>
  
</style>