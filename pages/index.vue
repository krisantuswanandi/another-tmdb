<script setup>
const response = await Promise.all([
  useFetch("/api/tmdb/movie/popular"),
  useFetch("/api/tmdb/tv/popular"),
])
const movies = response[0].data.value.results.slice(0, 5).map((result) => result.title)
const tvShows = response[1].data.value.results.slice(0, 5).map((result) => result.name)
</script>

<template>
  <NuxtLink to="/search">search</NuxtLink>
  <h1>Popular Movies</h1>
  <ul>
    <li v-for="i in movies" :key="i">{{ i }}</li>
    <li><NuxtLink to="/movie">see more</NuxtLink></li>
  </ul>
  <h1>Popular TV Shows</h1>
  <ul>
    <li v-for="i in tvShows" :key="i">{{ i }}</li>
    <li><NuxtLink to="/tv">see more</NuxtLink></li>
  </ul>
</template>