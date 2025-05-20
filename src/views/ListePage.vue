<template>
  <ion-page>
    <!-- Header -->
    <ion-header :translucent="true" class="bg-white shadow-sm">
      <ion-toolbar class="px-4 py-3 flex flex-col" style="margin-top: 20px;">
        <h1 class="text-lg font-semibold text-gray-800">Tous les signalements</h1>
        <div class="mt-3 w-full">
          <input
            type="text"
            v-model="search"
            placeholder="Rechercher un signalement..."
            class="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="bg-gray-50">
      <div class="p-4 pb-24 space-y-3">
        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center hover:bg-gray-50 transition"
        >
          <div>
            <div class="text-sm font-medium text-gray-800">{{ report.title }}</div>
            <div class="text-xs text-gray-500">{{ report.date }}</div>
          </div>
          <ion-icon :icon="chevronForwardOutline" class="text-gray-300 text-lg"></ion-icon>
        </div>
      </div>

      <!-- Bouton flottant + -->
      <button
        @click="addReport"
        class="fixed bottom-[70px] right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700 transition"
        aria-label="Ajouter un signalement"
        style="border-radius: 50%;"
      >
        +
      </button>
    </ion-content>

    <!-- Footer -->
    <ion-footer class="bg-white shadow-t border-t border-gray-200">
      <div class="flex justify-around items-center py-2 text-[#595959]">
        <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/home')">
          <ion-icon :icon="homeOutline" class="text-xl"></ion-icon>
          <span class="text-xs mt-1">Home</span>
        </div>

        <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/liste')">
          <ion-icon :icon="listOutline" class="text-xl"></ion-icon>
          <span class="text-xs mt-1">Liste</span>
        </div>

        <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/settings')">
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
  IonFooter,
  IonIcon,
} from '@ionic/vue';
import {
  chevronForwardOutline,
  homeOutline,
  listOutline,
  settingsOutline,
} from 'ionicons/icons';
import { ref, computed } from 'vue';

// Génère 30 signalements mockés
const allReports = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Signalement #${i + 1}`,
    date: `2024-04-${((i % 30) + 1).toString().padStart(2, '0')}`,
  }))
);

const search = ref('');
const filteredReports = computed(() =>
  allReports.value.filter((report) =>
    report.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

// Fonction pour gérer le clic du bouton +
function addReport() {
  // Ici tu peux ouvrir un modal ou router vers une page d'ajout
  alert('Ajouter un nouveau signalement !');
}
</script>
