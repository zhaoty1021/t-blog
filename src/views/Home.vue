<template>
  <div class="page-content">
    <el-row>
      <el-col :xs="24" :sm="7">
        <SideBar />
      </el-col>
      <el-col :xs="0" :sm="15">
        <CarouselCard/>
        <el-divider />
        <div class="blog-list">
    <BlogSummary
      image="/src/assets/bg1.png"
      title="博客标题 1"
      summary="这是第一篇博客的摘要。"
      date="2024-08-10"
      updateDate="2024-08-12"
      category="技术"
      :tags="['Vue3', 'JavaScript', 'Web']"
    />
    <BlogSummary
      image="/src/assets/bg2.jpg"
      title="博客标题 2"
      summary="这是第二篇博客的摘要。"
      date="2024-08-11"
      updateDate="2024-08-12"
      category="生活"
      :tags="['随笔', '生活记录']"
    />
    <!-- 更多博客摘要组件 -->
  </div> 
      </el-col>
      
    </el-row>
    
   
  
  </div>
  
  
</template>

<script setup>
import { useMainStore } from '../store';
import CarouselCard from '../components/Card/CarouselCard.vue';
import SideBar from '@/components/Layout/SideBar/SideBar.vue';
import BlogSummary from '@/components/Card/BlogSummary.vue';


const store = useMainStore();


</script>
<style scoped>
/* 这里的样式确保页面内容不会被导航栏遮挡 */
.page-content {
  padding-top: 85px; /* 与导航栏的高度保持一致 */
}

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #f0f0f0;
}

.blog-list {
  padding-top: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 控制卡片之间的间距 */
}
</style>