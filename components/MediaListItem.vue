<script setup lang="ts">
const props = defineProps<{
  item: MovieTv;
}>();

const { id, media_type: type, poster_path } = props.item;
const title = type === "movie" ? props.item.title : props.item.name;
</script>

<template>
  <li class="w-40">
    <NuxtLink :to="`/${type}/${id}`">
      <img
        v-if="poster_path"
        :src="`https://image.tmdb.org/t/p/w154${poster_path}`"
        :alt="title"
        class="block w-full"
      />
      <div
        v-else
        class="w-40 h-60 bg-neutral-300 flex justify-center items-center"
      >
        <div class="i-ic-baseline-videocam-off text-6xl text-neutral-400" />
      </div>
      <div class="font-bold text-sm mt-1 leading-tight">{{ title }}</div>
    </NuxtLink>
  </li>
</template>
