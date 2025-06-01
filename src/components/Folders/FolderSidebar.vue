<template>
  <div class="sidebar p-3">
    <FolderSidebarSection :important="true" :name="`File and Folder Tasks`" :content="test"/>
  </div>
</template>

<script setup>
  import FolderItem from './FolderItem.vue';
  import FolderSidebarSection from './FolderSidebarSection.vue';

  const test = [
      {
        name: 'Testing this',
        icon: 'folder.png'
      }
    ]
</script>

<style scoped>
  .sidebar {
    background-color: #6375D6;
    background: linear-gradient(180deg, #7AA1E6, #6375D6);
  }
</style>