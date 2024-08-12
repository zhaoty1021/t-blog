<template>
    <div class="categories">
      <el-card class="categories-card" :body-style="{ padding: '20px' }">
        <h3>文章分类</h3>
        <el-button type="primary" @click="filterByCategory('frontend')">前端</el-button>
        <el-button type="primary" @click="filterByCategory('backend')">后端</el-button>
        <el-button type="primary" @click="filterByCategory('database')">数据库</el-button>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const selectedCategory = ref('');
  
  const filterByCategory = (category: string) => {
    selectedCategory.value = category;
    // 你可以在这里添加进一步的逻辑来过滤文章
  };
  </script>
  
  <style scoped>
  .categories {
    margin-top: 20px;
  }
  
  .categories-card {
    width: 100%;
  }
  
  .el-button {
    margin-right: 10px;
  }
  </style>