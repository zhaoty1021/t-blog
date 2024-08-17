<!-- 侧边栏 -->
<template>
    <div>
      <div class="statistics">
        <ProfileCard/>
        <TagCard/>
      <div>
        
      </div>
        
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import ProfileCard from '@/components/Card/ProfileCard.vue'
  import TagCard from '@/components/Card/TagCard.vue';
  </script>
  
  <style scoped>
  
  .statistics {
    display: flex;
    flex-direction: column;

  
    div {
      margin: 10px 30px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
  
    
  }
  
  </style>