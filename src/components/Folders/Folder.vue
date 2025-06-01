<template>
  <div class="folder-container">
    <FolderHeader />

    <div class="folder-body">
      <FolderSidebar />

      <div class="folder-main">
        <div class="row">
          <FolderItem 
            class="mt-1 mb-1 col-6"
            :name="'Probando el name'"
            :description="'Esta sería la descripción en sí del proyecto'"
            :icon="'folder.png'" 
          />
          <FolderItem
            class="mt-1 mb-1 col-6"
            :name="'Probando el name'"
            :description="'Esta sería la descripción en sí del proyecto'"
            :icon="'folder.png'" 
          />
          <FolderItem 
            class="mt-1 mb-1 col-6"
            :name="'Probando el name'"
            :description="'Esta sería la descripción en sí del proyecto'"
            :icon="'folder.png'" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FolderHeader from './FolderHeader.vue'
import FolderSidebar from './FolderSidebar.vue'
import FolderItem from './FolderItem.vue'

const props = defineProps(['sidebar_sections', 'folders'])

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

.folder-body > *:first-child {
  width: 30%;
  height: 100%;
}

.folder-main {
  flex: 1;
  background-color: #ffffff;
  overflow: hidden;
}
</style>