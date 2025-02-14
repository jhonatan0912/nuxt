<template>
  <div class="rounded-2xl border p-2 flex flex-col gap-2">
    <h3 class="font-bold capitalize">{{ props.post.title }}</h3>
    <span>
      {{ props.post.body }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/interfaces/post.interface";

const props = defineProps<{
  post: Post;
}>();
</script>

<style scoped></style>
