<template>
  <a 
    :href="section?.redirect"
    target="_blank"
    rel="noopener noreferrer"
    class="d-flex align-items-center redirect-class"
  >
    <img :src="`/icons/${app?.icon || section?.icon}`" :width="icon_size">
    <div class="ms-1 texts">
      <p :class="['m-0 p-0', { 'important-name': important, 'highlight-name': highlight }]">
        {{ app?.name || section?.name }}
      </p>
      <div v-if="no_description == null || !no_description">
        <p class="description m-0 p-0">{{ app?.description || section?.description }}</p>
        <p class="description m-0 p-0">{{ section?.subdescription }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>

const props = defineProps(['section', 'important', 'highlight', 'icon_size', 'no_description'])

</script>

<style scoped>
button {
  font-family: 'Tahoma', sans-serif;
  font-size: 18px;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  text-align: start;
}

.redirect-class {
  text-decoration: none;
}

.important-name {
  font-weight: bold;
}

.highlight-name {
  color: #ffffff;
}

.description {
  color: #ffffff;
  font-size: 12px;
}

</style>