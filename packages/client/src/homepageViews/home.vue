<script setup lang="ts">
import TitleText from '../components/TitleText.vue'
</script>

<template>
  <div id="route-view">
    <div class="button-container" @click="$router.push('/create-game')">
      <img src="/src/assets/dice/yellow.png" class="large"/>
      <TitleText :textSize="35" :id="2" format="yellow">NEW GAME</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/yellow.png" class="large"/>
      <TitleText :textSize="35" :id="3" format="yellow">JOIN GAME</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/green.png" class="medium"/>
      <TitleText :textSize="26" :id="4" format="green">HOW TO PLAY</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/green.png" class="medium"/>
      <TitleText :textSize="26" :id="5" format="green">CHANGELOG</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/blue.png" class="small"/>
      <TitleText :textSize="22" :id="6" format="blue">BGG FORUMS</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/blue.png" class="small"/>
      <TitleText :textSize="22" :id="7" format="blue">DISCORD</TitleText>
    </div>
    <div class="button-container">
      <img src="/src/assets/dice/blue.png" class="small"/>
      <TitleText :textSize="22" :id="8" format="blue">ABOUT</TitleText>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style>
.button-container {
  padding: 10px;
  width: min-content;
  background: linear-gradient(135deg, rgba(128, 128, 128, 0.35), rgba(200, 200, 200, 0.35), rgba(128, 128, 128, 0.35));
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
}

.button-container:hover {
  background: linear-gradient(135deg, rgba(128, 128, 128, 0.6), rgba(200, 200, 200, 0.6), rgba(128, 128, 128, 0.6));
}

.large {
  height: 1.5em;
  filter: drop-shadow(0px 0px 5px rgb(103, 46, 5));
}
.medium {
  height: 1.35em;
  filter: drop-shadow(0px 0px 5px rgb(3, 67, 34));
}
.small {
  height: 1.2em;
  filter: drop-shadow(0px 0px 5px rgb(11, 44, 115));
}
</style>

<!--New Game, Join Game, How to Play, Changelog, BGG Forums, Discord, about-->

