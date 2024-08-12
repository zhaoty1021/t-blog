<template>
    <div>
      <h1>搜索</h1>
      <el-input placeholder="搜索博客文章" v-model="searchQuery" clearable></el-input>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  </script>