<template>
  <div class="page-content">
  
  </div>
  <SideBar />
  
</template>

<script setup>
import { useMainStore } from '../store';
import BlogPost from '../components/BlogPost.vue';
import SideBar from '@/components/Layout/SideBar/SideBar.vue';
const store = useMainStore();
const blogPosts = store.blogPosts;

</script>
<style scoped>
/* 这里的样式确保页面内容不会被导航栏遮挡 */
.page-content {
  padding-top: 80px; /* 与导航栏的高度保持一致 */
}
</style>