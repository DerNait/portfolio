<template>
  <a 
    v-if="folder?.redirect"
    :href="folder?.redirect"
    target="_blank"
    rel="noopener noreferrer"
    class="d-flex align-items-center redirect-class"
  >
    <img :src="`/src/assets/icons/${app?.icon || folder?.icon}`" :width="icon_size">
    <div class="ms-1 texts">
      <p :class="['m-0 p-0', { 'important-name': important, 'highlight-name': highlight }]">
        {{ app?.name || folder?.name }}
      </p>
      <div v-if="no_description == null || !no_description">
        <p class="description m-0 p-0">{{ app?.description || folder?.description }}</p>
        <p class="description m-0 p-0">{{ folder?.subdescription }}</p>
      </div>
    </div>
  </a>
  <button
    v-else
    class="d-flex align-items-center"
    @click="onButtonClick"
  >
    <img :src="`/src/assets/icons/${app?.icon || folder?.icon}`" alt="" :width="icon_size">
    <div class="ms-1 texts">
      <p 
        :class="[
          'm-0 p-0',
          { 'important-name': important, 'highlight-name': highlight }
        ]"
      >
        {{ app?.name || folder?.name }}
      </p>
      <div v-if="no_description == null || !no_description">
        <p class="description m-0 p-0">{{ app?.description || folder?.description }}</p>
        <p class="description m-0 p-0">{{ folder?.subdescription }}</p>
      </div>
    </div>
  </button>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps(['father_app', 'app', 'folder', 'important', 'highlight', 'icon_size', 'no_description'])
const replaceApp = inject('replaceApp')
const openApp = inject('openApp')

function onButtonClick() {
  if (props.father_app && props.app) {
    replaceApp(props.father_app, props.app)
    return
  }

  if (props.app) {
    openApp(props.app)
    return
  }

  if (props.folder.view) {
    replaceApp(props.father_app, props.folder)
  }
}
</script>

<style scoped>
button {
  font-family: 'Tahoma', sans-serif;
  font-size: 12px;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  text-align: start;
  margin: 0;
  padding: 0;
}

.redirect-class {
  text-decoration: none;
  font-family: 'Tahoma', sans-serif;
  font-size: 12px;
  color: black;
  margin: 0;
  padding: 0;
}

.important-name {
  font-weight: bold;
}

.highlight-name {
  color: #014AB5;
}

.description {
  color: #979797;
}
</style>