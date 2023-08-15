<script setup lang="ts">
const movies = ref<Movie[]>([])

const { data } = await useFetch<MovieList>("/api/tmdb/movie/popular")
if (data.value) {
  movies.value = data.value.results.map(result => ({
    ...result,
    media_type: "movie",
  }))
}
</script>

<template>
  <MediaList title="Popular Movies" :list="movies" />
</template>
