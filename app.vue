<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const language = useState("language", () => "es");

useHead({
  title: "Nuxt App",
  htmlAttrs: {
    lang: language,
  },
});
</script>
