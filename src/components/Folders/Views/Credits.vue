<template>
  <div>
    <h1 class="fw-bold">{{ view.title }}</h1>
    <p class="text">{{ view.description  }}</p>
    
    <ul>
      <div v-for="(credit, index) in view.credits">
        <li>{{ credit }}</li>
      </div>
    </ul>

    <div v-if="view.sections" class="row mt-3 ms-1 me-1">
      <h3 class="fw-bold mt-5 mb-3">Technologies used for this portfolio:</h3>
      <FolderViewItem 
        v-for="(technology, index) in view.sections"
        :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
        :section="technology"
        :important="true"
        :highlight="true"
        :icon_size="'48px'"
        :no_description="true"
      />
    </div>
  </div>
</template>

<script setup>
import FolderViewItem from '../FolderViewItem.vue';
const props = defineProps(['view', 'maximize'])
</script>