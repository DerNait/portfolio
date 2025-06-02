<template>
  <div class="sidebar p-3">
    <FolderSidebarSection 
      :important="true" 
      :name="`File and Folder Tasks`" 
      :folders="folders"
    />

    <FolderSidebarSection 
      :important="false" 
      :name="`Other Places`" 
      :apps="appsData"
    />
  </div>
</template>

<script setup>
  import { inject } from 'vue';
import FolderSidebarSection from './FolderSidebarSection.vue';

const props = defineProps(['folders']);
const appsData = inject('appsData');

</script>

<style scoped>
  .sidebar {
    background-color: #6375D6;
    background: linear-gradient(180deg, #7AA1E6, #6375D6);
  }
</style>