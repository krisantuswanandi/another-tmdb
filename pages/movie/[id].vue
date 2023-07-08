<script setup lang="ts">
const route = useRoute("movie-id")
const movie = ref<Movie | null>(null)

const { data } = await useFetch<Movie>(`/api/tmdb/movie/${route.params.id}`)
if (data.value) {
  movie.value = data.value
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="movie">
    <h1>{{ movie.title }}</h1>
  </template>
</template>
