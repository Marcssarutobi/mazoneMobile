<template>
<ion-page class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">
    <ion-content :fullscreen="true" scroll-y="true" class="flex items-center justify-center min-h-screen bg-transparent">
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
                <h2 class="text-3xl font-bold text-center text-gray-800 z-10">Connexion</h2>
                <!-- Form -->
                <form class="flex flex-col gap-6 z-10" @submit.prevent="loginFunction">
                    <ion-item lines="none" class="bg-transparent px-0">
                        <ion-label position="floating" class="text-gray-500">Email</ion-label>
                        <ion-input type="email" v-model="data.email_contact" required class="mt-1"></ion-input>
                    </ion-item>
                    <ion-item lines="none" class="bg-transparent px-0">
                        <ion-label position="floating" class="text-gray-500">Mot de passe</ion-label>
                        <ion-input type="password" v-model="data.password" required class="mt-1"></ion-input>
                    </ion-item>
                    <div class="flex justify-between items-center text-sm">
                        <label class="flex items-center gap-2">
                            <input type="checkbox" class="form-checkbox text-indigo-500" />
                            <span class="text-gray-600">Se souvenir de moi</span>
                        </label>
                        <a href="#" class="text-indigo-500 hover:underline">Mot de passe oublié ?</a>
                    </div>
                    <button
                        style="padding: 10px; border-radius: 10px; text-decoration: none; color: white;"
                        
                        type="submit"
                        class="w-full py-3 px-6 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-md 
                               hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-transform duration-200 flex justify-center items-center text-center text-white">
                        Se connecter
                    </button>
                    <p class="text-center text-gray-600">Pas encore de compte ? 
                        <router-link to="/register" class="text-indigo-500 hover:underline">Inscrivez-vous</router-link>
                    </p>
                </form>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>

<script setup>
import axiosInstance from '@/plugins/axios';
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const data = ref({
        email_contact:'',
        password:''
    })
    const router = useRouter()

    const loginFunction = async () =>{
        const res = await axiosInstance.post('/login',data.value)
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            router.push('/home')
        }
    }

</script>

<style>

</style>