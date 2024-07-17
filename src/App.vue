<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <el-row>
        <el-col :span="6">
          <UserInfo />
        </el-col>
        <el-col :span="18">
          <ArticlePreview 
            v-for="(article, index) in articles" 
            :key="index" 
            :title="article.title" 
            :summary="article.summary"
            @read-more="readMore(article)"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import UserInfo from './components/UserInfo.vue'
import ArticlePreview from './components/ArticlePreview.vue'

export default {
  components: {
    Navbar,
    UserInfo,
    ArticlePreview
  },
  data() {
    return {
      articles: [
        { title: 'Article 1', summary: 'This is a summary of article 1.' },
        { title: 'Article 2', summary: 'This is a summary of article 2.' },
        { title: 'Article 3', summary: 'This is a summary of article 3.' }
      ]
    }
  },
  methods: {
    readMore(article) {
      alert(`Read more about: ${article.title}`);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  margin-top: 60px;
  padding: 20px;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
  min-height: 100vh;
}
</style>