<template>
  <div>
    <BaseHeader/>
    <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated">
      <div class="container mt-5">
        <div v-if="all_movies.length">
          <div class="container row">
              <h1 style="color: white">Movies Belonging In This Category are:</h1>
          </div>
          <div class="row text-center">
            <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in all_movies" :key="index">
            <div class="card h-100">
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
        <div v-else>
            <h2 class="mt-5" style="color:red;">Movies for this category are yet to be added :(</h2>
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
      let movies = [...this.NowPlayingMovies, ...this.OpeningThisWeekMovies]
      let category_movies = movies.filter(movie => movie.category == this.id)
      return category_movies
    }
  },
}
</script>
<style>
  
</style>