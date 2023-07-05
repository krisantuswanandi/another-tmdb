<script setup>
const { data } = await useFetch("/api/tmdb/tv/popular")
const titles = data.value.results.map((result) => result.name)
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <h1>Popular TV Shows</h1>
  <ul>
    <li v-for="i in titles" :key="i">{{ i }}</li>
  </ul>
</template>