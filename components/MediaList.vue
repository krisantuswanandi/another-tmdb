<script setup lang="ts">
defineProps<{
  title?: string;
  list: MovieTv[];
}>()
</script>

<template>
  <h1 v-if="title">{{ title }}</h1>
  <ul>
    <li v-for="item in list" :key="item.id">
      <template v-if="item.media_type === 'movie'">
        <NuxtLink :to="`/movie/${item.id}`">{{ item.title }}</NuxtLink>
      </template>
      <template v-else>
        <NuxtLink :to="`/tv/${item.id}`">{{ item.name }}</NuxtLink>
      </template>
    </li>
  </ul>
</template>
