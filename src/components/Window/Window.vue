<template>
  <div
    :class="['window', unselectedClass(), { 'window-transition': applyTransition }]"
    :style="{ 
      top: maximize ? position.y + 'px' : '0px', 
      left: maximize ? position.x + 'px' : '0px',
      width: maximize ? '50%' : '100%',
      height: maximize ? '80%' : 'calc(100% - 40px)', 
      borderTopRightRadius: maximize ? '7px' : '0px', 
      borderTopLeftRadius: maximize ? '7px' : '0px', 
    }"
    ref="windowRef"
    @mousedown="selectApp(props.app)"
  >
    <div 
      class="header d-flex align-items-center justify-content-between"
      :style="{ 
          borderTopRightRadius: maximize ? '7px' : '0px', 
          borderTopLeftRadius: maximize ? '7px' : '0px', 
      }"
      @mousedown="startDrag"
    >
      <div class="ms-1 d-flex header-name align-items-center">
        <img
          :src="`/icons/${app.icon}`"
          alt=""
          width="18px"
          height="18px"
          class="me-1"
        />
        {{ app.name }}
      </div>
      <div class="d-flex header-buttons align-items-center">
        <HeaderButton 
          :icon="'minimize.png'" 
          :is_selected="is_selected" 
          :on_button_clicked="execHideWindow"
        />
        <HeaderButton 
          :icon="maximize ? 'maximize.png' : 'restore.png'" 
          :is_selected="is_selected"
          :on_button_clicked="toggleMaximizeWindow"
        />
        <HeaderButton 
          :icon="'close.png'" 
          :is_selected="is_selected"
          :on_button_clicked="execCloseApp" 
          class="me-1"/>
      </div>
    </div>
    <div class="window-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { inject, provide, ref } from 'vue'
import HeaderButton from './HeaderButton.vue';

const props = defineProps(['app', 'is_selected'])
const maximize = ref(['false']);
provide('maximize', maximize)

const hideWindow = inject('hideWindow')
function execHideWindow() {
  if (hideWindow) {
    hideWindow(props.app.id)
  }
}

const closeApp = inject('closeApp')
function execCloseApp() {
  if (closeApp) {
    closeApp(props.app.id)
  }
}

const selectApp = inject('selectApp')

function unselectedClass() {
  return props.is_selected ? '' : ' unselected';
}

const position = ref({ x: 100, y: 100})
const dragging = ref(false)
const offset = ref({ x: 0, y: 0 })
const windowRef = ref(null)
const applyTransition = ref(false)

function toggleMaximizeWindow() {
  applyTransition.value = true
  maximize.value = !maximize.value

  setTimeout(() => {
    applyTransition.value = false
  }, 300)
}


const startDrag = (e) => {
  if (props.maximize) return

  dragging.value = true
  offset.value = {
    x: e.clientX - position.value.x,
    y: e.clientY - position.value.y,
  }
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
  if (props.maximize) return

  if (!dragging.value) return

  const winEl = windowRef.value
  if (!winEl) return

  const winWidth = winEl.offsetWidth
  const winHeight = winEl.offsetHeight
  const maxX = window.innerWidth - winWidth
  const maxY = window.innerHeight - winHeight

  let newX = e.clientX - offset.value.x
  let newY = e.clientY - offset.value.y

  newX = Math.max(0, Math.min(newX, maxX))
  newY = Math.max(0, Math.min(newY, maxY))

  position.value = { x: newX, y: newY }
  selectApp(props.app)
}

const stopDrag = () => {
  if (props.maximize) return

  dragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

</script>

<style scoped>
.window {
  position: absolute;
  background: #002DD1;
  border: 2px solid #002DD1;
  border-top: none;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  user-select: none;
  z-index: 2;
}

.window-transition {
  transition: top 0.25s ease, left 0.25s ease, width 0.25s ease, height 0.25s ease;
}

.header {
  height: 36px;
  width: 100%;
  background: #1043B4;
  background: linear-gradient(
    0deg, rgb(16, 67, 180) 
    0%, rgba(33, 98, 222, 1) 
    10%, rgba(33, 95, 220, 1) 
    33%, rgba(28, 84, 214, 1) 
    53%, rgba(35, 93, 218, 1) 
    75%, rgba(52, 113, 226, 1) 
    84%, rgba(107, 171, 255, 1) 
    94%, rgba(52, 113, 226, 1) 
    99%);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: white;
}


.header-name {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.743);
}

.header-buttons img{
 margin: 0px 2px;
 width: 22px;
 height: 22px;
}

.unselected {
  background: #7A93DF;
  border: 2px solid #7A93DF;
  border-top: none;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  z-index: 1;
}

.unselected .header {
  background: #7A93DF;
  background: linear-gradient(0deg, rgba(122, 147, 223, 1) 0%, rgba(128, 166, 231, 1) 10%, rgba(129, 160, 230, 1) 33%, rgba(122, 150, 223, 1) 53%, rgba(118, 147, 219, 1) 75%, rgba(128, 155, 224, 1) 84%, rgba(155, 182, 234, 1) 94%, rgba(120, 153, 229, 1) 100%); 
}

.unselected .header-buttons img {
  opacity: 0.5;
}

.window-content {
  height: calc(100% - 36px);
  overflow: hidden;
  box-sizing: border-box;
}
</style>