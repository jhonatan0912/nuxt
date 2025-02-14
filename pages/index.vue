<template>
  <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto pt-4">
    <PostCard v-for="post in posts" :key="post.userId" :post="post" />
  </section>
</template>

<script setup lang="ts">
import PostCard from "~/components/posts/PostCard.vue";
import type { Post } from "~/interfaces/post.interface";

const posts = ref<Post[]>([]);

const response = await useFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);
const data = response.data;

posts.value = data.value || [];
</script>

<style lang="scss" scoped></style>
