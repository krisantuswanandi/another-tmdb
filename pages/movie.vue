<script setup>
const { data } = await useFetch("/api/tmdb/movie/popular")
const titles = data.value.results.map((result) => result.title)
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <h1>Popular Movies</h1>
  <ul>
    <li v-for="i in titles" :key="i">{{ i }}</li>
  </ul>
</template>