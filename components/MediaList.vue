<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  list: MovieTv[];
  scroll?: "vertical" | "horizontal"
}>(), {
  scroll: "vertical"
})
</script>

<template>
  <h1 class="font-bold text-xl" v-if="title">{{ title }}</h1>
  <div class="overflow-auto mt-1">
    <ul class="flex gap-2" :class="scroll === 'vertical' ? 'flex-wrap' : 'w-max'">
      <MediaListItem v-for="item in list" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
