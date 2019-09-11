<template>
  <div>
    <h1>NFL Weekly Winners</h1>

    <h2>Select the winners for this week's games!</h2>
    <h2>Add filter (team, division, day, time, etc.) component here</h2>

    <div class="container">
    <input type="text" v-model="search" placeholder = "Search"/>
    <v-card class="gameCards" v-bind:key="games.id" v-for="games in filteredGames">
      <v-card-title>{{games.awayTeam}} at {{games.homeTeam}}</v-card-title>
      <v-card-text>{{games}}</v-card-text>
      <v-card-text>Select the winner!</v-card-text>
      <v-card-actions>
        <v-btn text>{{games.awayTeam}}</v-btn>
        <v-btn text>{{games.homeTeam}}</v-btn>
      </v-card-actions>

    </v-card>
    </div>

  </div>
</template>

<script>

import gameData from "../assets/data/gameData.json"

export default {
  name: 'Games',
  props: ["games"],
  data(){
    return {
      gameData,
      search: ''
    }
  },
  computed: {
    filteredGames(){
        if (!this.search) {
          return this.gameData
        }
        return this.games.filter((game) => {
          return game.homeTeam.match(this.search);
        })
    }
  }
}
</script>

<style scoped>

h1 {
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

div.v-card {
  background: lightgrey;
  margin-top: 25px;
  margin-bottom: 20px;
  width: 500px;
  height: auto;
}

</style>
