<template>
  <button class="start-button d-flex justify-content-center align-items-center">
    <img src="@icons/windows-xp-logo.png" alt="" width="32px" height="32px">
    start
  </button>
</template>

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

  .start-button img {
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.7));
  }
</style>