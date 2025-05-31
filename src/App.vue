<template>
    <HomeWrapper class="home-bar"/>
    <Window :name="'Probando esto'" :icon="'pinball.png'">
        <Folder />
    </Window>
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
    <Taskbar />
</template>

<script setup>
    import DesktopIcon from '@components/DesktopIcon.vue';
    import Taskbar from './components/Taskbar.vue';
    import Window from './components/Window.vue';
    import HomeWrapper from './components/Home/HomeWrapper.vue';
    import Folder from './components/Folders/Folder.vue';
</script>