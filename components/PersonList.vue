<script setup lang="ts">
defineProps<{
  title?: string;
  list: Person[];
}>()
</script>

<template>
  <h2 v-if="title">{{ title }}</h2>
  <ul>
    <PersonListItem
      v-for="item in list"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>
