<script setup lang="ts">
const keyword = ref("")
const results = ref<MovieTv[]>([])

async function search() {
  if (!keyword.value) {
    results.value = []
    return
  }

  const { data } = await useFetch<SearchList>(`/api/tmdb/search/multi?query=${keyword.value}`)
  if (data.value) {
    results.value = data.value.results
  }
}

const debouncedSearch = useDebounceFn(search, 500)

watch(keyword, debouncedSearch)
</script>

<template>
  <NuxtLink to="/">back to home</NuxtLink>
  <p>Search: <input v-model="keyword"></p>
  <MediaList v-if="results.length" title="Results" :list="results" />
</template>