<template>
   <div class="hideScroll" v-on:mouseover="hoverVal = true" v-on:mouseleave="hoverVal = false">
      <!-- component -->
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
         <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r !z-[999]">
            <div class="flex items-center justify-between p-2.5 ">
               <img class="w-10 h-10 border rounded-full" src="../assets/images/nika-logo.png" alt="">
            </div>
            <div class="overflow-y-auto overflow-x-hidden flex-grow">
               <ul class="flex flex-col py-4 space-y-1">
                  <li class="px-5">
                     <div class="flex flex-row items-center h-8">
                        <div class="text-sm font-light tracking-wide text-gray-500">Menu</div>
                     </div>
                  </li>
                  <li>
                     <router-link to="/"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                              </path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Anasayfa</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/notification"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <title>bell</title>
                              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Hatırlatmalar</span>
                        <span
                           class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/chat-room" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600
                        hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                              </path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Sohbet Odası</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/portfolio"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                              viewBox="0 0 24 24">
                              <path fill="currentColor"
                                 d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12m-3 5a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3m-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15Z" />
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Portföyüm</span>
                        <span
                           class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/dept-list"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Borç Dosyaları</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/payment-methods"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                              </path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Ödeme Planlarım</span>
                        <span
                           class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
                     </router-link>
                  </li>
                  <li>
                     <a href="#"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                              <line x1="6" y1="1" x2="6" y2="4"></line>
                              <line x1="10" y1="1" x2="10" y2="4"></line>
                              <line x1="14" y1="1" x2="14" y2="4"></line>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Mola</span>
                     </a>
                  </li>
                  <li>
                     <a href="#"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">FOP</span>
                     </a>
                  </li>
                  <li>
                     <router-link to="/supervisor"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path
                                 d="M19 4C18.4 4 18 4.4 18 5V6H16.5L15.1 3C15 2.8 14.9 2.6 14.7 2.5C14.2 2 13.4 1.9 12.7 2.2L12 2.4L11.3 2.1C10.6 1.8 9.8 1.9 9.3 2.4C9.1 2.6 9 2.8 8.9 3L7.5 6H6V5C6 4.4 5.6 4 5 4S4 4.4 4 5V6C4 7.1 4.9 8 6 8H18C19.1 8 20 7.1 20 6V5C20 4.5 19.6 4 19 4M4 22V19C4 16.33 9.33 15 12 15S20 16.33 20 19V22H4M18.1 20.1V19C18.1 18.36 14.97 16.9 12 16.9S5.9 18.36 5.9 19V20.1H18.1M16 9V10C16 12.21 14.21 14 12 14S8 12.21 8 10V9H10V10C10 11.11 10.9 12 12 12S14 11.11 14 10V9H16Z" />
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Supervisor</span>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/group-info"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Grup Bilgileri</span>
                     </router-link>
                  </li>
                  <li class="px-5">
                     <div class="flex flex-row items-center h-8">
                        <div class="text-sm font-light tracking-wide text-gray-500">Profile Settings</div>
                     </div>
                  </li>
                  <li>
                     <router-link to="/change-password"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Şifre Değiştir</span>
                     </router-link>
                  </li>
                  <li>
                     <a href="#"
                        class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                           <svg class="2-5 h-5" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                              stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path
                                 d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                              </path>
                           </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Ayarlarım</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
 
<script>
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import eventBus from "../components/eventBus/eventBus";
import { storeToRefs } from "pinia";
import { useAuthStore } from '../store/main';

export default defineComponent({
   name: "Sidebar",
   data() {
      return {
         hoverVal: false,
      };
   },
   computed: {
      userEmail() {
         const authStore = useAuthStore();
         const { authUser } = storeToRefs(authStore);
         console.log(authUser)
         return computed(() => authUser.email);
      },
      totalNotReadingCount() {
         const authStore = useAuthStore();
         return authStore.getTotalNotReadingCount;
      },
   },
   methods: {

      logout() {
         const authStore = useAuthStore();
         authStore.logout();
         const router = useRouter();
         router.push("/login");
      },
      logon() {
         const authStore = useAuthStore();
         authStore.logon();
         const router = useRouter();
         router.push("/login");
      },
      async fetchTotalNotReadingCount() {
         let result = 0;
         const messageService = this.$services.messageService;
         try {
            const myMessages = await messageService.MyMesssages();
            const myRooms = await messageService.MyRooms();
            myMessages.data.data.forEach((x) => {
               result += x.notReadingCount;
            });
            myRooms.data.data.forEach((x) => {
               result += x.notReadingCount;
            });
         } catch (err) {
            console.log(err);
         }
         const authStore = useAuthStore();
         authStore.updateTotalNotReadingCount(result);
      },
   },
});
</script>

 
<style scoped>
.hideScroll ::-webkit-scrollbar {
   display: none;
}
</style>
 