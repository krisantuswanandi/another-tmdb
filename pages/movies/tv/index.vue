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
  <MediaList title="Popular TV Shows" :list="tvs" />
</template>
