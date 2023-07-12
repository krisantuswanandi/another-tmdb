<script setup lang="ts">
const movies = ref<Movie[]>([])
const tvs = ref<Tv[]>([])

const response = await Promise.all([
  useFetch<MovieList>("/api/tmdb/movie/popular"),
  useFetch<TvList>("/api/tmdb/tv/popular"),
])

if (response[0].data.value) {
  movies.value = response[0].data.value.results.slice(0, 5).map(result => ({
    ...result,
    media_type: "movie",
  }))
}

if (response[1].data.value) {
  tvs.value = response[1].data.value.results.slice(0, 5).map(result => ({
    ...result,
    media_type: "tv",
  }))
}
</script>

<template>
  <NuxtLink to="/search">search</NuxtLink>
  <div>
    <MediaList title="Popular Movies" :list="movies" />
    <NuxtLink to="/movie">see more</NuxtLink>
  </div>
  <div>
    <MediaList title="Popular TV Shows" :list="tvs" />
    <NuxtLink to="/tv">see more</NuxtLink>
  </div>
</template>
