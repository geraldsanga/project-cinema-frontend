<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeOut">
  <div>
    <BaseHeader/>
   <div class="container">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8">

          <!-- Title -->
          <h1 class="mt-4">{{ name }}</h1>
          
          <hr>

          <!-- Date/Time -->
          <p>Premiered on January 1, 2019 at 12:00 PM</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + image" alt="movie-imageeeee">
          <!-- <img class="card-img-top" v-bind:src="'http://localhost:8000' + image" alt="movie-image"> -->

          <hr>
          <!-- Theaters Showing the movie -->
            <div class="card my-4">
                <h5 class="card-header">{{ name }}(Direction)</h5>
                <div class="card-body">
                   <GmapMap
                      :center="{lat:coordinates[1], lng:coordinates[0]}"
                      :zoom="17"
                      map-type-id="terrain"
                      style="width: 700px; height: 300px"
                      >
                      <GmapMarker
                        :key="index"
                        :position="{lat:coordinates[1], lng:coordinates[0]}"
                        :clickable="true"
                        :draggable="true"
                      />
                        <DirectionsRenderer
                          travelMode="DRIVING"
                          :origin="{lat:coordinates[1], lng:coordinates[0]}"
                          :destination="{lat:coordinates[1], lng:coordinates[0]}"
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
    }
  },
  mounted(){
    this.name = this.$route.params.name
    this.image = this.$route.params.image
    this.contact_number = this.$route.params.contact_number
    this.coordinates = this.$route.params.coordinates
    }
}
</script>
