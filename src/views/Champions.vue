<script setup>
const res = await (
  await fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json"
  )
).json();
console.log(res);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">
    <router-link
      class="cursor-pointer"
      :to="`/champion/${champion.id}`"
      v-for="champion in res.data"
    >
      <div class="relative">
        <img
          width="196"
          :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`"
        />
        <p
          class="absolute text-center bottom-6 font-bold text-xl bg-white bg-opacity-20 w-full"
        >
          {{ champion.name }}
        </p>
      </div>
    </router-link>
  </div>
</template>
