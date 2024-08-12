<!-- src/views/BlogList.vue -->
<template>
  <div>
    <h1>Blog List</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="'/blog/' + blog.id">{{ blog.title }}</router-link>
      </li>
    </ul>
    <router-link to="/add">Add Blog</router-link>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '../store/blog';

const blogStore = useBlogStore();
const blogs = blogStore.blogs;
</script>