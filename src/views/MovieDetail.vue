<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeIn">
  <div>
    <BaseHeader/>
    <p>{{Screenings}}</p>
   <div class="container">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8">

          <!-- Title -->
          <h1 class="mt-4 text_color">{{ title }}</h1>

          <!-- Author -->
          <p class="lead text_color">
             Directed by
            <a href="#">{{ director }}</a>
          </p>

          <hr>

          <!-- Date/Time -->
          <p class="text_color">Premiered on {{ premier_date }}</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + image" alt="" style="width:900px;height:300px;">

          <hr>

          <!-- Post Content -->
          <p class="lead">
            {{ description}}
          </p>
          <hr>
          <!-- Theaters Showing the movie -->
            <div class="card my-4">
                <h5 class="card-header">Aura Mall</h5>
                <div class="card-body">
                   <h5 class="card-title">04:50</h5>
                   <p class="card-text">Fire - Upanga</p>
                   <a href="#" class="btn btn-primary">Book a Ticket</a>
                </div>
            </div>
          <!-- End of theaters showing the movie -->
        </div>
      </div>
      <!-- /.row -->

    </div>
  </div>
</transition>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
import axios from 'axios'
export default {
  components: {
    BaseHeader,
  },
  data(){
    return {
      id: 0,
      title: '',
      description: '',
      image: '',
      director: '',
      premier_date: '',
    }
  },
  computed: {
    screenings(){
      return this.getters.getCurrentMovieScreenings
    }
  },
  methods: {
    async fetchScreenings (){
      let screenings = await axios.get(`core/get_movie_screenings/${this.id}`)
      return screenings
    }
  },
  created(){
    this.id = this.$route.params.id
    this.title = this.$route.params.title
    this.premier_date = this.$route.params.premier_date
    this.director = this.$route.params.director
    this.description = this.$route.params.description
    this.image = this.$route.params.image
    },
}
</script>
<style>
  .text_color{
    color: white;
  }
</style>