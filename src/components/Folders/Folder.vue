<template>
  <div class="folder-container">
    <FolderHeader />

    <div class="folder-body">
      <FolderSidebar 
        :style="{ width: props.maximize === false ? '20%' : '30%', height: '100%' }"
      />

      <div class="folder-main">
        <div class="row ms-1 me-1">
          <FolderItem 
            v-for="(folder, index) in folders"
            :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
            :name="folder.name"
            :description="folder.description"
            :icon="folder.icon"
            :icon_size="'48px'"
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

const props = defineProps(['sidebar_sections', 'folders', 'maximize'])

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

/* .folder-body > *:first-child {
  width: 30%;
  height: 100%;
} */

.folder-main {
  flex: 1;
  background-color: #ffffff;
  overflow: hidden;
}
</style>