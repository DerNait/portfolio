<template>
  <div class="sidebar p-3">
    <div class="section-window">
      <div class="section-header">
        File and Folder Tasks
      </div>
      <div class="section-content main">
        Aqui algo
      </div>
    </div>
    <div class="section-window mt-4">
      <div class="section-header light">
        Other Places
      </div>
      <div class="section-content">
        Aqui algo
      </div>
    </div>
    <div class="section-window mt-4">
      <div class="section-header light">
        Details
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sidebar {
    background-color: #6375D6;
    background: linear-gradient(180deg, #7AA1E6, #6375D6);
  }

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