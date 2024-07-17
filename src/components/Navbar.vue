<template>
  <el-menu :default-active="activeIndex" class="el-menu-dark" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <i class="fas fa-home"></i>
      主页
    </el-menu-item>
    <el-menu-item index="2">
      <i class="fas fa-file-alt"></i>
      文章
    </el-menu-item>
    <el-menu-item index="3">
      <i class="fas fa-search"></i>
      搜索
    </el-menu-item>
    <el-menu-item index="4">
      <i class="fas fa-info-circle"></i>
      关于
    </el-menu-item>
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
.el-menu-dark {
  background: #2c3e50;
  color: #ecf0f1;
  font-size: 16px;
  border-bottom: 1px solid #34495e;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.el-menu-dark .el-menu-item {
  padding: 0 20px;
  color: #ecf0f1;
  display: flex;
  align-items: center;
}

.el-menu-dark .el-menu-item i {
  margin-right: 8px;
}

.el-menu-dark .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>