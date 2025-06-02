<template>
  <div class="section-window">
    <div :class="['section-header', { light: !important }]">
      {{ name }}
    </div>
    
    <div 
      v-if="apps || folders" 
      :class="['section-content', { main: important }]"
    >
      <div v-if="apps">
        <FolderItem
          v-for="(app, index) in apps" 
          :name="app.name"
          :app="app"
          :icon_size="'24px'"
          :highlight="true"
          :no_description="true"
        />
      </div>
      <div v-else>
        <FolderItem
          v-for="(folder, index) in folders" 
          :name="folder.name"
          :folder="folder"
          :icon_size="'24px'"
          :highlight="true"
          :no_description="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FolderItem from './FolderItem.vue';
const props = defineProps(['important', 'apps', 'folders', 'name'])


</script>

<style scoped>
  .section-window {
    width: 100%;
    background: linear-gradient(180deg, #f4fbff, #ffffff);
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 10px auto;
  }

  .section-header {
    background: linear-gradient(90deg, #014AB5, #295DCE);
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  }

  .light {
    background: linear-gradient(90deg, #FFFFFF, #C7D3F7);
    color: #014AB5;
  }

  .section-content {
    background-color: #D6DFF7;
    padding: 15px;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    color: #014AB5;
  }

  .main {
    background-color: #EFF3FF;
  }
</style>