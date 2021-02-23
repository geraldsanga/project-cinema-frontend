<template>
  <div>
    <BaseHeader/>
    <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
      <div class="container">
      <div id="carouselExampleControls" class="carousel slide mt-5" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 carousel_image" src="http://localhost:8000/media/movie_images/coming_to_america.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h1>Enjoy the world of movies</h1>
              <h4>Every Screening comes with a thrill that will send chills up your spine!!</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 carousel_image" src="http://localhost:8000/media/movie_images/the_imitation_game.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h1>Get the Best Screenings</h1>
              <h4>All the latest releases are here, it's only for you to decide!!</h4>
            </div>
          </div> 
          <div class="carousel-item">
            <img class="d-block w-100 carousel_image"  src="http://localhost:8000/media/movie_images/the_theory_of_everything.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h1>Academy Award-winning Movies</h1>
              <h4>See all films that have made history in mankind's history. What are you waiting for? Jump in and start navigating!!</h4>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    <!-- Now playing movies -->
    <div class="row my-3">
      <div class="mx-3 top_row_text">NOW PLAYING</div>
      <div class="ml-auto mx-3 top_row_text"><router-link :to="{ name: 'NowPlayingMovies' }" class="nounderline">SEE ALL</router-link></div>
    </div>

    <div v-if="NowPlayingMovies">
      <div class="row text-center">
        <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in NowPlayingMovies" :key="index">
          <div class="card h-100">
            <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
            <div class="card-body">
              <h4 class="card-title">{{movie.title}}</h4>
              <p class="card-text">{{movie.description.slice(0, 100)}}....</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary" @click="$router.push({path: `movie_detail/${movie.id}`})">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of Now playing row -->

    <!-- Opening this week row -->
    <div class="row my-3">
      <div class="mx-3 top_row_text">OPENING THIS WEEK</div>
      <div class="ml-auto mx-3 top_row_text"><router-link :to="{ name: 'OpeningThisWeekMovies' }" class="nounderline">SEE ALL</router-link></div>
    </div>
    <div v-if="OpeningThisWeekMovies.length">
      <div class="row text-center">
        <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in OpeningThisWeekMovies" :key="index">
          <div class="card h-100" >
            <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
            <div class="card-body">
              <h4 class="card-title">{{movie.title}}</h4>
              <p class="card-text">{{movie.description.slice(0, 100)}}.....</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary" @click="$router.push( {path: `movie_detail/${movie.id}`})">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mx-auto text-center" style="color: #ff0f0f">
      <h2>No movies will premier this week :(</h2>
    </div>
  </div>
</transition>
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue';
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
      this.$store.dispatch('fetchUserInfo')
      this.$store.dispatch('fetchAllCategories')
  },
};
</script>
<style>
.carousel_image{
  height: 500px;
}
</style>
