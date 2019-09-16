<template>
  <div>

    <h1>Select the winners for this week's games!</h1>

<v-container>
  <v-row>
      <v-col cols="3" sm="5">
        <v-select
          v-model="filterBy"
          :clearable = true
          :items="divisions"
          label="Division"
          outlined
        ></v-select>
      </v-col>
    </v-row>
   
</v-container>

    <v-container>

    <v-card class="gameCards" v-bind:key="games.id" v-for="games in filterGames">
    
     <v-container id="gameInfo">
        <div id="matchUp">
          <v-card-text class="matchUpTeam">{{games.awayTeam}}</v-card-text>
          <v-card-text class="matchUpTeam">{{games.homeTeam}}</v-card-text>
        </div>
        
        <div id="dateTime">
          <v-card-text>{{games.date}}</v-card-text>
          <v-card-text>{{games.time}}</v-card-text>
          <v-card-text>{{games.location}}</v-card-text>
          <!-- weather API key 1fd143a7ec38c83bdc1726e9c0220d29 -->
          <v-card-text>{{weather}}</v-card-text>
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
import axios from 'axios'

export default {
  name: 'Games',
  data(){
    return {
      gameData,
      filterBy: '',
      usedList: {},
      divisions: ['AFC East','AFC West','AFC North', 'AFC South', 'NFC East', 'NFC West', 'NFC South', 'NFC North'],
      conferences: ['AFC', 'NFC'],
      weather: []
    }
  },

  created(){
    this.loadWeather();
  },

  methods: {
    loadWeather(){
      console.log(this.weather)
      const vm = this;

      let cities = [];

      //loop through cities and get weather data for each
      for (let i = 0; i < gameData.length; i ++){
          let loc = gameData[i].location
          let city = loc.substring(0, loc.indexOf(','))
          cities.push(city);
      }

      //I fully recognize this code isn't performant but I wanted to get the API info on the page

      for(let j = 0; j < cities.length; j++){
        let location = cities[j]
        console.log(location)

        axios.get('https://api.openweathermap.org/data/2.5/weather?q=+'+ location + '&units=imperial&appid=1fd143a7ec38c83bdc1726e9c0220d29')
          .then(function(response){
          vm.weather.push(Math.round(response.data.main.temp_max) + "/" + Math.round(response.data.main.temp_min) + " \xB0" + "F")
        })
        .catch(function(error){
          vm.weather = 'An error has occured' + error;
        })
      }

     

    },


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
    }
  }
}
</script>

<style scoped>


h1 {
  margin-top: 75px;
  margin-bottom: 20px;
  color: white;
}

.addClassWinner{
  background-color: lightgreen;
  border-radius: 5px;
  font-size: 1.25em;
  margin-top: 8px;
  padding: 5px;
  text-align: left;
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
