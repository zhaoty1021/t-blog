<template>
  <div>
    <el-card class="user-info-card">
      <el-avatar 
        src="https://via.placeholder.com/150" 
        size="large"
        class="avatar"
      />
      <div class="user-info">
        <h2>John Doe</h2>
        <p class="signature">“Stay hungry, stay foolish.”</p>
        <div class="social-links">
          <a href="https://github.com/zhaoty1021" target="_blank" title="个人">
            <i class="fa-solid fa-circle-user"></i>
          </a>
          <a href="https://twitter.com/zhaoty1021" target="_blank" title="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/zhaoty1021" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://space.bilibili.com/283385619" target="_blank" title="Bilibili">
            <i class="fab fa-bilibili"></i>
          </a>
        </div>
      </div>
    </el-card>
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from './MusicPlayer.vue'

export default {
  components: {
    MusicPlayer
  }
}
</script>

<style>
.user-info-card {
  width: 300px;
  margin: 20px auto;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  display: block;
  margin: 0 auto 10px;
}

.user-info {
  margin-top: 10px;
}

.user-info h2 {
  margin: 10px 0 5px;
  font-size: 24px;
  color: #333;
}

.signature {
  font-style: italic;
  color: #777;
  margin: 5px 0;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  color: #333;
  font-size: 24px;
}

.social-links a:hover {
  color: #42b983;
}
</style>