<template>
  <el-header height="70px" class="navbar">
    <div class="user-profile">
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;TBlog&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;TBlog&nbsp;</span>
        </button>
      </div>
    <el-container>
      
      <el-main>
        <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><ProfileFilled /></el-icon>
            <span>文章</span>
          </el-menu-item>
          <el-menu-item index="/category">
            <el-icon><DashboardFilled /></el-icon>
            <span>分类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><TagsFilled/></el-icon>
            <span>标签</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><IdcardFilled /></el-icon>
            <span>关于</span>
          </el-menu-item>
          <el-sub-menu index="6">
            <template #title>
              <el-icon><AppstoreFilled /></el-icon>
              <span>更多</span>
            </template>
            <el-menu-item index="6-1">
              <el-icon><PictureFilled /></el-icon>
              <span>相册</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
       
      </el-main>
      
      <div class="user-profile">
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;LOGIN&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;LOGIN&nbsp;</span>
        </button>
      </div>
    </el-container>
  </el-header>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import router from "@/router/router.ts"
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

.navbar {
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #0ff;
  position: fixed; /* 固定在页面顶部 */
  width: 100%;
  z-index: 1000; /* 确保导航栏在其他内容之上 */
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}


.logo img {
  height: 40px;
}

.el-menu-demo {
  

  --el-menu-text-color: #0ff;
  background-color: transparent;
  border-bottom: none;
  padding: 0;
  margin: 0;
  height: 70px;
  line-height: 0px;
  display: flex;
  align-items: center;
  
  
}
.el-sub-menu{
  color: #0ff;
  font-size: 16px;
  padding: 0 10px;
}

.el-menu-demo .el-menu-item {
  color: #0ff;
  font-size: 16px;
  padding: 0 20px;
}



.el-menu-demo .el-menu-item:hover,
.el-menu-demo .el-menu-item.is-active {
  color: #ffffff;
  transform: scale(1.1);
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}



.el-menu-demo .el-menu-item:hover::before,
.el-menu-demo .el-menu-item.is-active::before {
  
  width: 300%;
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

/* === removing default button style ===*/
.button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #0ff;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
</style>
