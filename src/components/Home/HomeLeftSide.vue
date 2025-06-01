<template>
  <FolderItem
    class="mt-2 mb-2" 
    :name="'Internet'"
    :description="'Internet explorer'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <FolderItem
    class=" mb-2" 
    :name="'Internet'"
    :description="'Internet explorer'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <div class="separator"></div>
  <FolderItem 
    class="mb-2"
    :name="'Internet'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <FolderItem 
    class=" mb-2"
    :name="'Internet'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <FolderItem 
    class=" mb-2" 
    :name="'Internet'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <FolderItem 
    class=" mb-2"
    :name="'Internet'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <FolderItem 
    class=" mb-2"
    :name="'Internet'"
    :icon="'folder.png'"
    :icon_size="'40px'"
    :important="true"
  />
  <div class="separator"></div>
  <div class="all-programs">
    All Programs
    <img src="@icons/folder.png" alt="" width="40px">
  </div>
</template>

<script setup>
import FolderItem from '../Folders/FolderItem.vue';

</script>

<style scoped>
  .separator {
    margin: 1rem 0;
    height: 1px;
    background: #FFFF;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(151, 151, 151, 0.548) 50%, rgba(211, 229, 251, 0) 100%);
  }

  .all-programs {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 12px;
    font-family: Tahoma, sans-serif;
  }
</style>