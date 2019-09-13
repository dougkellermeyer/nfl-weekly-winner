<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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

.v-menu > .v-menu__content.menuable__content__active{
max-height: 304px; 
min-width: 411px; 
top: 60px !important; 
left: 0px !important; 
z-index: 8;
background-color: transparent;
}
</style>
