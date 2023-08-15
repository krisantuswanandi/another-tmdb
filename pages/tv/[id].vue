<script setup lang="ts">
const route = useRoute("tv-id")
const tv = ref<Tv | null>(null)
const socials = ref<Socials | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Tv & ExternalIds & Credit>(`/api/tmdb/tv/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  tv.value = data.value
  socials.value = data.value.external_ids
  cast.value = data.value.credits.cast
}
</script>

<template>
  <div v-if="tv" class="">
    <h1 class="font-bold text-3xl">{{ tv.name }}</h1>
    <div class="mt-2">
      <img v-if="tv.backdrop_path" :src="`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`" :alt="tv.name">
      <div v-else class="w-[500px] h-[281px] bg-neutral-300 flex justify-center items-center">
        <div class="i-ic-baseline-videocam-off text-6xl text-neutral-400" />
      </div>
    </div>
    <div class="flex gap-2 mt-4">
      <div v-if="socials?.imdb_id">
        <NuxtLink target="_blank" :to="`https://www.imdb.com/title/${socials.imdb_id}`">
          <div class="i-simple-icons-imdb text-xl" />
        </NuxtLink>
      </div>
      <div v-if="socials?.instagram_id">
        <NuxtLink target="_blank" :to="`https://instagram.com/${socials.instagram_id}`">
          <div class="i-simple-icons-instagram text-xl" />
        </NuxtLink>
      </div>
      <div v-if="socials?.twitter_id">
        <NuxtLink target="_blank" :to="`https://twitter.com/${socials.twitter_id}`">
          <div class="i-simple-icons-twitter text-xl" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-if="cast.length" class="mt-10">
    <PersonList title="Cast" :list="cast" />
  </div>
</template>
