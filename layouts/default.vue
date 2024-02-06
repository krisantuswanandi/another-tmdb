<script setup>
useHead({
  title: "NutX",
});
</script>

<template>
  <div class="max-w-2xl m-auto">
    <header class="flex items-center gap-4 mb-8">
      <NuxtLink to="/">
        <NutxLogo />
      </NuxtLink>
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/search" class="link">Search</NuxtLink>
    </header>
    <NuxtPage />
    <footer class="flex justify-center mt-8 mb-4">
      <NuxtLink to="https://github.com/krisantuswanandi/nutx" target="_blank">
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
