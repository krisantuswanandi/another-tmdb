<script setup lang="ts">
const route = useRoute("movie-id")
const movie = ref<Movie | null>(null)
const socials = ref<Socials | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Movie & ExternalIds & Credit>(`/api/tmdb/movie/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  movie.value = data.value
  socials.value = data.value.external_ids
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
    <div v-if="socials?.imdb_id">
      <NuxtLink target="_blank" :to="`https://www.imdb.com/title/${socials.imdb_id}`">IMDb</NuxtLink>
    </div>
    <div v-if="socials?.instagram_id">
      <NuxtLink target="_blank" :to="`https://instagram.com/${socials.instagram_id}`">Instagram</NuxtLink>
    </div>
    <div v-if="socials?.twitter_id">
      <NuxtLink target="_blank" :to="`https://twitter.com/${socials.twitter_id}`">Twitter</NuxtLink>
    </div>
  </template>
  <template v-if="cast.length">
    <PersonList title="Cast" :list="cast" />
  </template>
</template>
