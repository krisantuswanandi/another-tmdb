<script setup lang="ts">
const route = useRoute("movies-person-id")
const person = ref<Person | null>(null)
const socials = ref<Socials | null>(null)

const { data } = await useFetch<Person & ExternalIds>(`/api/tmdb/person/${route.params.id}?append_to_response=external_ids`)
if (data.value) {
  person.value = data.value
  socials.value = data.value.external_ids
}
</script>

<template>
  <div v-if="person" class="flex flex-col items-center">
    <h1 class="font-bold text-3xl">{{ person.name }}</h1>
    <div class="mt-2">
      <img v-if="person.profile_path" :src="`https://image.tmdb.org/t/p/w200${person.profile_path}`" :alt="person.name">
      <div v-else class="w-40 h-60 bg-neutral-300 flex justify-center items-center">
        <div class="i-ic-baseline-person-off text-6xl text-neutral-400" />
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
</template>
