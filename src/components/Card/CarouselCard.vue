<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in images" :key="index">
      <div class="carousel-content">
        <img :src="item.src" class="carousel-image" />
        <div class="text-overlay">
          <h3 class="main-text" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  { src: '/src/assets/card1.jpg', title: 'Image 1', description: 'This is the description for image 1.' },
  { src: '/src/assets/card1.jpg', title: 'Image 2', description: 'This is the description for image 2.' },
  { src: '/src/assets/card1.jpg', title: 'Image 3', description: 'This is the description for image 3.' },
]);

const handleMouseOver = (event) => {
  const parent = event.target.closest('.carousel-content');
  parent.querySelector('.carousel-image').classList.add('darken');
  event.target.classList.add('hovered');
};

const handleMouseLeave = (event) => {
  const parent = event.target.closest('.carousel-content');
  parent.querySelector('.carousel-image').classList.remove('darken');
  event.target.classList.remove('hovered');
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.darken {
  filter: brightness(70%);
}

.carousel-content {
  position: relative;
  height: 100%;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.main-text {
  font-size: 24px;
  font-weight: bold;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.main-text.hovered {
  transform: scale(1.3);
  color: #0ff;
}

.description {
  font-size: 14px;
  margin-top: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
