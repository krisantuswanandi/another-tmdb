<script setup lang="ts">
const route = useRoute("tv-id")
const tv = ref<Tv | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Tv & Credit>(`/api/tmdb/tv/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  tv.value = data.value
  cast.value = data.value.credits.cast
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
  <template v-if="cast.length">
    <PersonList title="Cast" :list="cast" />
  </template>
</template>
