<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h5>Vue 개발자의 블로그입니다.</h5>
    <p> - Vue로 만들어보는 블로그입니다! - </p>
  </div>

  <List :blogData="blogData"/>

</template>

<script>
import List from './components/List.vue'
import blog from './assets/blog'

export default {
  name: 'App',

  components: {
    List: List
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
