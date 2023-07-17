<script setup lang="ts">
const route = useRoute("tv-id")
const tv = ref<Tv | null>(null)
const socials = ref<Socials | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Tv & ExternalIds & Credit>(`/api/tmdb/tv/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  tv.value = data.value
  socials.value = data.value.external_ids
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
