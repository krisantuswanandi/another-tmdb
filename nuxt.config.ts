// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    typedPages: true,
  },
  modules: ["@vueuse/nuxt", "@unocss/nuxt"],
  css: ["@unocss/reset/tailwind.css"],
});
