<script setup lang="ts">
const movies = ref<Movie[]>([])
const tvs = ref<Tv[]>([])

const response = await Promise.all([
  useFetch<MovieResponse>("/api/tmdb/movie/popular"),
  useFetch<TvResponse>("/api/tmdb/tv/popular"),
])

if (response[0].data.value) {
  movies.value = response[0].data.value.results.slice(0, 5)
}

if (response[1].data.value) {
  tvs.value = response[1].data.value.results.slice(0, 5)
}
</script>

<template>
  <NuxtLink to="/search">search</NuxtLink>
  <h1>Popular Movies</h1>
  <ul>
    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    <li><NuxtLink to="/movie">see more</NuxtLink></li>
  </ul>
  <h1>Popular TV Shows</h1>
  <ul>
    <li v-for="tv in tvs" :key="tv.id">{{ tv.name }}</li>
    <li><NuxtLink to="/tv">see more</NuxtLink></li>
  </ul>
</template>