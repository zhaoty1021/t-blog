<template>
  <div class="parent">
    <LayoutHeader/>
  </div>
  
  </template>
  
  <script setup>
  import LayoutHeader from "./Header/index.vue";
  import SideBar from "./SideBar/SideBar.vue";
  
  </script>
  
  <style scoped>
  .parent {
  height: 80px; /* 确保父容器有高度 */
}
  </style>