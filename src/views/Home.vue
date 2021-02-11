<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeOut">

  <div>
    <BaseHeader/>
    <div class="container">
    <!-- Jumbotron Header -->
    <header class="jumbotron my-4" style="background-color: #83d0c9">
      <h1 class="display-3">Welcome to Project Cinema!</h1>
      <p class="lead">Get the best of all latest movies by visiting our catalog. We show all genres namely Action movies, Love Stories and many more. 
        Feel Free to navigate the site. You can locate a theater that is close to your location and book your tickets now. It's an honour serving you</p>
    </header>

    <!-- Page Features -->
    <div class="row">
      <div class="mx-3 top_row_text">NOW PLAYING</div>
      <div class="ml-auto mx-3 top_row_text"><router-link :to="{ name: 'NowPlayingMovies' }" class="nounderline">SEE ALL</router-link></div>

    </div>
    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in NowPlayingMovies" :key="index">
        <div class="card h-100">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <p class="card-text">{{movie.description}}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary" @click="$router.push({name: 'MovieDetail',
             params: { title: movie.title, description: movie.description, image: movie.image},})">More Details</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of Now playing row -->

    <!-- start of opening this wekk row -->
    <div class="row mt-3">
      <div class="mx-3 top_row_text">
        <b>OPENING THIS WEEK</b>
      </div>
      <div class="ml-auto mx-3 top_row_text"><router-link :to="{ name: 'OpeningThisWeekMovies' }" class="nounderline">SEE ALL</router-link></div>

    </div>
    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in OpeningThisWeekMovies" :key="index">
        <div class="card h-100">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <p class="card-text">{{movie.description}}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary" @click="$router.push({name: 'MovieDetail',
             params: { title: movie.title, description: movie.description, image: movie.image},})">More Details</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  </div>
</transition>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue';
// import { mapGetters } from 'vuex'
export default {
  components: {
    BaseHeader
  },
  computed: {
    NowPlayingMovies() {
      return this.$store.getters.getNowPlayingMovies
    },
    OpeningThisWeekMovies(){
      return this.$store.getters.getOpeningThisWeekMovies
    }
  },
  created () {
    if(this.NowPlayingMovies < 1){
      this.$store.dispatch('fetchNowPlayingMovies')
      this.$store.dispatch('fetchOpeningThisWeekMovies')
    }
  },
};
</script>
<style>
.top_row_text{
  font-weight: bold;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
