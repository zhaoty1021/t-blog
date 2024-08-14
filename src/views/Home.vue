<template>
  <div class="page-content">
    <BlogPost
      v-for="(post, index) in blogPosts"
      :key="index"
      :title="post.title"
      :summary="post.summary"
    />
  </div>
</template>

<script setup>
import { useMainStore } from '../store';
import BlogPost from '../components/BlogPost.vue';
const store = useMainStore();
const blogPosts = store.blogPosts;

</script>
<style scoped>
/* 这里的样式确保页面内容不会被导航栏遮挡 */
.page-content {
  padding-top: 80px; /* 与导航栏的高度保持一致 */
}
</style>