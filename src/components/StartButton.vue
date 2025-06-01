<template>
  <button 
    :class="`start-button d-flex justify-content-center align-items-center ` + pressedClass()"
    @click="toggleStartMenu"
  >
    <img src="@icons/windows-xp-logo.png" alt="" width="32px" height="32px">
    start
  </button>
</template>

<script setup>
import { inject } from 'vue';

  const props = defineProps(['pressed'])

  const isMenuHided = inject('isMenuHided')
  const selectedApp = inject('selectedApp')

  function pressedClass() {
    return !isMenuHided.value ? 'pressed' : '';
  }

  function toggleStartMenu() {
    isMenuHided.value = !isMenuHided.value;
    selectedApp.value = null;
  }
</script>

<style scoped>
  .start-button {
    background: rgb(68, 166, 69);
    background: linear-gradient(180deg, rgba(68, 166, 69, 1) 5%, rgba(135, 188, 135, 1) 9%, rgb(54, 143, 54) 32%, rgba(68, 166, 69, 1) 91%, rgba(39, 120, 39, 1) 100%);
    color: white;
    font-size: 24px;
    font-style: italic;
    width: 10%;
    height: 100%;
    border: none;
    border-radius: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-shadow: 0.5px 2px 2px rgba(0, 0, 0, 0.553);
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.7);
    font-family: 'Tahoma', sans-serif;
  }

  .pressed {
    box-shadow: inset -2px 2px 10px rgba(0, 0, 0, 0.853);
    background: #2C942E;
    background: linear-gradient(0deg, rgba(44, 148, 46, 1) 0%, rgba(66, 179, 70, 1) 5%, rgba(23, 149, 30, 1) 37%, rgba(23, 149, 30, 1) 67%, rgba(23, 149, 30, 1) 79%, rgba(69, 173, 69, 1) 92%, rgba(23, 149, 30, 1) 100%);
  }

  .start-button img {
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.697));
  }
</style>