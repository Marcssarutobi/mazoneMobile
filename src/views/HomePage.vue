<template>
  <ion-page>
    <!-- Header -->
    <ion-header :translucent="true" class="ion-padding-top bg-blue-50">
      <ion-toolbar class="px-4 py-3" >
        <div class="w-full flex justify-between items-center">
          <div class="text-base font-semibold text-blue-800">
            Bienvenue <span class="text-primary">John Doe</span>
          </div>
          <ion-button fill="clear" class="text-blue-500 -mr-2" @click="$router.push('/login')">
            <ion-icon :icon="logOutOutline" size="large"></ion-icon>
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="bg-gray-50">
      <div class="p-4 space-y-5 pb-20">
        <!-- Grande carte principale -->
        <div class="bg-blue-100 rounded-2xl shadow-sm p-6 flex items-center justify-between">
          <div>
            <div class="text-4xl font-bold text-blue-700">09</div>
            <div class="text-blue-600 text-sm">Signalements envoyés</div>
          </div>
          <ion-icon :icon="alertCircleOutline" size="large" class="text-blue-600 text-3xl"></ion-icon>
        </div>

        <!-- Derniers signalements -->
        <div>
          <h2 class="text-lg font-semibold text-blue-800 mb-3">Derniers signalements</h2>
          <ul class="bg-white rounded-xl shadow-sm divide-y divide-gray-200 overflow-hidden">
            <li
              v-for="report in lastReports"
              :key="report.id"
              class="px-4 py-4 flex justify-between items-start hover:bg-gray-50 transition"
            >
              <div>
                <div class="font-medium text-gray-800 mb-1">{{ report.title }}</div>
                <div class="text-xs text-gray-500">{{ report.date }}</div>
              </div>
              <ion-icon :icon="chevronForwardOutline" class="text-gray-300 text-lg mt-1"></ion-icon>
            </li>
            <li
              v-if="lastReports.length === 0"
              class="px-4 py-4 text-gray-400 text-center text-sm"
            >
              Aucun signalement
            </li>
          </ul>
        </div>
      </div>
    </ion-content>

    <!-- Tab Bar -->
    <ion-footer class="bg-white shadow-t border-t border-gray-200">
      <div class="flex justify-around items-center py-2 text-[#595959]">
        <div class="flex flex-col items-center" @click="$router.push('/home')">
          <ion-icon :icon="homeOutline" class="text-xl"></ion-icon>
          <span class="text-xs mt-1">Home</span>
        </div>

        <div class="flex flex-col items-center" @click="$router.push('/liste')">
          <ion-icon :icon="listOutline" class="text-xl"></ion-icon>
          <span class="text-xs mt-1">Liste</span>
        </div>

        <div class="flex flex-col items-center" @click="$router.push('/settings')">
          <ion-icon :icon="settingsOutline" class="text-xl"></ion-icon>
          <span class="text-xs mt-1">Settings</span>
        </div>
      </div>
    </ion-footer>


  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/vue';

import {
  alertCircleOutline,
  chevronForwardOutline,
  homeOutline,
  listOutline,
  settingsOutline,
  logOutOutline,
} from 'ionicons/icons';

import { ref } from 'vue';

const lastReports = ref([
  { id: 1, title: 'Incendie signalé à l’école', date: '2024-04-01' },
  { id: 2, title: 'Vol de matériel', date: '2024-04-03' },
  { id: 3, title: 'Fuite d’eau', date: '2024-04-04' },
  { id: 4, title: 'Portail cassé', date: '2024-04-05' },
  { id: 5, title: 'Panne électrique', date: '2024-04-06' },
]);
</script>

<style scoped>
.text-primary {
  color: #3b82f6;
}

.shadow-t {
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.05);
}
</style>
