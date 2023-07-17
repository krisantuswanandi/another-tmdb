<script setup lang="ts">
const props = defineProps<{
  item: Person;
}>()

const { id, name, profile_path } = props.item
</script>

<template>
  <li>
    <NuxtLink :to="`/person/${id}`">
      <div>{{ name }}</div>
      <img v-if="profile_path" :src="`https://image.tmdb.org/t/p/w45${profile_path}`" :alt="name">
    </NuxtLink>
  </li>
</template>
