<script setup lang="ts">
const route = useRoute("person-id")
const person = ref<Person | null>(null)
const socials = ref<Socials | null>(null)

const { data } = await useFetch<Person & ExternalIds>(`/api/tmdb/person/${route.params.id}?append_to_response=external_ids`)
if (data.value) {
  person.value = data.value
  socials.value = data.value.external_ids
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="person">
    <h1>{{ person.name }}</h1>
    <div v-if="person.profile_path">
      <img :src="`https://image.tmdb.org/t/p/w200${person.profile_path}`" :alt="person.name">
    </div>
    <div v-if="socials?.imdb_id">
      <NuxtLink target="_blank" :to="`https://www.imdb.com/name/${socials.imdb_id}`">IMDb</NuxtLink>
    </div>
    <div v-if="socials?.instagram_id">
      <NuxtLink target="_blank" :to="`https://instagram.com/${socials.instagram_id}`">Instagram</NuxtLink>
    </div>
    <div v-if="socials?.imdb_id">
      <NuxtLink target="_blank" :to="`https://twitter.com/${socials.twitter_id}`">Twitter</NuxtLink>
    </div>
  </template>
</template>
