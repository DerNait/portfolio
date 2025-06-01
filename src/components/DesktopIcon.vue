<template>
  <div class="desktop-icon">
    <img :src="`/src/assets/icons/${icon}`" alt="icon" />
    <p>Probando mas texto para ver</p>
  </div>
</template>

<script setup>
  const props = defineProps(['icon']);
</script>

<style scoped>
.desktop-icon {
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  cursor: pointer;
}

.desktop-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.desktop-icon p {
  font-size: 12px;
  margin: 4px 0 0;
  line-height: 1;
  color: white;
  text-shadow: 0.5px 2px 3px rgba(0, 0, 0, 0.626);
  text-overflow: ellipsis;
  font-family: 'Tahoma', sans-serif;
}
</style>