<template>
  <div class="mt-2 mx-5 border rounded sticky-top">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #35a79c;"
    >
      <router-link :to="{ name: 'Home' }" class="navbar-brand">Project Cinema</router-link>
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
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-auto mr-5">
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Movies</a
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'TheaterList' }" class="nav-link">Theaters</router-link>
          </li>
          <li class="nav-item">
            
          <div class="dropdown show">
          <a class="nav-link dropdown-toggle nounderline" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link :to="{ name: 'UserAccount' }" class="dropdown-item">Account</router-link>
              <router-link :to="{ name: 'Login' }" class="dropdown-item">Logout</router-link>
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
  mounted() {
    
  }
};
</script>
<style>
ul {
  font-weight: bold;
}
</style>
