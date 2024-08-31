<script setup lang="ts">
import { useTRPC } from '@/useTRPC';
import router from '@/router';

const trpc = useTRPC();
trpc.createGame.useMutation();

async function onClick() {
  trpc.createGame.mutate().then((data) => {
    router.push(`/game/${data}`);
  })
}
</script>

<template>
  <button @click="onClick()">New Game</button>
</template>