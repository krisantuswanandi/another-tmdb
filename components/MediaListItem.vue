<script setup lang="ts">
const props = defineProps<{
  item: MovieTv;
}>()

const { id, media_type: type, poster_path } = props.item
const title = type === "movie" ? props.item.title : props.item.name
</script>

<template>
  <li>
    <NuxtLink :to="`/${type}/${id}`">
      <div>{{ title }}</div>
      <img :src="`https://image.tmdb.org/t/p/w200${poster_path}`" :alt="title">
    </NuxtLink>
  </li>
</template>
