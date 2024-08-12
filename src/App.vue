<template>
  <div id="app">
    <NavBar />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/Navbar.vue';
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e76df;
}

/* 这里的样式确保页面内容不会被导航栏遮挡 */
.page-content {
  padding-top: 80px; /* 与导航栏的高度保持一致 */
}
</style>
