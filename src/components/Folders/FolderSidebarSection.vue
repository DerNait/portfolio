<template>
    <div class="section-window">
      <div :class="`section-header` + headerClass()">
        {{ name }}
      </div>
      <div :class="`section-content` + contentClass()" v-if="content">
        <FolderItem :name="content[0].name" :icon="content[0].icon" :icon_size="'24px'" :highlight="true"/>
      </div>
    </div>
</template>

<script setup>
  import FolderItem from './FolderItem.vue';

  const props = defineProps(['important', 'content', 'name'])

  function headerClass() {
    return props.important ? '' : ' light';
  }

  function contentClass() {
    return props.important ? ' main' : '';
  }
</script>

<style scoped>
  .section-window {
    width: 100%;
    background: linear-gradient(180deg, #f4fbff, #ffffff);
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 10px auto;
  }

  .section-header {
    background: linear-gradient(90deg, #014AB5, #295DCE);
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  }

  .light {
    background: linear-gradient(90deg, #FFFFFF, #C7D3F7);
    color: #014AB5;
  }

  .section-content {
    background-color: #D6DFF7;
    padding: 15px;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    color: #014AB5;
  }

  .main {
    background-color: #EFF3FF;
  }
</style>