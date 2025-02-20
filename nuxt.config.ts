import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@pinia/nuxt"],
});
