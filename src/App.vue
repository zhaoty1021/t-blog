<template>
<div id="app">
  <StarSky />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
import StarSky from '@/components/Background/StarSky.vue'
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
