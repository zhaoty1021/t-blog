<template>
  <el-menu :default-active="activeIndex" class="el-menu-shadow" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">文章</el-menu-item>
    <el-menu-item index="3">搜索</el-menu-item>
    <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-shadow {
  background: #ffffff;
  color: #333333;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.el-menu-shadow .el-menu-item {
  padding: 0 20px;
  color: #333333;
}

.el-menu-shadow .el-menu-item:hover {
  background-color: #f2f2f2;
}
</style>