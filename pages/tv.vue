<script setup lang="ts">
const tvs = ref<Tv[]>([])

const { data } = await useFetch<TvResponse>("/api/tmdb/tv/popular")
if (data.value) {
  tvs.value = data.value.results
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <h1>Popular TV Shows</h1>
  <ul>
    <li v-for="tv in tvs" :key="tv.id">{{ tv.name }}</li>
  </ul>
</template>