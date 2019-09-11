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
          clearable = true
        ></v-select>
      </v-col>

       <!-- <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="filterBy"
          :items="conferences"
          label="Conferences"
        ></v-select>
      </v-col> -->

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

    <v-container>
    <!-- provide the v-for with the method you want to sort by which is determined by usedList[this.filterBy] -->
    <v-card class="gameCards" v-bind:key="games.id" v-for="games in filterByDivision">
    
      <!-- <v-card-text>{{games}}</v-card-text> -->
     <v-container id="gameInfo">
        <div id="matchUp">
          <v-card-text id="awayTeamBackground">{{games.awayTeam}}</v-card-text>
          <!-- <v-card-text>at</v-card-text> -->
          <v-card-text id="homeTeamBackground">{{games.homeTeam}}</v-card-text>
        </div>
        
        <div id="dateTime">
          <v-card-text>{{games.date}}</v-card-text>
          <v-card-text>{{games.time}}</v-card-text>
          <v-card-text>Location</v-card-text>
          <v-card-text>{{games.weather}}</v-card-text>
        </div>
      </v-container>

      <v-card-text id= "selectWinner">Select the winner!</v-card-text>

      <v-container class="winnerButtons">
        <v-card-actions>
          <v-btn onclick="document.getElementById('awayTeamBackground').style.backgroundColor = 'white'" text>{{games.awayTeam}}</v-btn>
          <v-btn onclick="document.getElementById('homeTeamBackground').style.backgroundColor = 'white'" text>{{games.homeTeam}}</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
    </v-container>

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly ;
}

div.v-card {
  background: lightgrey;
  margin-top: 25px;
  margin-bottom: 20px;
  width: 500px;
  height: auto;
}

/* .matchUp .v-card__text{
  text-align: left;
  padding: 0px;
  font-size: 1.25em;
} */

#gameInfo {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

#gameInfo .v-card__text{
  text-align: right;
  padding: 0px;
  margin-top: 8px;
  margin-right: 10px;
  color:black;
}

#matchUp .v-card__text{
  text-align: left;
  font-size: 1.1em;
}

#selectWinner {
  margin-bottom: 0px;
  font-size: 1em;
  color:black;
  padding: 0px;

}

.winnerButtons .v-btn {
  background-color: darkgrey;
  margin: 2px;
}

.winnerButtons {
  padding: 5px;
}

</style>
