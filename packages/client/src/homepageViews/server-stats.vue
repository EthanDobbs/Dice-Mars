<script setup lang="ts">
import { ref } from 'vue';
import { useTRPC } from '@/useTRPC';

var num = ref(5);

const trpc = useTRPC();
const data = trpc.multiply.useQuery(num.value);

async function onClick() {
  const input = document.getElementById('num');
  if (input instanceof HTMLInputElement) {
    await trpc.multiply.query(num.value).then((data) => {
      console.log(data);
    });
  }
};
</script>

<template>
  <div id="route-view">
    <div class="test" @click="onClick()" ref="test"></div>
    <input type="number" id="num" v-model="num">
  </div>
</template>

<style>
.test {
  width: 50px;
  height: 50px;
  background-color: white;
}
</style>