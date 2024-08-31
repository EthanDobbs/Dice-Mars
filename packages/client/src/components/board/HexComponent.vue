<script setup lang="ts">
import { useTRPC } from '@/useTRPC';
import { Hex } from 'dice-mars-server/src/board/Hex';
import { TileType } from 'dice-mars-server/src/enumValues/TileType';
import { useRoute } from 'vue-router';
import { getCurrentInstance } from 'vue';

const props = defineProps<{hex: Hex}>();

const xPosition = `${(props.hex.x + props.hex.y / 2)*14}%`;
const yPosition = `${props.hex.y * -0.866 * 14}%`;

const tileClasses: Record<TileType, string> = {
  [TileType.EMPTY]: 'empty-hex',
  [TileType.CITY]: 'tile-city',
  [TileType.GREENERY]: 'tile-greenery',
  [TileType.OCEAN]: 'tile-ocean',
  [TileType.NUCLEAR_ZONE]: 'tile-nuclear',
  [TileType.ECOLOGICAL_ZONE]: 'tile-eco-zone',
  [TileType.MINING_AREA]: 'tile-mining',
  [TileType.NATURAL_PRESERVE]: 'tile-preserve',
  [TileType.LAVA_FLOWS]: 'tile-lava',
  [TileType.INDUSTRIAL_CENTER]: 'tile-industrial',
}

const classes = tileClasses[props.hex.tile];

const trpc = useTRPC();
trpc.playerInput.useMutation();

const gameId = useRoute().params.id as string;

async function onClick() {
  await trpc.playerInput.mutate({
    gameId: gameId, 
    x: props.hex.x, 
    y: props.hex.y,
    tile: TileType.CITY
  })
};
</script>

<template>
  <div :class="'hex ' + classes" @click="onClick()"/>
</template>

<style>
.hex {
  background-size: cover;
  position: absolute;
  width: 13%;
  height: 15%;
  opacity: 35%;
  margin-top: calc(50% - 7.5% + v-bind(yPosition));
  margin-left: calc(50% - 6.5% + v-bind(xPosition));
}
.empty-hex {
  background-image: url('/src/assets/tiles/EmptyHex.png');
}
.tile-city {
  background-image: url('/src/assets/tiles/city.png');
}
.tile-greenery {
  background-image: url('/src/assets/tiles/greenery.png');
}
.tile-ocean {
  background-image: url('/src/assets/tiles/ocean.png');
}
</style>