<script setup lang="ts">
const route = useRoute("tv-id")
const tv = ref<Tv | null>(null)

const { data } = await useFetch<Tv>(`/api/tmdb/tv/${route.params.id}`)
if (data.value) {
  tv.value = data.value
}
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <template v-if="tv">
    <h1>{{ tv.name }}</h1>
  </template>
</template>
