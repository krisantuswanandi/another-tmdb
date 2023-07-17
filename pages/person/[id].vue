<script setup lang="ts">
const route = useRoute("person-id")
const person = ref<Person | null>(null)

const { data } = await useFetch<Person>(`/api/tmdb/person/${route.params.id}`)
if (data.value) {
  person.value = data.value
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="person">
    <h1>{{ person.name }}</h1>
    <div v-if="person.profile_path">
      <img :src="`https://image.tmdb.org/t/p/w200${person.profile_path}`" :alt="person.name">
    </div>
    <NuxtLink v-if="person.imdb_id" target="_blank" :to="`https://www.imdb.com/name/${person.imdb_id}`">IMDb</NuxtLink>
  </template>
</template>
