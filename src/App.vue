<template>
  <transition name="hide-menu">
    <HomeWrapper 
      v-if="!isMenuHided"
      class="home-bar"
    />
  </transition>
  <div v-for="(app, index) in openedApps">
    <transition name="minimize-window">
      <Window
        v-show="app.show"
        :app="app"
        :is_selected="isSelected(app)"
      >
        <template #default="{ maximize }">
          <Folder 
            :folders="app.folders"
            :maximize="maximize"
          />
        </template>
      </Window>
    </transition>
  </div>
  <div class="desktop-grid">
    <DesktopIcon :icon="'pinball.png'" style="grid-column: 1; grid-row: 1;" />
    <DesktopIcon :icon="'windows-xp-logo.png'" style="grid-column: 1; grid-row: 2;" />
    <DesktopIcon :icon="'test.png'"  style="grid-column: 1; grid-row: 3;" />
    <DesktopIcon :icon="'folder.png'"  style="grid-column: 1; grid-row: 4;" />
    <DesktopIcon :icon="'test.png'"  style="grid-column: 1; grid-row: 5;" />
    <DesktopIcon :icon="'test.png'"  style="grid-column: 1; grid-row: 6;" />
    <DesktopIcon :icon="'test.png'"  style="grid-column: 1; grid-row: 7;" />
    <DesktopIcon :icon="'test.png'"  style="grid-column: 2; grid-row: 7;" />
  </div>
  <Taskbar 
    :opened_apps="openedApps"
    :selected_app="selectedApp"
    :is_menu_hided="isMenuHided"
  />
</template>

<script setup>
  import { ref, provide } from 'vue';
  import DesktopIcon from '@components/DesktopIcon.vue';
  import Taskbar from './components/Taskbar.vue';
  import Window from './components/Window/Window.vue';
  import HomeWrapper from './components/Home/HomeWrapper.vue';
  import Folder from './components/Folders/Folder.vue';

  const isMenuHided = ref(true);
  provide('isMenuHided', isMenuHided)

  const openedApps = ref([
    {
      id: 1,
      name: 'Probando esto',
      description: 'Testing the layout',
      icon: 'pinball.png',
      show: true,
      folders: [
        {
          name: 'Probando el name',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'pinball.png',
        },
        {
          name: 'Probando el windows',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'windows-xp-logo.png',
        },
        {
          name: 'Probando el folder',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'folder.png',
        },
      ]
    },
    {
      id: 2,
      name: 'Probando esto 2',
      description: 'Testing the layout',
      icon: 'pinball.png',
      show: true,
      folders: [
        {
          name: 'Probando el name',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'pinball.png',
        },
        {
          name: 'Probando el windows',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'windows-xp-logo.png',
        },
        {
          name: 'Probando el folder',
          description: 'Esta sería la descripción en sí del proyecto',
          icon: 'folder.png',
        },
      ]
    },
  ])
  const selectedApp = ref(openedApps.value[0])
  provide ('selectedApp', selectedApp)

  function selectApp(app) {
    selectedApp.value = app
    isMenuHided.value = true
  }
  provide ('selectApp', selectApp)

  function isSelected(app) {
    return selectedApp.value?.id === app.id
  }

  function hideWindow(id) {
    const app = openedApps.value.find(a => a.id === id)
    
    if (app) {
      app.show = false
      selectedApp.value = false
    }
  }
  provide('hideWindow', hideWindow)
</script>