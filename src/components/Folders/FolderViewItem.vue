<template>
  <button 
    class="d-flex align-items-center"
    @click="onButtonClick"
  >
      <img :src="`/src/assets/icons/${section?.icon}`" alt="" :width="icon_size">
      <div class="ms-1 texts">
        <p 
          :class="[
            'm-0 p-0',
            { 'important-name': important, 'highlight-name': highlight }
          ]"
        >
          {{ section?.name }}
        </p>
        <div v-if="no_description == null || !no_description">
          <p class="description m-0 p-0">{{ section?.description }}</p>
          <p class="description m-0 p-0">{{ section?.subdescription }}</p>
        </div>
      </div>
  </button>
</template>

<script setup>

const props = defineProps(['section', 'important', 'highlight', 'icon_size', 'no_description'])

function onButtonClick() {
  if (props.section.redirect) {
    window.open(props.section.redirect, '_blank');
  }
}

</script>

<style scoped>
button {
  font-family: 'Tahoma', sans-serif;
  font-size: 18px;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  text-align: start;
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