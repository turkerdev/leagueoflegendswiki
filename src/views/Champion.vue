<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const championId = route.params.championid;
const championData = (
  await (
    await fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${championId}.json`
    )
  ).json()
).data[championId];
console.log(championData);
</script>

<template>
  <h1 class="text-3xl text-center">{{ championData.name }}</h1>
  <p class="text-lg m-4 bg-white bg-opacity-10 p-2 rounded-xl">
    {{ championData.lore }}
  </p>
  <div class="flex flex-wrap gap-4 justify-center">
    <div class="relative" v-for="skin in championData.skins">
      <img
        width="128"
        :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skin.num}.jpg`"
      />
      <p
        class="absolute text-center bottom-6 bg-black text-sm mx-1 bg-opacity-20 w-full"
      >
        {{ skin.name }}
      </p>
    </div>
  </div>
</template>
