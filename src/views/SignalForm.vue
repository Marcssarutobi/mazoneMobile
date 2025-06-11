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
              v-model="form.titre"
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
              v-model="form.categorie"
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

          <div>
            <label class="block text-sm font-medium text-gray-700">Quartier</label>
            <input
              v-model="form.quartier"
              type="text"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Ex: Sèkandjie"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Commune</label>
            <input
              v-model="form.commune"
              type="text"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Ex: Cotonou"
              required
            />
          </div>

          
          <div>
            <label class="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              v-model="form.latitude"
              type="text"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-100"
              readonly
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              v-model="form.longitude"
              type="text"
              class="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-100"
              readonly
            />
          </div>

          <button
            @click="getLocation"
            type="button"
            style="padding: 10px; border-radius: 10px; text-decoration: none; color: white;"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
          >
            📍 Obtenir ma position
          </button>

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
import axiosInstance from '@/plugins/axios'
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
import { useRouter } from 'vue-router'

const form = ref({
  titre: '',
  description: '',
  categorie: '',
  commune: '',
  quartier: '',
  latitude:'',
  longitude:'',
  photo: '',
})

const error = ref('')

const router = useRouter()

const handleFileUpload = (event) => {
  form.value.photo = event.target.files[0]
}

const submitForm = async () => {
  // Exemple simple de log des données
  const res = await axiosInstance.post('/addsignal',form.value,{
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
  })
  if (res.status === 200) {
    router.push('/liste')
  }
}

function getLocation() {
  if (!navigator.geolocation) {
    error.value = "La géolocalisation n'est pas supportée par ce navigateur."
    return
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      form.value.latitude = position.coords.latitude.toFixed(6)
      form.value.longitude = position.coords.longitude.toFixed(6)
      error.value = ''
    },
    (err) => {
      error.value = "Impossible de récupérer la position : " + err.message
    }
  )
}

</script>

