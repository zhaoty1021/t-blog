<template>
  <el-header height="70px" class="navbar">
    <el-tooltip
              class="box-item"
              effect="light"
              content="点击回到首页"
              placement="bottom"
          >
            <el-link href="/">
              <!--              <el-image class="logo" src="https://element-plus.org/images/element-plus-logo.svg"/>-->
              <div style="color: white;font-size: 1rem;font-weight: bold;margin-left: 0.2rem">
                Tyrone's Blog
              </div>
            </el-link>
          </el-tooltip>
    <el-container>
      
      <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <el-icon><HomeFilled /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><ProfileFilled /></el-icon>
            <span>文章</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><DashboardFilled /></el-icon>
            <span>分类</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><TagsFilled/></el-icon>
            <span>标签</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><IdcardFilled /></el-icon>
            <span>关于</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><AppstoreFilled /></el-icon>
              <span>其他</span>
            </template>
            <el-menu-item index="2-1">
              <el-icon><PictureFilled /></el-icon>
              <span>相册</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-main>
      <div width="150px" class="user-profile">
        <el-avatar src="https://i.pravatar.cc/300" />
        <span class="username">John Doe</span>
      </div>
    </el-container>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import {
  HomeFilled,
  ProfileFilled,
  TagsFilled,
  DashboardFilled,
  IdcardFilled,
  AppstoreFilled,
  PictureFilled
} from '@ant-design/icons-vue';

const activeIndex = ref('1');

const handleSelect = (key, keyPath) => {
  ElMessage({
    message: `You clicked ${keyPath[0]}`,
    type: 'success',
  });
};
</script>

<style scoped>
:root {
  --el-menu-text-color: #fbfeff;
}
.navbar {
  background-color: #3b044b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #ecf0f1;
  position: fixed; /* 固定在页面顶部 */
  width: 100%;
  z-index: 1000; /* 确保导航栏在其他内容之上 */
}


.logo img {
  height: 40px;
}

.el-menu-demo {
  --el-menu-text-color: #fbfeff;
  background-color: transparent;
  border-bottom: none;
  display: flex;
  align-items: center;
}
.el-sub-menu{
  color: #ecf0f1;
  font-size: 16px;
  padding: 0 10px;
}

.el-menu-demo .el-menu-item {
  color: #feffff;
  font-size: 16px;
  padding: 0 20px;
}


.el-sub-menu.is-opened,
.el-sub-menu.is-active {
  background: rgba(246, 248, 249, 0.2);
  border-radius: 7px;
}
.el-menu-demo .el-menu-item:hover,
.el-menu-demo .el-menu-item.is-active {
  background: rgba(246, 248, 249, 0.2);
  border-radius: 7px;
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
