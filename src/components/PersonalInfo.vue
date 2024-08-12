<template>
  <div class="user-info">
    <el-card class="user-card" :body-style="{ padding: '20px' }">
      <div class="user-header">
        <el-avatar size="large" src="./assets/avatar.jpg" />
        <div class="user-details">
          <h2>{{ username }}</h2>
          <p>{{ signature }}</p>
        </div>
      </div>
      <div class="user-articles">
        <ArticleCategories />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import ArticleCategories from './ArticleCategories.vue';

const username = '张三';
const signature = '热爱编程，追求卓越';
</script>

<style scoped>
.user-info {
  margin: 20px;
}

.user-card {
  width: 100%;
}

.user-header {
  display: flex;
  align-items: center;
}

.user-header .el-avatar {
  margin-right: 20px;
}

.user-details h2 {
  margin: 0;
  font-size: 24px;
}

.user-details p {
  margin: 0;
  color: #666;
}

.user-articles {
  margin-top: 20px;
}
</style>