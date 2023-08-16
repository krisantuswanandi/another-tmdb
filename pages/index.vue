<template>
  <div class="flex justify-center items-center flex-col h-full">
    <header>
      <NutxLogo />
    </header>
    <div class="flex flex-col mt-6 gap-1 text-center">
      <NuxtLink to="/movies" class="link">Movies</NuxtLink>
      <NuxtLink to="/news" class="link">News</NuxtLink>
    </div>
    <footer class="flex justify-center my-10">
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
