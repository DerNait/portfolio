<template>
  <div class="folder-container">
    <FolderHeader :name="name" />

    <div class="folder-body">
      <FolderSidebar 
        :style="{ width: maximize === false ? '20%' : '30%', height: '100%' }"
        :folders="folders"
      />
      <div :class="['folder-main', { view: view }]">
        <component v-if="view" :is="DynamicView" :view="view" :maximize="maximize" :icon="app.icon"/>
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
import { inject, provide, computed } from 'vue'
import FolderHeader from './FolderHeader.vue'
import FolderSidebar from './FolderSidebar.vue'
import FolderItem from './FolderItem.vue'
import FolderView from './FolderView.vue'
import ViewComponents from '../ViewComponents'

const props = defineProps(['app', 'name', 'sidebar_sections', 'folders', 'view'])
const maximize = inject('maximize')

provide('fatherApp', props.app)

const DynamicView = computed(() => {
  const componentName = props.view?.component
  return ViewComponents[componentName] || FolderView
})
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
</style>