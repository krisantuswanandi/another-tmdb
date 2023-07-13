<script setup lang="ts">
const route = useRoute("tv-id")
const tv = ref<Tv | null>(null)

const { data } = await useFetch<Tv>(`/api/tmdb/tv/${route.params.id}?append_to_response=external_ids`)
if (data.value) {
  tv.value = data.value
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="tv">
    <h1>{{ tv.name }}</h1>
    <div>
      <img :src="`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`" :alt="tv.name">
    </div>
    <NuxtLink target="_blank" :to="`https://www.imdb.com/title/${tv.external_ids.imdb_id}`">IMDb</NuxtLink>
  </template>
</template>
