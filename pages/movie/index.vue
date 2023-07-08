<script setup lang="ts">
const movies = ref<Movie[]>([])

const { data } = await useFetch<MovieList>("/api/tmdb/tv/popular")
if (data.value) {
  movies.value = data.value.results
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <h1>Popular Movies</h1>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      <NuxtLink :to="`/movie/${movie.id}`">{{ movie.title }}</NuxtLink>
    </li>
  </ul>
</template>
