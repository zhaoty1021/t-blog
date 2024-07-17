<template>
    <el-card class="article-preview-card" shadow="always">
      <h3>{{ title }}</h3>
      <p>{{ summary }}</p>
      <el-button type="primary" @click="readMore">Read More</el-button>
    </el-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      summary: String
    },
    methods: {
      readMore() {
        this.$emit('read-more');
      }
    }
  }
  </script>
  
  <style>
  .article-preview-card {
    margin: 20px 0;
  }
  </style>