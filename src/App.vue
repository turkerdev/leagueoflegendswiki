<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <Suspense>
    <router-view />
  </Suspense>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: radial-gradient(
    circle farthest-corner at 32.7% 82.7%,
    rgb(5 6 14) 8.3%,
    rgba(15, 1, 15, 1) 79.4%
  );
  color: white;
}
</style>
