<!-- src/views/AddBlog.vue -->
<template>
    <div>
      <h1>Add Blog</h1>
      <input v-model="title" placeholder="Title" />
      <textarea v-model="content" placeholder="Content"></textarea>
      <button @click="addBlog">Add</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useBlogStore } from '../store/blog';
  import { useRouter } from 'vue-router';
  
  const blogStore = useBlogStore();
  const router = useRouter();
  const title = ref('');
  const content = ref('');
  
  const addBlog = () => {
    const id = Date.now();
    blogStore.addBlog({ id, title: title.value, content: content.value });
    router.push('/');
  };
  </script>