<script setup lang="ts">
defineProps<{
  title?: string;
  list: MovieTv[];
}>()
</script>

<template>
  <h1 v-if="title">{{ title }}</h1>
  <ul>
    <MediaListItem
      v-for="item in list"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>
