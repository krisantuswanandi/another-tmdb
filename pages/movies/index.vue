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
  <div class="relative">
    <div class="absolute top-1 right-0">
      <NuxtLink to="/movies/movie" class="flex items-center text-sm text-blue-700 hover:underline">
        see more
        <div class="i-lucide-chevron-right mt-0.5" />
      </NuxtLink>
    </div>
    <MediaList title="Popular Movies" :list="movies" scroll="horizontal" />
  </div>
  <div class="relative mt-8">
    <div class="absolute top-1 right-0">
      <NuxtLink to="/movies/tv" class="flex items-center text-sm text-blue-700 hover:underline">
        see more
        <div class="i-lucide-chevron-right mt-0.5" />
      </NuxtLink>
    </div>
    <MediaList title="Popular TV Shows" :list="tvs" scroll="horizontal" />
  </div>
</template>
