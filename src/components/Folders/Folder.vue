<template>
  <div class="folder-container">
    <FolderHeader :name="name" />

    <div class="folder-body">
      <FolderSidebar 
        :style="{ width: maximize === false ? '20%' : '30%', height: '100%' }"
        :folders="folders"
      />
      <div :class="['folder-main', { view: view }]">
        <div
          v-if="view"
          class="background-image"
          :style="{
            backgroundImage: `url('/src/assets/icons/${view.background}')`
          }"
        ></div>

        <div v-if="view">
          <FolderView :view="view" :maximize="maximize" />
        </div>
        <div v-else class="row ms-1 me-1">
          <FolderItem 
            v-for="(folder, index) in folders"
            :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
            :father_app="app"
            :folder="folder"
            :icon_size="'48px'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, provide } from 'vue'
import FolderHeader from './FolderHeader.vue'
import FolderSidebar from './FolderSidebar.vue'
import FolderItem from './FolderItem.vue'
import FolderView from './FolderView.vue'

const props = defineProps(['app', 'name', 'sidebar_sections', 'folders', 'view'])
const maximize = inject('maximize')

provide('fatherApp', props.app)

</script>

<style scoped>

.folder-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  font-family: 'Tahoma', sans-serif;
}

.folder-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.folder-main {
  flex: 1;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
}

.view {
  background-color: #6375D6;
}

.background-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(100%);
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

.folder-main > *:not(.background-image) {
  position: relative;
  z-index: 1;
}

</style>