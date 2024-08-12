<!-- src/views/BlogDetail.vue -->
<template>
  <div>
    <h1>{{ blog?.title }}</h1>
    <p>{{ blog?.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useBlogStore } from '../store/blog';

const route = useRoute();
const blogStore = useBlogStore();
const blogId = Number(route.params.id);
const blog = blogStore.getBlog(blogId);
</script>
  