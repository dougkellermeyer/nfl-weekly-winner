<template>
  <div id="app">
    <Games v-bind:games="games"/>
  </div>
</template>

<script>
import Games from './components/Games.vue'

export default {
  name: 'app',
  components: {
    Games
  },
  data() {
    return {
      
      //hardcoded
      // games: [
      //   {
      //     id: 1,
      //     homeTeam: "New York Jets",
      //     awayTeam: "Cleveland Browns",
      //     location: "MetLife Stadium - East Rutherford, New Jersey",
      //     //TODO hard coded date and time for now, update later
      //     date: "Monday, 9/16",
      //     time: "8:15 PM EST",
      //     //TODO add weather via weather API
      //     weather: "TBD"
      //   },
      //   {
      //     id: 2,
      //     homeTeam: "Carolina Panthers",
      //     awayTeam: "Tampa Bay Buccaneers",
      //     location: "Bank of America - Charlotte, North Carolina",
      //     //TODO hard coded date and time for now, update later
      //     date: "Thursday, 9/12",
      //     time: "8:20 PM EST",
      //     //TODO add weather via weather API
      //     weather: "TBD"
      //   },
      //   {
      //     id: 3,
      //     homeTeam: "Baltimore Ravens",
      //     awayTeam: "Arizona Cardinals",
      //     location: "M&T Bank Stadium - Baltimore, Maryland",
      //     //TODO hard coded date and time for now, update later
      //     date: "Sunday, 9/15",
      //     time: "1:00 PM EST",
      //     //TODO add weather via weather API
      //     weather: "TBD"
      //   }
      // ]
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
