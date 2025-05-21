<template>
  <ion-page>
    <!-- Header Ionic avec bouton retour -->
    <ion-header translucent>
      <ion-toolbar style="margin-top: 20px;">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/liste" />
        </ion-buttons>
        <ion-title>Signalement</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenu principal -->
    <ion-content fullscreen class="relative">
      <!-- Image en haut pleine largeur, hauteur fixe -->
      <div class="relative h-64 w-full overflow-hidden">
        <img
          src="https://cdn.dribbble.com/userupload/43395057/file/original-f8d669ae9229d138551cf358dabb76de.png?resize=752x564&vertical=center" 
          alt="Photo signalement"
          class="object-cover w-full h-full"
        />
        <!-- Overlay sombre léger sur l'image -->
        <div class="absolute inset-0 bg-black bg-opacity-10" style="opacity: .2;"></div>
      </div>

      <!-- Détails remontés sur l'image, avec fond blanc, arrondis -->
      <div
        class="relative -mt-20 bg-white rounded-t-3xl p-6 shadow-lg min-h-[300px] z-10"
        style="backdrop-filter: blur(10px);"
        :style="{minHeight: `calc(100vh - 16rem + 5rem)`}"
      >
        <h2 class="text-2xl font-semibold mb-2">Titre du signalement</h2>
        <p class="text-gray-600 mb-4">
          Voici la description complète du signalement. Ici tu peux mettre
          toutes les informations importantes, la date, le statut, etc.
        </p>

        <div class="flex justify-between mb-4">
          <div>
            <h3 class="font-medium text-gray-800">Date</h3>
            <p class="text-gray-500">21 mai 2025</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">Statut</h3>
            <p class="text-green-600 font-semibold">Résolu</p>
          </div>
        </div>

        <!-- Plus d'infos -->
        <div>
          <h3 class="font-medium text-gray-800 mb-2">Commentaires</h3>
          <p class="text-gray-700">
            Quelques commentaires supplémentaires ou notes sur le signalement...
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
} from '@ionic/vue'
</script>

<style scoped>
/* Optionnel : ajout léger d'ombre portée sous la partie contenu */
</style>


<script>
export default {

}
</script>

<style>

</style>