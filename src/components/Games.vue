<template>
  <div>
    <h1>NFL Weekly Winners</h1>
    <h2>Select the winners for this week's games!</h2>
    <v-card v-bind:key="games.id" v-for="games in gameData">
      <v-card-title>{{games.awayTeam}} at {{games.homeTeam}}</v-card-title>
      <v-card-text>{{games}}</v-card-text>
      <v-card-text>Select the winner!</v-card-text>
      <v-card-actions>
        <v-btn text>{{games.awayTeam}}</v-btn>
        <v-btn text>{{games.homeTeam}}</v-btn>
      </v-card-actions>

    </v-card>

  </div>
</template>

<script>

import gameData from "../assets/data/gameData.json"

export default {
  name: 'Games',
  props: ["games"],
  data(){
    return {
      gameData 
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
