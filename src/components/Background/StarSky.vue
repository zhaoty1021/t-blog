<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script>
  export default {
    name: "StarSky",
    data() {
      return {
        stars: [],
        animationFrameId: null,
      };
    },
    mounted() {
      this.initStars();
      this.animateStars();
    },
    beforeUnmount() {
      cancelAnimationFrame(this.animationFrameId);
    },
    methods: {
      initStars() {
        const canvas = this.$refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        const starsCount = 700;
        for (let i = 0; i < starsCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = Math.random() * 2;
          const speed = Math.random() * 3 - 1.5;
  
          const star = { x, y, radius, speed };
          this.stars.push(star);
        }
      },
      animateStars() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
  
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        for (const star of this.stars) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255, 255, 255, 1)";
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
  
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
          }
        }
        
        this.animationFrameId = requestAnimationFrame(this.animateStars);
      },
    },
  };
  </script>
  
  <style scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>