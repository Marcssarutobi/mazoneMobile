<template>
  <ion-page>
    <!-- Header -->
    <ion-header :translucent="true" class="shadow-none border-b border-gray-200">
      <ion-toolbar class="bg-white" style="margin-top: 20px;">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title class="text-lg font-semibold">Créer un signalement</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenu de la page -->
    <ion-content class="bg-gray-50">
      <div class="p-4 space-y-4">
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Titre -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Titre</label>
            <input
              v-model="form.title"
              type="text"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Ex: Trou dans la chaussée"
              required
            />
          </div>

          <!-- Description -->
          <div >
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Donnez plus de détails..."
              required
            ></textarea>
          </div>

          <!-- Catégorie -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Catégorie</label>
            <select
              v-model="form.category"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            >
              <option value="" disabled>Choisir une catégorie</option>
              <option value="voirie">Voirie</option>
              <option value="éclairage">Éclairage</option>
              <option value="déchets">Déchets</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <!-- Photo -->
          <div style="margin-top: 25px;">
            <label class="block text-sm font-medium text-gray-700">Photo (optionnel)</label>
            <input
              type="file"
              @change="handleFileUpload"
              class="mt-1 w-full text-gray-500"
              accept="image/*"
            />
          </div>

          <!-- Bouton Envoyer -->
          <div class="pt-4">
            <button
              style="padding: 10px; border-radius: 10px; text-decoration: none; color: white;"
              type="submit"
              class="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Envoyer le signalement
            </button>
          </div>
        </form>
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
import { ref } from 'vue'

const form = ref({
  title: '',
  description: '',
  category: '',
  photo: null,
})

const handleFileUpload = (event) => {
  form.value.photo = event.target.files[0]
}

const submitForm = () => {
  // Exemple simple de log des données
  console.log(form.value)
  alert('Signalement envoyé !')
}
</script>

