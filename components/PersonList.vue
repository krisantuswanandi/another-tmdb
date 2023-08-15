<script setup lang="ts">
defineProps<{
  title?: string;
  list: Person[];
}>()
</script>

<template>
  <h2 class="font-bold text-xl" v-if="title">{{ title }}</h2>
  <div class="overflow-auto mt-1">
    <ul class="flex flex-wrap gap-2">
      <PersonListItem v-for="item in list" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
