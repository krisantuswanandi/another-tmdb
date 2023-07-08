<script setup lang="ts">
const movies = ref<Movie[]>([])
const tvs = ref<Tv[]>([])

const response = await Promise.all([
  useFetch<MovieList>("/api/tmdb/movie/popular"),
  useFetch<TvList>("/api/tmdb/tv/popular"),
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
    <li v-for="movie in movies" :key="movie.id">
      <NuxtLink :to="`/movie/${movie.id}`">{{ movie.title }}</NuxtLink>
    </li>
    <li><NuxtLink to="/movie">see more</NuxtLink></li>
  </ul>
  <h1>Popular TV Shows</h1>
  <ul>
    <li v-for="tv in tvs" :key="tv.id">
      <NuxtLink :to="`/tv/${tv.id}`">{{ tv.name }}</NuxtLink>
    </li>
    <li><NuxtLink to="/tv">see more</NuxtLink></li>
  </ul>
</template>
