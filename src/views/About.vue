<template>
  <div>
    <Navbar />
    <el-container>
      <el-header>关于我</el-header>
      <el-main>
        <p>这是一个关于页面。</p>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  components: { Navbar }
});
</script>