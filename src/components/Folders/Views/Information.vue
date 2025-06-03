<template>
    <div>
        <h1 class="fw-bold">{{ view.title }}</h1>
        <p class="text">{{ view.description  }}</p>
    
        <div v-if="view.image" class="mt-5 d-flex w-100 justify-content-center align-items-center">
        <img class="pfp-image" :src="`/src/assets/images/${view.image}`" alt="">
        <div class="d-flex flex-column align-items-start justify-content-center">
            <p class="image-text">{{ view.image_description }}</p>
            <p class="image-subtext">{{ view.image_subdescription }}</p>
        </div>
        </div>
        <div v-if="view.sections" class="row mt-3 ms-1 me-1">
        <FolderViewItem 
            v-for="(section, index) in view.sections"
            :class="['mt-1', 'mb-1', maximize === false ? 'col-4' : 'col-6']"
            :section="section"
            :important="true"
            :highlight="true"
            :icon_size="'48px'"
        />
        </div>
    </div>
</template>

<script setup>
import FolderViewItem from '../FolderViewItem.vue';

const props = defineProps(['view', 'maximize'])
</script>