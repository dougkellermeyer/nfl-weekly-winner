<template>
  <div>
    <h1>NFL Weekly Winners</h1>

    <h2>Select the winners for this week's games!</h2>
    <h2>Add filter (team, division, day, time, etc.) component here</h2>

    <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Teams"
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Division"
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Day"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Time"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>

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
  data(){
    return {
      gameData,
      search: '',
      items: ['Cleveland Browns', 'Pittsburgh Steelers', 'Cincinatti Bengals', 'Baltimore Ravens']
    }
  },
  computed: {
    filteredGames(){
        if (!this.search) {
          return this.gameData
        }
        return this.gameData.filter((game) => {
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
