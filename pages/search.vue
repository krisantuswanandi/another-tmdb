<script setup>
const keyword = ref("")
const results = ref([])

async function search() {
  if (!keyword.value) {
    results.value = []
    return
  }

  try {
    const { data } = await useFetch(`/api/tmdb/search/multi?query=${keyword.value}`)
    console.log(JSON.parse(JSON.stringify(data.value)))
    results.value = data.value.results.map((result) => result.title || result.name)
  } catch {
    results.value = []
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
      <li v-for="i in results" :key="i">{{ i }}</li>
    </ul>
  </template>
</template>