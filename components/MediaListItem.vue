<script setup lang="ts">
const props = defineProps<{
  item: MovieTv;
}>()

const { id, media_type: type } = props.item
const title = type === "movie" ? props.item.title : props.item.name
</script>

<template>
  <li>
    <NuxtLink :to="`/${type}/${id}`">
      <span>{{ title }}</span>
    </NuxtLink>
  </li>
</template>
