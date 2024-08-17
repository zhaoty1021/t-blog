<template>
   <div :class="['card', { 'active-about': activeTab=== 'about' }, { 'active-experience': activeTab=== 'experience' }, { 'active-contact': activeTab=== 'contact' }]">
  <div class="card-header">
    <div class="card-cover" style="background-image:url('/src/assets/picture.png');"></div>
    <img class="card-avatar" src="/src/assets/picture.png" alt="Avatar" />
    <h1 class="card-fullname">Tyrone Chiao</h1>
    <h2 class="card-jobtitle">软件开发</h2>
  </div>
  <div class="card-main">
    <div class="card-section" v-show="activeTab === 'about'">
      <div class="card-content">
        <div class="card-subtitle">ABOUT</div>
        <p class="card-desc">萤小宇</p>
        <p class="card-desc">前端，后端，技术宅</p>
      </div>
      <div class="card-social">
        <a href="https://github.com/zhaoty1021"><GithubFilled class="icon-item"/></a>
      </div>
    </div>
    <div class="card-section" v-show="activeTab === 'experience'">
      <div class="card-content">
        <div class="card-subtitle">WORK EXPERIENCE</div>
        <div class="card-timeline">
          
          <div class="card-item" data-year="2017">
            <div class="card-item-title">吉林大学</div>
            <div class="card-item-desc">计算机科学与技术</div>
          </div>
          <div class="card-item" data-year="2021">
            <div class="card-item-title">北京邮电大学</div>
            <div class="card-item-desc">计算机科学与技术</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-section" v-show="activeTab === 'contact'">
      <div class="card-content">
        <div class="card-subtitle">CONTACT</div>
        <div class="card-contact-wrapper">
          <div class="card-contact">
            <EnvironmentFilled class="icon-contact"/>
            <span style="font-size: 15px;">北京，顺义</span>
          </div>
          <div class="card-contact">
            <QqSquareFilled class="icon-contact"/>
            <span style="font-size: 15px;">1025338403</span>
          </div>
          <div class="card-contact">
            <MailFilled class="icon-contact"/>
            <span style="font-size: 15px;">zhaoty1021@outlook.com</span>
          </div>
          <button class="contact-me">CONTACT ME</button>
        </div>
      </div>
    </div>
    <div class="card-buttons">
      <button @click="activeTab = 'about'" :class="{ active: activeTab === 'about' }">ABOUT</button>
      <button @click="activeTab = 'experience'" :class="{ active: activeTab === 'experience' }">EXPERIENCE</button>
      <button @click="activeTab = 'contact'" :class="{ active: activeTab === 'contact' }">CONTACT</button>
    </div>
  </div>
</div>
</template>
<script setup lang="js">
import { 
    GithubFilled,
    EnvironmentFilled,
    MailFilled,
    QqSquareFilled
    } from '@ant-design/icons-vue';
import { ref } from 'vue';
const activeTab = ref('about'); // 默认显示 "关于" 部分

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

* {
  box-sizing: border-box;
}
body {
  color: #2b2c48;
  font-family: "Jost", sans-serif;
  background-image: url('~@/assets/picture.png');

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgb(8, 8, 8);
  color: #0ff;
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow:rgb(255, 255, 255) 0px 0px 5px; 
}


.card.active-about {
  height: 450px;
  .card-main {
    padding-top: 0;
  }
}

.card.active-experience {
  height: 500px;
  .card-main {
    padding-top: 0;
  }
}

.card.active-contact {
  height: 550px;
  .card-main {
    padding-top: 0;
  }
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname,
  .card-jobtitle {
    left: 86px;
    transform: none;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
  }
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.961);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: rgb(255, 255, 255);
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.card-buttons {
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;

  button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;

    &.is-active,
    &:hover {
      color: #2b2c48;
      border-bottom: 3px solid #0ff;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.2) 44%,
        rgba(211, 226, 255, 0.4) 100%
      );
    }
  }
}

.card-section {
  display: block;
  animation: fadeIn 0.6s both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;
  &:after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgba(81, 106, 204, 1) 100%
    );
    content: "";
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: "";
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(
      to bottom,
      lighten(#516acc, 20%) 0%,
      #516acc 100%
    );
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #e5e5e5;
  line-height: 1.5;
  font-family: "DM Sans", sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #e0e0e0;
  font-family: "DM Sans", sans-serif;
  line-height: 2;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

}



.contact-me {
  border: none;
  border-radius: 5px;
  letter-spacing: 5px;
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    rgba(83, 200, 239, 0.8) 0%,
    rgba(81, 106, 204, 0.8) 96%
  );
  cursor: pointer;
  color: #ffffff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}

.contact-me:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 1px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}

.contact-me::before {
  content: "";
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  z-index: -1;
  transition: width 1000ms;
}

.contact-me:hover::before {
  width: 150%;
}

.icon-item{
  font-size: 30px;
  color: #0ff;
}
.icon-contact{
  font-size: 20px;
  flex-shrink: 0;
    width: 30px;
    min-height: 20px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
}
</style>