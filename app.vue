<script setup>
const { data } = await useFetch('/api/movies')
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
