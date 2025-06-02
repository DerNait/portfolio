<template>
  <template v-if="!login">
    <Login />
  </template>
  <template v-else>
    <transition name="hide-menu">
      <HomeWrapper 
        v-if="!isMenuHided"
        class="home-bar"
      />
    </transition>
    <div v-for="(app, index) in openedApps" :key="app.id">
      <transition name="minimize-window">
        <Window
          v-show="app.show"
          :app="app"
          :is_selected="isSelected(app)"
        >
          <template #default="{ maximize }">
            <Folder
              :name="app.name"
              :app="app"
              :folders="app.folders"
              :view="app.view"
              :maximize="maximize"
            />
          </template>
        </Window>
      </transition>
    </div>
    <div class="desktop-grid">
      <DesktopIcon
        v-for="(app, index) in appsData"
        :key="app.id"
        :app="app"
        :style="`grid-column: ${1 + Math.floor(index / 7)}; grid-row: ${(index % 7) + 1};`"
      />
    </div>
    <Taskbar 
      :opened_apps="openedApps"
      :selected_app="selectedApp"
      :is_menu_hided="isMenuHided"
    />
  </template>
</template>

<script setup>
import { ref, provide } from 'vue';
import DesktopIcon from '@components/DesktopIcon.vue';
import Taskbar from './components/Taskbar.vue';
import Window from './components/Window/Window.vue';
import HomeWrapper from './components/Home/HomeWrapper.vue';
import Folder from './components/Folders/Folder.vue';

import Apps from '@data/apps/Apps';
import Login from './Login.vue';

const appsData = ref(Apps);
provide('appsData', appsData);

const login = ref(sessionStorage.getItem('login') === 'true');

function toggleUserLogin() {
  login.value = !login.value;
  sessionStorage.setItem('login', login.value);
}
provide('toggleUserLogin', toggleUserLogin)

const isMenuHided = ref(true);
provide('isMenuHided', isMenuHided)

const openedApps = ref([])
provide('openedApps', openedApps)

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

function closeApp(id) {
  const index = openedApps.value.findIndex(app => app.id === id)
  if (index !== -1) {
    openedApps.value.splice(index, 1)
  }
}
provide('closeApp', closeApp)

function openApp(app) {
  const newApp = { 
    ...app, 
    id: openedApps.value.length + 1, 
    show: true 
  }

  openedApps.value.push(newApp)

  selectApp(newApp)
}
provide('openApp', openApp)

function replaceApp(prevApp, newApp) {
  const index = openedApps.value.findIndex(app => app.id === prevApp.id);
  
  if (index !== -1) {
    openedApps.value[index] = {
      ...newApp,
      id: prevApp.id,
      show: true
    };
  }
}
provide('replaceApp', replaceApp)
</script>