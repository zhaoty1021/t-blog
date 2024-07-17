<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
      <el-menu-item index="3">Blog</el-menu-item>
      <el-menu-item index="4">Contact</el-menu-item>
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
  .el-menu-demo {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    text-align: center;
  }
  
  .el-menu-demo .el-menu-item {
    padding: 0 20px;
    color: #fff;
  }
  
  .el-menu-demo .el-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>