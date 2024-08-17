<template>
  <div
    class="blog-summary-card"
    @click="handleCardClick"
  >
    <div
      class="blog-background"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="blog-details">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-summary">{{ summary }}</p>
      <div class="blog-category-tags">
        <div class="category-row">
          <span class="category-label">分类：</span>
          <el-button type="primary" plain round class="blog-category">{{ category }}</el-button>
        </div>
        <div class="tag-row">
          <span class="category-label">标签：</span>
          <div class="tag-list">
            <el-tag
              v-for="(tag, index) in tags"
              :key="index"
              effect="dark"
              class="tag"
            >{{ tag }}</el-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-meta">
      <span>发布于: {{ date }}</span>
      <span>更新于: {{ updateDate }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  summary: String,
  image: String,
  date: String,
  updateDate: String,
  category: String,
  tags: Array,
  link: String
});

const router = useRouter();

const handleCardClick = () => {
  router.push(props.link);
};
</script>

<style scoped>
.blog-summary-card {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}

.blog-summary-card:hover .blog-background {
  transform: scale(1.2); /* 悬停时放大背景图片 */
}

.blog-summary-card:hover{
  transform: scale(1.05); /* 悬停时放大卡片 */
}

.blog-details {
  position: relative;
  z-index: 2;
  padding: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6); /* 添加背景色让文字更清晰 */
}

.blog-title {
  font-size: 24px;
  margin: 0 0 10px;
  font-weight: bold;
}

.blog-summary {
  font-size: 16px;
  margin-bottom: 15px;
}

.blog-category-tags {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.category-row, .tag-row {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.category-label {
  margin-right: 5px;
  font-size: 16px;
}

.blog-category {
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: #3a8ee6; /* 分类按钮背景色 */
  color: #fff; /* 分类按钮文字颜色 */
  border: none;
}

.blog-category:hover {
  background-color: #5aa8f6; /* 悬停时的背景色 */
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
}

.blog-meta {
  position: relative;
  z-index: 2;
  padding: 10px 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6); /* 添加背景色让文字更清晰 */
  display: flex;
  gap: 10px; /* 调整发布时间和更新时间之间的间距 */
  justify-content: flex-start; /* 紧凑排列 */
}

.tag {
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: #ff5722; /* 标签的背景颜色 */
  color: #fff; /* 标签的文字颜色 */
}

.tag:hover {
  background-color: #ff7043; /* 悬停时的背景色 */
}
</style>
