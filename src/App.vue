<template>
  <div id="app">
    <v-app>
    <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

body {
  background-color: #638093;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #638093;
}

</style>
