<template>
  <button 
    :class="barClass()"
    @click="selectApp(app)"
  >
    <img :src="`/src/assets/icons/${app.icon}`" class="app-icon" />
    <span>{{ app.name }}</span>
  </button>
</template>

<script setup>
import { inject, ref } from 'vue';

const props = defineProps(['app', 'selected'])

const selectApp = inject('selectApp')

function barClass() {
  return (props.selected ? 'selected ' : '') + 'app-bar'
}

</script>

<style scoped>
.app-bar {
  margin: 4px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3980F4;
  border: none;
  color: white;
  padding: 0 10px;
  height: calc(100% - 8px); 
  min-width: 5%;
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  box-shadow: inset  1.5px 1.5px 4px rgba(255, 255, 255, 0.484);
  font-family: 'Tahoma', sans-serif;
}

.selected {
  background: #1B51B7;
  box-shadow: inset  1px 1px 4px rgba(0, 0, 0, 0.484);
}

.app-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
</style>