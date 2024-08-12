<template>
  <div>
    <BlogPost
      v-for="(post, index) in blogPosts"
      :key="index"
      :title="post.title"
      :summary="post.summary"
    />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store';
import BlogPost from '../components/BlogPost.vue';

const store = useMainStore();
const blogPosts = store.blogPosts;
</script>