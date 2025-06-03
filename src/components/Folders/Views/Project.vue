<template>
  <div>
    <h1 class="fw-bold">{{ view.title }}</h1>
      <p class="text">{{ view.description  }}</p>
  
      <div v-if="view.image" class="mt-5 d-flex w-100 justify-content-center align-items-center">
      <img class="image" :src="`/src/assets/images/${view.image}`" alt="">
      <div class="d-flex flex-column align-items-start justify-content-center">
        <p class="image-text">{{ view.image_description }}</p>
        <p class="image-subtext">{{ view.image_subdescription }}</p>
      </div>
      </div>
    <div v-if="view.sections" class="row mt-3 ms-1 me-1">
      <h3 class="fw-bold mt-5 mb-3">Technologies used:</h3>
      <FolderViewItem 
        v-for="(technology, index) in view.sections"
        :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
        :section="technology"
        :important="true"
        :highlight="true"
        :icon_size="'48px'"
        :no_description="true"
      />
    </div>
    <div class="row mt-3 ms-1 me-1">
      <h3 class="fw-bold mt-5 mb-3">Take a look:</h3>
      <FolderViewItem 
        v-if="view.github"
        :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
        :section="gitHub"
        :important="true"
        :highlight="true"
        :icon_size="'48px'"
        :no_description="true"
      />
      <FolderViewItem 
        v-if="view.link"
        :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
        :section="website"
        :important="true"
        :highlight="true"
        :icon_size="'48px'"
        :no_description="true"
      />
    </div>
  </div>
</template>

<script setup>
import FolderViewItem from '../FolderViewItem.vue';
const props = defineProps(['view', 'maximize'])

const gitHub = {
  name: 'GitHub',
  icon: '/social/github.png',
  redirect: props.view.github
}

const website = {
  name: 'Website',
  icon: 'internet.png',
  redirect: props.view.link
}

</script>