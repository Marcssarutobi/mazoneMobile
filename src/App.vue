<template>
  <ion-app>
    <ion-router-outlet :animated="!noTransition" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { watch, ref } from 'vue'
import {  useRoute } from 'vue-router'


const route = useRoute()

const noTransition = ref(false)

watch(
  () => route.fullPath,
  () => {
    noTransition.value = route.meta.noTransition === true
  },
  { immediate: true }
)

</script>
