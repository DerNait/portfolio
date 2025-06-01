<template>
  <button class="d-flex align-items-center">
      <img :src="`/src/assets/icons/${icon}`" alt="" :width="icon_size">
      <div class="ms-1 texts">
        <p :class="`m-0 p-0 ` + nameClass()">{{ name }}</p>
        <p class="description m-0 p-0">{{ description }}</p>
      </div>
  </button>
</template>

<script setup>
  const props = defineProps(['name', 'description', 'icon', 'important', 'highlight', 'icon_size'])

  function nameClass() {
    return importantNameClass() + highlightNameClass();
  }

  function importantNameClass() {
    return props.important ? ' important-name ' : '';
  }

  function highlightNameClass() {
    return props.highlight ? ' highlight-name ' : '';
  }
</script>

<style scoped>
  button {
    font-family: 'Tahoma', sans-serif;
    font-size: 12px;
    border: 0;
    background-color: rgba(255, 255, 255, 0);
    text-align: start;
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