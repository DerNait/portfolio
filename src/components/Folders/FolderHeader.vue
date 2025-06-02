<template>
  <div class="header d-flex flex-column">
    <div class="subheader first-header d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-around" style="min-width: 30%;">
        <p class="m-0 p-0">File</p>
        <p class="m-0 p-0">Edit</p>
        <p class="m-0 p-0">View</p>
        <p class="m-0 p-0">Favorites</p>
        <p class="m-0 p-0">Tools</p>
        <p class="m-0 p-0">Help</p>
      </div>
      <div class="windows-logo">
        <img src="@icons/windows-xp-logo.png" alt="" width="25px">
      </div>
    </div>
    <div class="d-flex subheader second-header">
      <div class="lower-header-buttons" style="width: 25%;">
        <div class="d-flex align-items-center">
          <img src="@icons/folder.png" alt="">
          <p class="p-0 m-0">Back</p>
        </div>
        <img src="@icons/folder.png" alt="">
        <img src="@icons/folder.png" alt="">
      </div>
      <div class="lower-header-buttons" style="width: 25%;">
        <div class="d-flex align-items-center">
          <img src="@icons/lupa.png" alt="">
          <p class="p-0 m-0">Search</p>
        </div>
        <div class="d-flex align-items-center">
          <img src="@icons/Folder.png" alt="">
          <p class="p-0 m-0">Search</p>
        </div>
      </div>
      <div class="lower-header-buttons last" style="width: 75%;">
        <div class="d-flex align-items-center ms-1">
          <img src="@icons/folder.png" alt="">
        </div>
      </div>
    </div>
    <div class="subheader third-header d-flex align-items-center">
      <p class="m-0 p-0 ms-1">Address</p>
      <div class="address ms-1">
        <div class="d-flex align-items-center">
          <img src="@icons/folder.png" alt="">
          <p class="m-0 p-0">C:\User\Documents\{{ name }}</p>
        </div>
        <div>
          <img src="@icons/folder.png" alt="">
        </div>
      </div>
      <div class="d-flex align-items-center">
        <img src="@icons/folder.png" alt="" style="">
        <p class="m-0 p-0" style="color: black;">Go</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['name'])

</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: #EEEBD3;
  background: linear-gradient(90deg, #F2F4F2 0%, #EEEBD3 100%);
  font-family: 'Tahoma', sans-serif;
  color: #C6C5BC;
}

.subheader {
  width: 100%;
  border-bottom: 1px solid #E5E1D5;
  border-top: 1px solid #F5F5EF;
}

.first-header {
  height: 25px;
  font-size: 13px;
}
.second-header {
  height: 45px;
}
.third-header {
  height: 30px;
  font-size: 13px;
}

.third-header img {
  width: 18px;
  margin: 0 2px;
}

.windows-logo {
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-left: 1px solid #E5E1D5;
}

.lower-header-buttons {
  height: 100%;
  border: none;
  border-right: 1px solid #E5E1D5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
}

.lower-header-buttons img {
  width: 32px;
}

.last {
  justify-content: start;
}

.address {
  width: 85%;
  height: 90%;
  background-color: white;
  border: 1px solid #B3C4D4;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>