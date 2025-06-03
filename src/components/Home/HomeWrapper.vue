<template>
  <div class="home d-flex flex-column justify-content-between">
    <div class="header">
      <img src="@assets/images/kevin-pfp.jpg" alt="" class="pfp">
      <p class="m-0 p-0 ms-2">
        Kevin Villagrán
      </p>
    </div>
    <div class="gold-line"></div>
    <div class="main d-flex">
      <div class="left-side">
        <HomeLeftSide />
      </div>
      <div class="right-side">
        <HomeRightSide />
      </div>
    </div>
    <div class="footer d-flex align-items-center justify-content-end">
      <button class="home-footer-button" @click="() => {isMenuHided = true, toggleUserLogin()}">
        <img src="@icons/logout.png" alt="" width="28px">
        Log Off
      </button>
      <button class="home-footer-button">
        <img src="@icons/shutdown.png" alt="" width="28px">
        Turn Off Computer
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import HomeLeftSide from './HomeLeftSide.vue';
import HomeRightSide from './HomeRightSide.vue';

const props = defineProps(['left_items', 'right_items'])
const toggleUserLogin = inject('toggleUserLogin')
const isMenuHided = inject('isMenuHided')

</script>

<style scoped>
.home {
  border-radius: 10px 10px 1px 1px;
  background: white;
  box-shadow: 2px 2px 4px #00000079;
  border: 2px solid #002DD1;
  border-top: none;
  font-family: 'Trebuchet MS', sans-serif;
}

.header {
  height: 110px;
  width: 100%;
  background: #4791ED;
  background: linear-gradient(0deg, rgba(71, 145, 237, 1) 0%, rgba(33, 98, 222, 1) 42%, rgba(28, 84, 214, 1) 61%, rgba(35, 93, 218, 1) 75%, rgba(52, 113, 226, 1) 90%, rgba(107, 171, 255, 1) 95%, rgba(52, 113, 226, 1) 99%);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 2px solid #4B82D5;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.516);
}

.gold-line {
  height: 4px;
  width: 100%;
  background: #FFFF;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #c6966d 50%, rgba(211, 229, 251, 1) 100%);
}

.footer {
  height: 60px;
  width: 100%;
  background: #0E5ECA;
  background: linear-gradient(0deg, rgba(14, 94, 202, 1) 0%, rgba(63, 140, 231, 1) 100%);
  color: white;
  font-family: 'Tahoma', sans-serif;
  font-size: 12px;
  text-shadow: 0.5px 2px 2px rgba(0, 0, 0, 0.279);
  padding-right: 8px;
  border-top: 1px solid #4474B2;
}

.main {
  height: 100%;
  width: 100%;
}

.left-side {
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
}

.right-side {
  height: 100%;
  width: 100%;
  background-color: #D3E5FB;
  border-left: 1px solid #A3B8D3;
}

.pfp {
  width: 64px;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.367);
  margin-left: 8px;
}

.home-footer-button {
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  font-family: Tahoma, sans-serif;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.275);
  margin: 0 2px;
}
</style>

