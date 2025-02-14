<template>
  <header class="flex justify-between p-3 shadow-2xl fixed top-0 left-0 w-full bg-white">
    <div class="font-bold text-2xl">
      <NuxtLink to="/">NUXT APP</NuxtLink>
    </div>

    <ul class="flex gap-4">
      <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
      <li><NuxtLink to="/login">Login</NuxtLink></li>
    </ul>

    <div></div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
