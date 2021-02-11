<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated animate__fadeOut">
  <div>
    <BaseHeader/>
   <div class="container">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8">

          <!-- Title -->
          <h1 class="mt-4">{{ title }}</h1>

          <!-- Author -->
          <p class="lead">
            by
            <a href="#">The Russo Brothers</a>
          </p>

          <hr>

          <!-- Date/Time -->
          <p>Premiered on January 1, 2019 at 12:00 PM</p>

          <hr>

          <!-- Preview Image -->
          <img class="img-fluid rounded" v-bind:src="'http://localhost:8000' + image" alt="" style="width:900px;height:300px;">

          <hr>

          <!-- Post Content -->
          <p class="lead">
            {{ description}}
          </p>
          <blockquote class="blockquote">
            <p class="mb-0">This universe is finite, its resources, finite… if life is left unchecked, life will cease to exist.</p>
            <footer class="blockquote-footer">Thanos
              <cite title="Source Title">Planet Amara</cite>
            </footer>
          </blockquote>

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
export default {
  components: {
    BaseHeader,
  },
  data(){
    return {
      title: '',
      description: '',
      image: ''
    }
  },
  mounted(){
    this.title = this.$route.params.title
    this.description = this.$route.params.description
    this.image = this.$route.params.image
    }
}
</script>
