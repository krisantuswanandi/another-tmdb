<script setup lang="ts">
const tvs = ref<Tv[]>([])

const { data } = await useFetch<TvList>("/api/tmdb/tv/popular")
if (data.value) {
  tvs.value = data.value.results.map(result => ({
    ...result,
    media_type: "tv",
  }))
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <MediaList title="Popular TV Shows" :list="tvs" />
</template>
