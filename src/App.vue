<template>
  <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container">
      <a class="navbar-brand" href="#">
        <h1>API</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">RandomUser</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/pokemongo">PokemonGo</RouterLink>
          </li>
          <!-- <li class="nav-item">
              <RouterLink class="nav-link" href="#">VeeValidate</RouterLink>
            </li> -->
        </ul>
      </div>
    </div>
  </nav>

  <RouterView></RouterView>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: {
    RouterLink,
    RouterView
  }
}
</script>
