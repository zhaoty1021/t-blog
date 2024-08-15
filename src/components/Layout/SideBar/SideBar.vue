<!-- 侧边栏 -->
<template>
    <div>
      <div class="statistics">
        <ProfileCard/>
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import ProfileCard from '@/components/Card/ProfileCard.vue'
  
  </script>
  
  <style scoped>
  
  .statistics {
    display: flex;
    flex-direction: column;
    color: $menuActiveText;
  
    div {
      margin: 5px 20px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
  }
  
  </style>