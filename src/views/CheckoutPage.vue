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
       <div class="row justify-content-center">
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
                <div class="modal-body my-5 text-center">
                  <p><strong>SCREEN</strong></p>
                  <v-stage ref="stage" :config="stageSize">
                    <v-layer>
                      <v-rect :config="{
                        height: 15,
                        width: 470,
                        fill: 'brown',
                        shadowBlur: 10
                      }"
                      />
                      <v-rect :config="{
                        y: 35,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A1',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 35,
                        x:75,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x:75,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A2',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 35,
                        x:150,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x: 150,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A3',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 35,
                        x:225,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x:225,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A4',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 35,
                        x:300,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x:300,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A5',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 35,
                        x:375,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x: 375,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A6',
                        fill: 'black'
                      }" />
                       <v-rect :config="{
                        y: 35,
                        x:450,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 35,
                        x: 450,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'A7',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 70,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B1',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:75,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 70,
                        x:75,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B2',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:150,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 70,
                        x:150,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B3',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:225,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 70,
                        x:225,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B4',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:300,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 70,
                        x:300,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B5',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:375,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 70,
                        x:375,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B6',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 70,
                        x:450,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 70,
                        x:450,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'B7',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 140,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C1',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:75,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                       <v-text ref="text" :config="{
                        y: 140,
                        x: 75,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C2',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:150,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 140,
                        x: 150,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C3',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:225,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 140,
                        x: 225,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C4',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:300,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 140,
                        x: 300,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C5',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:375,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 140,
                        x: 375,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C6',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 140,
                        x:450,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 140,
                        x: 450,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'C7',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D1',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        x:75,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 75,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D2',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        x:150,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 150,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D3',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        x:225,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 225,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D4',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        x:300,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 300,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D5',
                        fill: 'black'
                      }" />
                      <v-rect :config="{
                        y: 175,
                        x:375,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 375,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D6',
                        fill: 'black'
                      }" />
                      <v-rect
                        @click="changeNodeColor"
                        :config="{
                        y: 175,
                        x:450,
                        height: 20,
                        width: 20,
                        fill: '#808080',
                        shadowBlur: 5
                      }"
                      />
                      <v-text ref="text" :config="{
                        y: 175,
                        x: 450,
                        fontFamily: 'Ubuntu',
                        fontSize: 15,
                        text: 'D7',
                        fill: 'black'
                      }" />
                    </v-layer>
                  </v-stage>
                  <form @submit.prevent="update_user_info">
                    <div class="form-group mt-3">
                      <label for="exampleFormControlSelect1"><b>Select Seat</b></label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>A1</option>
                        <option>A2</option>
                        <option>A3</option>
                        <option>A4</option>
                        <option>A5</option>
                        <option>A6</option>
                        <option>A7</option>
                        <option>B1</option>
                        <option>B2</option>
                        <option>B3</option>
                        <option>B4</option>
                        <option>B5</option>
                        <option>B6</option>
                        <option>B7</option>
                        <option>C1</option>
                        <option>C2</option>
                        <option>C3</option>
                        <option>C4</option>
                        <option>C5</option>
                        <option>C6</option>
                        <option>C7</option>
                        <option>D1</option>
                        <option>D2</option>
                        <option>D3</option>
                        <option>D4</option>
                        <option>D5</option>
                        <option>D6</option>
                        <option>D7</option>
                      </select>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Check Availability</button>
                    </div>
                  </form>
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
  props: ['id', 'name', 'theater', 'hall', 'time'],
  data (){
    return {
      stageSize: {
        width: 600,
        height: 200,
      }
    }
  },
  methods: {
    changeNodeColor(event){
      event.currentTarget.attrs.fill = "ffffff"
    },
  }
}
</script>
<style>
  
</style>