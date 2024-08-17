<template>
  <div class="card">
    <span class="title">All tags</span>
  <div class="card__tags">
    <ul class="tag">
      <li class="tag__name">JS</li>
      <li class="tag__name">wordpress</li>
      <li class="tag__name">uiverse</li>
      <li class="tag__name">Css</li>
      <li class="tag__name">html</li>
      <li class="tag__name">go</li>
      <li class="tag__name">java</li>
      <li class="tag__name">ux/ui</li>
      <li class="tag__name">figma</li>
    </ul>
  </div>
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

.title {
  font-weight: 900;
  font-size: 1.7em;
}

.tag__name {
  display: inline-block;
  color: #0a0000;
  font-size: 12px;
  background-color: #0ff;
  padding: 6px 23px 9px;
  border-radius: 70em;
  margin: 8px 6px 8px 0;
  margin-left: 0px;
  position: relative;
  text-transform: lowercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.tag__name::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 40%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #000000;
}

.tag__name::before {
  left: 7px;
}

.tag__name::after {
  right: 7px;
}

.tag__name:hover {
  transform: scale(1.1);
  background-color: #303498;
}


</style>
