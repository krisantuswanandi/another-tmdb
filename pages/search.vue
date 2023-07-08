<script setup lang="ts">
const keyword = ref("")
const results = ref<MovieTv[]>([])

async function search() {
  if (!keyword.value) {
    results.value = []
    return
  }

  const { data } = await useFetch<SearchResponse>(`/api/tmdb/search/multi?query=${keyword.value}`)
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
  <template v-if="results.length">
    <h1>Results</h1>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.media_type === "movie" ? result.title : result.name }}
      </li>
    </ul>
  </template>
</template>