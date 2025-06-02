<template>
  <div class="login">
    <div class="header"></div>
    <hr>
    <div class="main d-flex align-items-center justify-content-center">
      <h3 v-if="busy" class="d-flex justify-content-end align-self-center w-100 welcome">welcome</h3>
      <div v-else class="w-100 d-flex flex-column align-items-end justify-content-center">
        <img src="@assets/images/windows-xp-full.png" alt="" width="132px">
        <p class="mt-2 me-3">To begin, click your user name</p>
      </div>
      <div class="vertical-hr"></div>
      <button class="w-100 d-flex user" @click="login">
        <img class="pfp" src="@assets/images/kevin-pfp.jpg" alt="" width="64px">
        <div class="ms-3 d-flex flex-column align-items-start">
          <p class="m-0 p-0">Kevin Villagrán</p>
          <p v-if="busy" class="p-0 busy-text">Applying your personal settings...</p>
        </div>
      </button>
    </div>
    <hr>
    <div class="footer"></div>
  </div>
</template>
<script setup>
import { inject, ref } from 'vue';

const busy = ref(false);
const toggleUserLogin = inject('toggleUserLogin')

function login() {
  busy.value = true;

  setTimeout(() => {
    busy.value = false;
    toggleUserLogin();
  }, 2000)
}

</script>

<style scoped>
  .login {    
    background: #9CB7EF;
    background: radial-gradient(circle at 160px 160px, rgba(156, 183, 239, 1) 0%, rgba(94, 130, 221, 1) 10%, rgba(90, 126, 220, 1) 11%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .login button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  .login button p {
    font-size: 18px;
  }

  .login .busy-text {
    font-size: 13px;
    margin-top: -4px;
    font-weight: bold;
    color: #00309C;
  }

  .login button img:hover{
    border: 2px solid #D9C65A;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.442);
  }

  .login hr {
    margin: 0;
    padding: 0;
  }

  .login .header,
  .login .footer {
    background-color: #00309C;
    width: 100%;
    height: 8%;
  }

  .login .main {
    flex: 1;
    width: 100%;
    overflow: auto;
  }

  .login .pfp {
    width: 64px;
    border: 2px solid white;
    border-radius: 5px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.211);
    margin-left: 8px;
  }

  .login p {
    color: white;
    font-family: Tahoma, sans-serif;
  }

  .login .welcome {
    color: white;
    font-style: italic;
    font-weight: bold;
    font-family: Tahoma, sans-serif;
    font-size: 36px;
    text-shadow: 2px 2px 1px #002f9c8c;
  }

  .vertical-hr {
    width: 2px;
    height: 100%;
    background: #FFFF;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.421) 50%, rgba(211, 229, 251, 0) 100%);
    margin: 0 32px;
  }
</style>