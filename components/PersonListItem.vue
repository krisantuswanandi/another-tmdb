<script setup lang="ts">
const props = defineProps<{
  item: Person;
}>()

const { id, name, profile_path } = props.item
</script>

<template>
  <li class="w-40">
    <NuxtLink :to="`/person/${id}`">
      <img v-if="profile_path" :src="`https://image.tmdb.org/t/p/w154${profile_path}`" :alt="name" class="block w-full">
      <div v-else class="w-40 h-60 bg-neutral-300 flex justify-center items-center">
        <div class="i-ic-baseline-person-off text-6xl text-neutral-400" />
      </div>
      <div class="font-bold text-sm mt-1 leading-tight">{{ name }}</div>
    </NuxtLink>
  </li>
</template>
