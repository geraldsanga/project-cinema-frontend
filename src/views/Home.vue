<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">

  <div>
    <BaseHeader/>
    <div class="container">
    <div id="carouselExampleControls" class="carousel slide mt-5" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 carousel_image" src="http://localhost:8000/media/movie_images/coming_to_america.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h1>Enjoy the world of movies</h1>
            <p>This is the best site you will ever see</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 carousel_image" src="http://localhost:8000/media/movie_images/spider_man_3.jpg" alt="First slide">
        </div> 
        <div class="carousel-item">
          <img class="d-block w-100 carousel_image"  src="http://localhost:8000/media/movie_images/the_revenant.jpg" alt="First slide">
          
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

    <!-- Page Features -->
    <div class="row my-3">
      <div class="mx-3 top_row_text">NOW PLAYING</div>
      <div class="ml-auto mx-3 top_row_text"><router-link :to="{ name: 'NowPlayingMovies' }" class="nounderline">SEE ALL</router-link></div>

    </div>
    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4 movie_car" v-for="(movie, index) in NowPlayingMovies" :key="index">
        <div class="card h-100">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <p class="card-text">{{movie.description.slice(0, 100)}}....</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary" @click="$router.push({name: 'MovieDetail',
             params: { id: movie.id, title: movie.title, description: 
             movie.description, image: movie.image,
             director: movie.director, premier_date: movie.premier_date
             }})">More Details</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of Now playing row -->

    <!-- start of opening this wekk row -->
    <div class="row my-3">
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
            <p class="card-text">{{movie.description.slice(0, 30)}}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary" @click="$router.push({name: 'MovieDetail',
             params: { title: movie.title, description: 
             movie.description, image: movie.image,
             director: movie.director, premier_date: movie.premier_date
             }})">More Details</button>
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
  color: white;
}
.carousel_image{
  height: 500px;
}
.movie_car{
  background-color: black;
}
</style>
