<template>
  <el-header height="70px" class="navbar">
    <el-container>
      
      <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <el-icon><home /></el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><document /></el-icon>
            <span>Articles</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><search /></el-icon>
            <span>Search</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><info /></el-icon>
            <span>About</span>
          </el-menu-item>
        </el-menu>
      </el-main>
      <el-aside width="150px" class="user-profile">
        <el-avatar src="https://i.pravatar.cc/300" />
        <span class="username">John Doe</span>
      </el-aside>
    </el-container>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import {
  HomeFilled as Home,
  Document as Document,
  Search as Search,
  InfoFilled as Info
} from '@element-plus/icons-vue';

const activeIndex = ref('1');

const handleSelect = (key, keyPath) => {
  ElMessage({
    message: `You clicked ${keyPath[0]}`,
    type: 'success',
  });
};
</script>

<style scoped>
.navbar {
  background-color: #3b044b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #ecf0f1;
  position: fixed; /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保导航栏在其他内容之上 */
}

.logo img {
  height: 40px;
}

.el-menu-demo {
  background-color: transparent;
  border-bottom: none;
  display: flex;
  align-items: center;
}

.el-menu-demo .el-menu-item {
  color: #ecf0f1;
  font-size: 16px;
  padding: 0 20px;
}

.el-menu-demo .el-menu-item:hover,
.el-menu-demo .el-menu-item.is-active {
  background-color: #34495e;
  border-radius: 5px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 5px;
}

.username {
  color: #ecf0f1;
  font-size: 16px;
}

/* 为页面内容增加顶部间距，以避免内容被导航栏遮挡 */
.page-content {
  padding-top: 80px;
}
</style>
