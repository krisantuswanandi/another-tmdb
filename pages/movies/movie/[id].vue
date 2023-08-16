<script setup lang="ts">
const route = useRoute("movies-movie-id")
const movie = ref<Movie | null>(null)
const socials = ref<Socials | null>(null)
const cast = ref<Person[]>([])

const { data } = await useFetch<Movie & ExternalIds & Credit>(`/api/tmdb/movie/${route.params.id}?append_to_response=external_ids,credits`)
if (data.value) {
  movie.value = data.value
  socials.value = data.value.external_ids
  cast.value = data.value.credits.cast
}
</script>

<template>
  <div v-if="movie" class="flex flex-col items-center">
    <h1 class="font-bold text-3xl">{{ movie.title }}</h1>
    <div class="mt-2">
      <img v-if="movie.backdrop_path" :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" :alt="movie.title">
      <div v-else class="w-[500px] h-[281px] bg-neutral-300 flex justify-center items-center">
        <div class="i-ic-baseline-videocam-off text-6xl text-neutral-400" />
      </div>
    </div>
    <div class="flex mt-4">
      <NuxtLink v-if="socials?.imdb_id" target="_blank" :to="`https://www.imdb.com/title/${socials.imdb_id}`">
        <div class="i-bxl-imdb text-2xl" />
      </NuxtLink>
      <NuxtLink v-if="socials?.instagram_id" target="_blank" :to="`https://instagram.com/${socials.instagram_id}`">
        <div class="i-bxl-instagram text-2xl" />
      </NuxtLink>
      <NuxtLink v-if="socials?.twitter_id" target="_blank" :to="`https://twitter.com/${socials.twitter_id}`">
        <div class="i-bxl-twitter text-2xl" />
      </NuxtLink>
      <NuxtLink target="_blank" :to="`https://google.com/search?q=${encodeURIComponent(movie.title)}`">
        <div class="i-bxl-google text-2xl" />
      </NuxtLink>
    </div>
  </div>
  <div v-if="cast.length" class="mt-10">
    <PersonList title="Cast" :list="cast" />
  </div>
</template>
