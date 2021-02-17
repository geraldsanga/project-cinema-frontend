<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
  <div>
    <BaseHeader/>
   <div class="container">

      <div class="row justify-content-between">

       <!-- Theater details -->
        <div class="col-lg-5">

          <!-- Title -->
          <h1 class="my-3 text_color">{{ name }}</h1>
          <p class="text_color"> Contact number: {{ contact_number }}</p>
          <hr>

          <!-- Date/Time -->
          <p class="text_color">Opened on January 1, 2019 at 12:00 PM</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + image" alt="theater-image">

          <hr>
      
        </div>

        <div class="col-lg-6 my-3">
          <h1 class="text_color">Movies showing today:</h1>
          <div class="col justify-content-between text_color">
            <div class="row">
              <a class="nounderline" href="">
                <div class="alert alert-dark" role="alert"> 
                  Avengers Endgame
                </div>
              </a> 
            </div>
            <div class="row">
              <a class="nounderline" href="">
                <div class="alert alert-dark" role="alert"> 
                  Fast and Furious 9
                </div>
              </a> 
            </div>
            <div class="row">
              <a class="nounderline" href="">
                <div class="alert alert-dark" role="alert"> 
                  Spider Man 3
                </div>
              </a> 
            </div>
            <div class="row">
              <a class="nounderline" href="">
                <div class="alert alert-dark" role="alert"> 
                  The Imitation Game
                </div>
              </a> 
            </div>
            <div class="row">
              <a class="nounderline" href="">
                <div class="alert alert-dark" role="alert"> 
                  Go Go Gerry
                </div>
              </a> 
            </div>
          </div>
        </div>
        <div class="col-lg-12">
            <div class="card my-4">
                <h5 class="card-header">{{ name }}(Direction)</h5>
                <div class="card-body">
                   <GmapMap
                      :center="{lat:coordinates[1], lng:coordinates[0]}"
                      :zoom="15"
                      map-type-id="terrain"
                      style="width: 1070px; height: 300px"
                      >
                      <!-- Marker for the Theater -->
                      <GmapMarker
                        :key="index"
                        :position="{lat:coordinates[1], lng:coordinates[0]}"
                        :clickable="true"
                      />
                      <!-- Marker to where the user is -->
                      <GmapMarker
                        ref="Your Location"
                        :key="index"
                        :position="{lat:user_coordinates.lat, lng:user_coordinates.lng}"
                        :clickable="true"
                      />
                      
                  </GmapMap>
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
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  components: {
    BaseHeader,
  },
  data(){
    return {
      name: '',
      image: '',
      coordinates: [],
      contact_number: '',
      user_coordinates: {
        lat: 0,
        lng: 0,
      }
    }
  },
  created() {
    this.$getLocation({})
        .then( coordinates => {
          this.user_coordinates = coordinates;
        })
  },
  mounted(){
    this.name = this.$route.params.name
    this.image = this.$route.params.image
    this.contact_number = this.$route.params.contact_number
    this.coordinates = this.$route.params.coordinates
    }
}
</script>
<style scoped>
  .text_color{
    color: white;
  }
</style>