<template>
  <div class="card">
     <span>Tags</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tags = ref([
  'JavaScript',
  'Vue.js',
  'CSS',
  'HTML',
  'Node.js',
  'React',
  'Angular',
]);

const handleTagClick = (tag) => {
  console.log(`Tag clicked: ${tag}`);
};
</script>

<style scoped>
.card {
  max-width: 310px;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 15px;
  background-color: rgb(0, 179, 255);
  border-radius: 10px;
  border: none;
  color: white;
  position: relative;
  cursor: pointer;
  font-weight: 900;
  transition-duration: .2s;
  background: linear-gradient(0deg, #000, #272727);
}

.card:before, .card:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  border-radius: 10px;
  background: linear-gradient(45deg, #0ff,rgb(255, 255, 255), #00aeff, #0022ff);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.card:after {
  filter: blur(100px);
}

</style>
