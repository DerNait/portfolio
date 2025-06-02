<template>
  <button 
    class="desktop-icon"
    @click="onOpenApp"
  >
    <img :src="`/src/assets/icons/${app.icon}`" alt="icon" />
    <p>{{ app.name }}</p>
  </button>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps(['app'])

const openedApps = inject('openedApps')
const openApp = inject('openApp')

function onOpenApp() {
  openApp(props.app)
}
</script>

<style scoped>
.desktop-icon {
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.desktop-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.desktop-icon p {
  font-size: 12px;
  margin: 4px 0 0;
  line-height: 1;
  color: white;
  text-shadow: 0.5px 2px 3px rgba(0, 0, 0, 0.626);
  text-overflow: ellipsis;
  font-family: 'Tahoma', sans-serif;
}
</style>