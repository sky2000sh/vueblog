<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vueblog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">List</a>
          <a class="nav-link" href="#">Detail</a>
          <!-- <a class="nav-link disabled">Disabled</a> -->
        </div>
      </div>
    </div>
  </nav>

  <router-link to="/hometitle">홈베너</router-link>
  <br>
  <router-link to="/list">리스트페이지</router-link>

  <!-- <List :blogData="blogData"/> -->
  <div class="mt-4">
    <router-view :blogData="blogData"></router-view>
  </div>

</template>

<script>
// import List from './components/List.vue'
import blog from './assets/blog'

export default {
  name: 'App',

  components: {
    // List: List
  },

  data() {
    return {
      blogData: blog
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
