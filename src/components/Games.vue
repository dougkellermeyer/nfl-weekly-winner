<template>
  <div>
    <h1>NFL Weekly Winner</h1>

    <h2>Select the winners for this week's games!</h2>

    <v-container>
    <v-row align="center">
      <v-col cols="2" sm="5">
        <v-select
          v-model="filterBy"
          :clearable = "true"
          :items="divisions"
          label="Division"
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>

    <v-container>
    <!-- provide the v-for with the method you want to sort by which is determined by usedList[this.filterBy] -->
    <v-card class="gameCards" v-bind:key="games.id" v-for="games in filterGames">
    
      <!-- <v-card-text>{{games}}</v-card-text> -->
     <v-container id="gameInfo">
        <div id="matchUp">
          <v-card-text class="matchUpTeam">{{games.awayTeam}}</v-card-text>
          <!-- <v-card-text>at</v-card-text> -->
          <v-card-text class="matchUpTeam">{{games.homeTeam}}</v-card-text>
        </div>
        
        <div id="dateTime">
          <v-card-text>{{games.date}}</v-card-text>
          <v-card-text>{{games.time}}</v-card-text>
          <v-card-text>{{games.location}}</v-card-text>
          <!-- weather API key 1fd143a7ec38c83bdc1726e9c0220d29 -->
          <v-card-text>{{games.weather}}</v-card-text>
        </div>
      </v-container>

      <v-card-text id= "selectWinner">Select the winner!</v-card-text>

      <v-container class="winnerButtons">
        <v-card-actions>
          <v-btn @click="changeColorWinner($event)">{{games.awayTeam}}</v-btn>
          <v-btn @click="changeColorWinner($event)">{{games.homeTeam}}</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
    </v-container>

  </div>
</template>

<script>

import gameData from "../assets/data/gameData.json"
// var gameDataSorted = gameData.sort((a,b) => (a.date > b.date) ? 1 : -1);

export default {
  name: 'Games',
  data(){
    return {
      gameData,
      filterBy: '',
      usedList: {},
      divisions: ['AFC East','AFC West','AFC North', 'AFC South', 'NFC East', 'NFC West', 'NFC South', 'NFC North'],
      conferences: ['AFC', 'NFC'],
    }
  },

  methods: {
    changeColorWinner(event) {
      let winner = event.target.textContent;

      let cardNode = event.target.parentNode.parentNode.parentNode.parentNode;

      let matchUpArray = [...cardNode.children[0].querySelectorAll('.matchUpTeam')];  
        
        for (let matchUp of matchUpArray) {
          if(matchUp.textContent.includes(winner)){
            matchUp.classList.toggle("addClassWinner")
          } else{
            matchUp.classList.remove("addClassWinner")
          }
        }
    }
  },

  computed: {
    filterGames(){
        if (!this.filterBy) {
          return this.gameData;
        }

        return this.gameData.filter((game) => {
          return !this.filterBy || (game.homeTeamDivision === this.filterBy || game.awayTeamDivision === this.filterBy);
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

.addClassWinner{
  background-color: lightgreen;
  border-radius: 5px;
  font-size: 1.25em;
  margin-top: 8px;
  padding: 5px;
  text-align: left;
}

.addClassLoser{
  text-align: left;
  font-size: 1em;
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

.v-menu__content{
max-height: 304px; 
min-width: 411px; 
top: 60px !important; 
left: 0px !important; 
z-index: 8;
}

#selectDivision.override{
  top: 59px;
  left: 0px;
  background-color: red;
}

</style>
