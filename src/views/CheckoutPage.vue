<template>
  <div>
   <BaseHeader/>
   <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
     <div class="container mt-4" style="background-color: #d4af37;">
       <div class="row justify-content-center">
         <div class="col-lg-7 col-md-6"><h1 style="color:black;">Booking for</h1></div>
        <div class="col-lg-7 col-md-6" style="color:black;">
          <h3>Movie: {{name}}</h3>
          <h3>Theater: {{theater}}</h3>
          <h3>Hall: {{hall}}</h3>
          <h4>Showtime: {{time}}</h4>
        </div>
      </div>
     </div>
   </transition>
   <hr>
     <div class="container rounded" style="color:">
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
                  <div class="alert alert-success" role="alert">
                    Seat booked
                  </div>
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
                  <form @submit.prevent="bookSeat">
                    <div class="form-group mt-3">
                      <label for="exampleFormControlSelect1"><b>Select Seat</b></label>
                      <select class="form-control" id="exampleFormControlSelect1" v-model="seat">
                        <option v-for="(seat, index) in freeSeats" :key="index">{{seat}}</option>
                      </select>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Book Seat</button>
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
      seat: '',
      stageSize: {
        width: 600,
        height: 200,
      }
    }
  },
  methods: {
    bookSeat(){
      let seat_info = {screening: this.id, seat: this.seat}
      this.$store.dispatch('bookSeat', seat_info)
    }
  },
  computed: {
    freeSeats(){
      return this.$store.getters.getFreeSeats
    }
  },
  mounted(){
    this.$store.dispatch('fetchFreeSeats', this.id)
    }
}
</script>
<style>
  
</style>