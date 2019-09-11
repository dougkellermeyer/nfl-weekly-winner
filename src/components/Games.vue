<template>
  <div>
    <h1>NFL Weekly Winners</h1>

    <h2>Select the winners for this week's games!</h2>

    <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="filterBy"
          :items="divisions"
          label="Division"
        ></v-select>
      </v-col>

       <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="filterBy"
          :items="conferences"
          label="Conferences"
        ></v-select>
      </v-col>

      <!-- <v-col class="d-flex" cols="12" sm="6">
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
      </v-col> -->
    </v-row>
  </v-container>

    <div class="container">
    <!-- provide the v-for with the method you want to sort by which is determined by usedList[this.filterBy] -->
    <v-card class="gameCards" v-bind:key="games.id" v-for="games in filterByDivision">
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
      filterBy: '',
      usedList: {},
      divisions: ['AFC East','AFC West','AFC North', 'AFC South', 'NFC East', 'NFC West', 'NFC South', 'NFC North'],
      conferences: ['AFC', 'NFC']
    }
  },
  computed: {
    filterByDivision(){
        if (!this.filterBy) {
          return this.gameData
        }

        return this.gameData.filter((game) => {
          return game.homeTeamDivision === this.filterBy || game.awayTeamDivision === this.filterBy;
        })
    },
    // filterByConference(){
      //filter logic here...
      //if(filterBy is a conference) {
      // usedList.computedValue = this.
      // }
      
      //send return value to usedList obj
      // usedList.computedValue = this.filterBy 

      //return game.homeTeamDivision === this.filterBy || game.awayTeamDivision === this.filterBy 
    // },

    // filterByDate(){
      //filter logic here...

      //send return value to usedList obj
      // usedList.computedValue = this.filterBy 
    // },
    // filterByTime(){
      //filter logic here...

      //send return value to usedList obj
      // usedList.computedValue = this.filterBy 
    // }
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
