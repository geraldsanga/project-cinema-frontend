<template>
  <div>
   <BaseHeader/>
   <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
     <div class="container mt-4" style="background-color: #d4af37;">
       <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card mt-3">
            <!-- <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image"> -->
            <img class="mt" src="http://localhost:8000/media/movie_images/the_theory_of_everything.jpg" alt="Movie Image">
          </div>
        </div>
        <div class="col-lg-7 col-md-6 mt-3" style="color:black;">
          <h3>Movie: {{name}}</h3>
          <h3>Theater: {{theater}}</h3>
          <h3>Hall: {{hall}}</h3>
          <h4>Showtime: {{time}}</h4>
        </div>
      </div>
     </div>
   </transition>
   <hr>
     <div class="container" style="color:">
       <div>
         <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
            Choose Seat
         </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Please Choose a Seat you want to book</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body my-5">
                  <b style="color:green">TODO: CANVAS TO DISPLAY SEATS</b>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Book Seat</button>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div>
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  components: {
    BaseHeader,
  },
  props: ['id', 'name', 'theater', 'hall', 'time']
}
</script>
<style>
  
</style>