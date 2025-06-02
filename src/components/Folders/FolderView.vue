<template>
  <div class="folder-view" :style="backgroundStyle">
    <div class="background-image"></div>

    <h1 class="fw-bold">{{ view.title }}</h1>
    <p>{{ view.description  }}</p>

    <div v-if="view.image" class="mt-5 d-flex w-100 justify-content-center align-items-center">
      <img :src="`/src/assets/images/${view.image}`" alt="">
      <div class="d-flex flex-column align-items-start justify-content-center">
        <p class="image-text">{{ view.image_description }}</p>
        <p class="image-subtext">{{ view.image_subdescription }}</p>
      </div>
    </div>
    <div v-if="view.sections" class="row mt-3 ms-1 me-1">
      <FolderViewItem 
        v-for="(section, index) in view.sections"
        :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
        :section="section"
        :important="true"
        :highlight="true"
        :icon_size="'48px'"
      />
    </div>
  </div>
</template>

<script setup>
import FolderViewItem from './FolderViewItem.vue';

const props = defineProps(['view', 'maximize', 'icon'])
</script>

<style scoped>
.folder-view {
  padding: 20px;
  font-family: Tahoma, sans-serif;
  color: #D6DFF5;
  background-color: #6375D6;
  width: 100%;
  height: 100%;
}

.background-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background-image: v-bind("`url('/src/assets/icons/${icon}')`");
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(100%);
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
  margin-right: -4%;
  margin-bottom: -4%;
}

.folder-view > *:not(.background-image) {
  position: relative;
  z-index: 1;
}

.folder-view p {
  color: white;
  font-size: 14px;
}

.image-text {
  margin: 0px 10px;
  color: #D6DFF5 !important;
  font-weight: bold;
  font-size: 32px !important;
}

.image-subtext {
  margin: 0px 10px;
  color: #D6DFF5 !important;
  font-weight: bold;
  font-size: 16px !important;
}

.folder-view img {
  width: 128px;
  border: 4px solid white;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.367);
  margin-left: 8px;
}
</style>