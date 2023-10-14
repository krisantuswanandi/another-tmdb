<script setup lang="ts">
import { vFocus } from "@/utils/directives"

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
  <div class="relative">
    <div class="absolute w-10 h-full flex justify-center items-center">
      <div class="i-lucide-search text-xl" />
    </div>
    <input v-model="keyword" v-focus placeholder="Search..." class="border border-black w-full pl-10 pr-2 py-1">
  </div>
  <div class="mt-4">
    <MediaList v-if="results.length" :list="results" />
  </div>
</template>