<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeIn">
  <div>
    <BaseHeader/>
   <div class="container">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8">

          <!-- Title -->
          <h1 class="mt-4 text_color">{{ movie.title }}</h1>

          <!-- Author -->
          <p class="lead text_color">
             Directed by
            <a href="#">{{ movie.director }}</a>
          </p>

          <hr>

          <!-- Date/Time -->
          <p class="text_color">Premiered on {{ movie.premier_date }}</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + movie.image" alt="" style="width:900px;height:300px;">

          <hr>

          <!-- Post Content -->
          <p class="lead text_color">
            {{ movie.description}}
          </p>
          <hr>
          <!-- Theaters Showing the movie -->
            <!-- <div class="card my-4">
                <h5 class="card-header">Aura Mall</h5>
                <div class="card-body">
                   <h5 class="card-title">04:50</h5>
                   <p class="card-text">Fire - Upanga</p>
                   <a href="#" class="btn btn-primary">Book a Ticket</a>
                </div>
            </div> -->
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
export default {
  components: {
    BaseHeader,
  },
  props: ['id'],
  computed: {
    movie(){
      return this.$store.getters.getMovieById(this.id) 
    }
  },
}
</script>
<style>
  .text_color{
    color: white;
  }
</style>