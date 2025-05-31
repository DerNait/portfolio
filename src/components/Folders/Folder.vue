<template>
  <div class="folder-container">
    <FolderHeader />

    <div class="folder-body">
      <FolderSidebar />

      <div class="folder-main">
        <p style="color: black; padding: 8px;">
          Luego pongo algo aca...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import FolderHeader from './FolderHeader.vue'
import FolderSidebar from './FolderSidebar.vue'
</script>

<style scoped>

.folder-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.folder-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.folder-body > *:first-child {
  width: 35%;
  height: 100%;
}

.folder-main {
  flex: 1;
  background-color: #f5f5f5;
  overflow: hidden;
}
</style>