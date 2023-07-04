<script setup>
const { data } = await useFetch("/api/movies")
const titles = data.value.results.map((result) => result.title)
</script>

<template>
  <ul>
    <li v-for="t in titles" :key="t">{{ t }}</li>
  </ul>
</template>
