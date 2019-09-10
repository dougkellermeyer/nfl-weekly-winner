<template>
  <div>
    <h1>NFL Weekly Winners</h1>
    <h3>Select the winners for this week's games!</h3>
    <div v-bind:key="games.id" v-for="games in gameData">
      <h3>{{games[0]}}</h3>

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
