<template>
  <button 
    :class="`operation-buttons` + unselectedClass()"
    @click="onButtonClicked()"
  >
    <img :src="`/src/assets/icons/${icon}`" alt="" />
  </button>
</template>

<script setup>
  const props = defineProps(['icon', 'is_selected', 'on_button_clicked']);

  function unselectedClass() {
    return props.is_selected ? '' : ' unselected-button';
  }

  function onButtonClicked() {
    props.on_button_clicked()
  }
</script>

<style>
.operation-buttons {
  background-color: rgba(0, 255, 255, 0);
  border: 0;
  margin: 0;
  padding: 0;
}

.operation-buttons img{
  margin: 0px 2px;
  width: 22px;
  height: 22px;
}

.unselected-button {
  background: #7a93df00;
  border: 0;
  border-top: none;
}

.unselected-button img {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  opacity: 0.5;
}
</style>