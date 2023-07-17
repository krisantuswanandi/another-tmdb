<script setup lang="ts">
const route = useRoute("movie-id")
const movie = ref<Movie | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Movie & Credit>(`/api/tmdb/movie/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  movie.value = data.value
  cast.value = data.value.credits.cast
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="movie">
    <h1>{{ movie.title }}</h1>
    <div>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" :alt="movie.title">
    </div>
    <NuxtLink target="_blank" :to="`https://www.imdb.com/title/${movie.external_ids.imdb_id}`">IMDb</NuxtLink>
  </template>
  <template v-if="cast.length">
    <PersonList title="Cast" :list="cast" />
  </template>
</template>
