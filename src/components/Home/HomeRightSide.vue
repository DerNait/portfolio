<template>
  <div class="m-2">
    <FolderItem
      :folder="myDocuments"
      :icon_size="'32px'"
      :important="true"
      :highlight="true"
    />
    <FolderItem
      class=" " 
      :folder="myRecentDocuments"
      :icon_size="'32px'"
      :important="true"
      :highlight="true"
    />
    <FolderItem 
      
      :folder="myPictures"
      :icon_size="'32px'"
      :important="true"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :folder="myMusic"
      :icon_size="'32px'"
      :important="true"
      :highlight="true"
    />
    <FolderItem 
      class=" " 
      :folder="myComputer"
      :icon_size="'32px'"
      :important="true"
      :highlight="true"
    />
   <div class="separator"></div>
    <FolderItem 
      class=" "
      :folder="controlPanel"
      :icon_size="'32px'"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :name="'Internet getting very very explored'"
      :icon="'folder.png'"
      :icon_size="'32px'"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :folder="programAccess"
      :icon_size="'32px'"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :folder="printersFaxes"
      :icon_size="'32px'"
      :highlight="true"
    />
    <div class="separator"></div>
    <FolderItem 
      class=" "
      :folder="helpSupport"
      :icon_size="'32px'"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :folder="search"
      :icon_size="'32px'"
      :highlight="true"
    />
    <FolderItem 
      class=" "
      :folder="run"
      :icon_size="'32px'"
      :highlight="true"
    />
  </div>
</template>

<script setup>
import ControlPanel from '../../data/home/ControlPanel';
import HelpSupport from '../../data/home/HelpSupport';
import MyComputer from '../../data/home/MyComputer';
import MyDocuments from '../../data/home/MyDocuments';
import MyMusic from '../../data/home/MyMusic';
import MyPictures from '../../data/home/MyPictures';
import MyRecentDocuments from '../../data/home/MyRecentDocuments';
import PrintersFaxes from '../../data/home/PrintersFaxes';
import ProgramAccess from '../../data/home/ProgramAccess';
import Run from '../../data/home/Run';
import Search from '../../data/home/Search';

import FolderItem from '../Folders/FolderItem.vue';

const controlPanel = ControlPanel;
const helpSupport = HelpSupport;
const myComputer = MyComputer;
const myDocuments = MyDocuments;
const myMusic = MyMusic;
const myPictures = MyPictures;
const myRecentDocuments = MyRecentDocuments;
const printersFaxes = PrintersFaxes;
const programAccess = ProgramAccess;
const run = Run;
const search = Search; 

</script>

<style scoped>
  .separator {
    margin: 0.5rem 0;
    height: 1px;
    background: #FFFF;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #0149b554 50%, rgba(211, 229, 251, 0) 100%);
  }
</style>