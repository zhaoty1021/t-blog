<template>
    <el-card class="music-player-card">
      <h3>Music Player</h3>
      <div class="player">
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  .music-player-card {
    width: 300px;
    margin: 20px auto;
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
  
  .player {
    margin-top: 10px;
  }
  
  audio {
    width: 100%;
    border-radius: 5px;
  }
  </style>