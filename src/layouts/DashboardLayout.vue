<script>
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
    name: "TheDashboardLayout",
    components: {
        Sidebar
    }
});
</script>

<template>
    <v-layout>
        <Sidebar />
        <header class="absolute top-0 left-0 w-full bg-white border-b z-40 h-[61px] pl-[256px]">
            <div class="header-items flex items-center justify-end h-full px-5">
                <button type="button"
                    class="flex flex-row items-center ml-2 text-sm tracking-wide truncate relative focus:outline-none hover:bg-gray-50 group text-gray-600 hover:text-red-400 hover:bg-red-50 p-1.5 rounded-md"
                    data-v-6dec5f19="">Çıkış Yap
                    <svg class="w-5 h-5 ml-2 group-hover:fill-red-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" data-v-6dec5f19="">
                        <path
                            d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z"
                            data-v-6dec5f19="">
                        </path>
                    </svg>
                </button>
            </div>
        </header>
        <main class="!ml-[256px] pt-[100px] px-5 w-full bg-[#f0f3f8]">
            <slot></slot>
        </main>
    </v-layout>
</template>