<script setup lang="ts">
import { RouterView } from 'vue-router';
import TitleText from '../components/TitleText.vue'
</script>

<template>
  <div class="homepage" id="main-container">
    <header>
      <TitleText :textSize="45" :id="1" format="main">TERRAFORMING MARS</TitleText>
      <svg id="subtitle">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="limegreen" />
            <stop offset="100%" stop-color="green" />
          </linearGradient>
        </defs>
        <text y="1em" id="subtitle-svg" fill="url(#gradient)">THE DICE GAME</text>
      </svg>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create-game">Create Game</RouterLink>
        <RouterLink to="/cards-list">Cards List</RouterLink>
        <RouterLink to="/server-stats">Stats</RouterLink>
      </nav>
    </header>
    <main>
      <div class="vignette"></div>
      <RouterView/>
    </main>
  </div>
</template>