<template>
  <div>
    <BaseHeader/>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated">
  <div class="container mt-5">
    <div class="container row">
        <h1 style="color: white">Movies Belonging In This Category are:</h1>
    </div>
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in all_movies" :key="index">
        <div class="card h-100" v-if="movie.category == id">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <p class="card-text">{{movie.description.slice(0, 100)}}......</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary" @click="$router.push({name: 'MovieDetail',
             params: { id: movie.id, title: movie.title, description: movie.description,
              image: movie.image, director: movie.director, premier_date: movie.premier_date}})">More Details</button>
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
  props: ['id'],
  components: {
    BaseHeader
  }, 
  computed: {
    NowPlayingMovies() {
      return this.$store.getters.getNowPlayingMovies
    },
    OpeningThisWeekMovies(){
      return this.$store.getters.getOpeningThisWeekMovies
    },
    all_movies(){
      return [...this.NowPlayingMovies, ...this.OpeningThisWeekMovies]
    }
  },
}
</script>
<style>
  
</style>