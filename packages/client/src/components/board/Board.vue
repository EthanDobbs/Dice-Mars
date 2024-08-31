<script setup lang="ts">
import { useRoute } from 'vue-router';
import HexComponent from './HexComponent.vue';
import { useTRPC } from '@/useTRPC';

const trpc = useTRPC();
trpc.getGame.useMutation();

let board: any = [];
await trpc.getGame.mutate(useRoute().params.id as string).then((data) => {
  board = data.board;
}).catch((err) => console.log(err))
</script>

<template>
  <div class="mars-board">
    <HexComponent v-for="hex in board" :hex="hex"/>
  </div>
</template>

<style>
.mars-board {
  background: url("/src/assets/images/Mars.png");
  width: 400px;
  height: 400px;
  background-size: cover;
  position: relative;
}
</style>