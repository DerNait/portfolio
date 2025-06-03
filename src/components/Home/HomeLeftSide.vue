<template>
  <div class="d-flex flex-column h-100">
    <template v-for="(app, index) in appsData" :key="app.id">
      <FolderItem
        class="m-1"
        :app="app"
        :icon_size="'40px'"
        :important="true"
      />
      <div v-if="index === 2" class="separator"></div>
    </template>

    <div class="mt-auto mb-2">
      <div class="separator"></div>
      <div class="all-programs d-flex align-items-center">
        All Programs
        <img src="@icons/go.png" alt="" width="32px" class="ms-2"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import FolderItem from '../Folders/FolderItem.vue';

const appsData = inject('appsData');

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