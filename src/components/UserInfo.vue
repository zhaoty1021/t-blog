<template>
    <div>
      <el-card class="user-info-card">
        <img src="https://via.placeholder.com/150" class="avatar">
        <div class="user-info">
          <h2>John Doe</h2>
          <p>Web Developer & Blogger</p>
        </div>
      </el-card>
      <el-card class="music-player-card">
        <h3>Music Player</h3>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  .user-info-card {
    width: 300px;
    margin: 20px auto;
    text-align: center;
  }
  
  .avatar {
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .user-info {
    margin-top: 10px;
  }
  
  .music-player-card {
    width: 300px;
    margin: 20px auto;
    text-align: center;
    padding: 10px;
  }
  </style>