<template>
  <div class="mt-2 mx-5 border rounded sticky-top header_color">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #d4af37;"
    >
      <router-link :to="{ name: 'Home' }" class="navbar-brand nav_text">Project Cinema</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Movie or Theater"
            aria-label="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit" style="color: #ffffff">
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-auto mr-5">
          <div class="dropdown show">
          <a class="nav-link dropdown-toggle nounderline" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__slower" leave-active-class="animate__animated">
          <div class="dropdown-menu">
              <router-link v-for="(category, index) in categories" :key="index" :to="{ path: `/movie_in_category/${category.id}` }" class="dropdown-item">{{category.name}}</router-link>
          </div>
          </transition>
          </div>
          <li class="nav-item show">
            <router-link :to="{ name: 'TheaterList' }" class="nav-link nav_text">Theaters</router-link>
          </li>
          <li class="nav-item">
            
          <div class="dropdown show">
          <a class="nav-link dropdown-toggle nounderline" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </a>
          <div class="dropdown-menu">
              <router-link :to="{ name: 'UserAccount' }" class="dropdown-item">Account</router-link>
              <button @click="logout" class="dropdown-item">Logout</button>
          </div>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getAllCategories
    }
  }
};
</script>
<style>
ul {
  font-weight: bold;
}
.nav_text{
  color: black;
  font-weight: bold;
}
.header_color{
  background-color: black;
}
</style>
