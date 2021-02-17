<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
  <div>
    <BaseHeader/>
   <div class="container">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8">

          <!-- Title -->
          <h1 class="mt-4 text_color">{{ name }}</h1>
          
          <hr>

          <!-- Date/Time -->
          <p class="text_color">Opened on January 1, 2019 at 12:00 PM</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + image" alt="movie-imageeeee">

          <hr>
          <!-- Theaters Showing the movie -->
            <div class="card my-4">
                <h5 class="card-header">{{ name }}(Direction)</h5>
                <div class="card-body">
                   <GmapMap
                      :center="{lat:coordinates[1], lng:coordinates[0]}"
                      :zoom="15"
                      map-type-id="terrain"
                      style="width: 700px; height: 300px"
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