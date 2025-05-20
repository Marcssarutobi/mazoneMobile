<template>
<ion-page class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">
    <ion-content :fullscreen="true" class="flex items-center justify-center min-h-screen bg-transparent">
        <div class="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div class="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-md flex flex-col gap-8 relative">
                <!-- Decorative Circles -->
                <div class="absolute -top-8 -left-8 w-24 h-24 bg-indigo-300 opacity-40 rounded-full z-0"></div>
                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full z-0"></div>
                <!-- Avatar -->
                <div class="flex justify-center z-10">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shadow-lg border-4 border-white">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                </div>
                <!-- Title -->
                <h2 class="text-3xl font-bold text-center text-gray-800 z-10">Inscription</h2>
                <!-- Form -->
                <form class="flex flex-col gap-6 z-10">
                    <ion-item lines="none" class=" px-0">
                        <ion-label position="floating" class="text-gray-500">Username</ion-label>
                        <ion-input type="text" required class="mt-1"></ion-input>
                    </ion-item>
                    <ion-item lines="none" class=" px-0">
                        <ion-label position="floating" class="text-gray-500">Email</ion-label>
                        <ion-input type="email" required class="mt-1"></ion-input>
                    </ion-item>
                    <ion-item lines="none" class=" px-0">
                        <ion-label position="floating" class="text-gray-500">Mot de passe</ion-label>
                        <ion-input type="password" required class="mt-1"></ion-input>
                    </ion-item>
                    <button style="padding: 10px; border-radius: 10px;" type="submit" 
                        class="w-full py-3 px-6 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-md 
                            hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-transform duration-200">
                        S'inscrire
                    </button>
                    <p class="text-center text-gray-600">Vous avez un compte ? 
                        <router-link to="/login" class="text-indigo-500 hover:underline">Connectez-vous</router-link>
                    </p>
                </form>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/vue';

</script>

<style>

</style>