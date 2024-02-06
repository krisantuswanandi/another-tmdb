<script setup>
useHead({
  title: "Another TMDB",
});
</script>

<template>
  <div class="max-w-2xl m-auto">
    <header class="flex items-center gap-4 mb-8">
      <NuxtLink to="/" class="flex gap-0.5 items-center font-bold">
        <img src="/logo.webp" class="w-8" />Another TMDB
      </NuxtLink>
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/search" class="link">Search</NuxtLink>
    </header>
    <NuxtPage />
    <footer class="flex justify-center mt-8 mb-4">
      <NuxtLink
        to="https://github.com/krisantuswanandi/another-tmdb"
        target="_blank"
      >
        <div class="i-mdi-github text-3xl" />
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.link {
  --at-apply: hover:underline;
}
</style>
