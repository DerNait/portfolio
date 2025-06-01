<template>
  <div class="taskbar">
    <StartButton />
    <div class="apps-container ms-3">
      <OpenedAppBar 
        v-for="(app, index) in opened_apps" 
        :key="index" 
        :app="app"
        :selected="isSelected(app)" 
      />
    </div>
  </div>
</template>

<script setup>
  import StartButton from './StartButton.vue';
  import OpenedAppBar from './OpenedAppBar.vue';

  const props = defineProps(['selected_app', 'opened_apps']);

  function isSelected(app) {
    return props.selected_app?.id === app.id;
  }
</script>

<style scoped>
  .taskbar {
    display: flex;
    align-items: center;
    width: 100%;
    background: blue;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: #1043B4;
    background: linear-gradient(
      0deg, rgba(16, 67, 180, 1) 
      0%, rgba(33, 98, 222, 1) 
      10%, rgba(33, 95, 220, 1) 
      33%, rgba(28, 84, 214, 1) 
      53%, rgba(35, 93, 218, 1) 
      75%, rgba(52, 113, 226, 1) 
      84%, rgba(107, 171, 255, 1) 
      94%, rgba(52, 113, 226, 1) 
      99%);
    font-family: 'Tahoma', sans-serif;
  }

  .apps-container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    gap: 0;
  }
</style>