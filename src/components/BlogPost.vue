<template>
  <el-card :body-style="{ padding: '20px' }">
    <h2>{{ title }}</h2>
    <p>{{ summary }}</p>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  summary: String
});
</script>