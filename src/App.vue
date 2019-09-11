<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Games from './components/Games.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Games,
    Login
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
