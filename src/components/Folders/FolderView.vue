<template>
  <div class="folder-view d-flex flex-column">
    <div class="background-image"></div>

    <component class="folder-view-content flex-grow-1" :is="DynamicView" :view="view" :maximize="maximize" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ViewComponents from '../ViewComponents'
import Information from './Views/Information.vue';

const DynamicView = computed(() => {
  const componentName = props.view?.component
  return ViewComponents[componentName] || Information
})

const props = defineProps(['view', 'maximize', 'icon'])
</script>

<style>
.folder-view {
  padding: 20px;
  font-family: Tahoma, sans-serif;
  color: #D6DFF5;
  background-color: #6375D6;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.folder-view-content {
  overflow: auto;
}

.background-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background-image: v-bind("`url('/icons/${icon}')`");
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

.folder-view-content .text {
  color: white;
  font-size: 14px;
}

.folder-view-content .image {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.367);
  width: 70%;
}

.folder-view-content .pfp-image {
  width: 128px;
  border: 4px solid white;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.367);
  margin-left: 8px;
}

.folder-view-content .image-text {
  margin: 0px 10px;
  color: #D6DFF5 !important;
  font-weight: bold;
  font-size: 32px !important;
}

.folder-view-content .image-subtext {
  margin: 0px 10px;
  color: #D6DFF5 !important;
  font-weight: bold;
  font-size: 16px !important;
}
</style>