<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    rows: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    },
    deleteButtonVisible: {
        type: Boolean,
        required: false
    },
    actionsButtonsVisible: {
        type: Boolean,
        required: false
    },
    updateButtonVisible: {
        type: Boolean,
        required: false
    },
    searchVisible: {
        type: Boolean,
        required: false
    },
    itemsPerPage: {
        type: Number,
        required: false
    },
    isLoading: {
        type: Boolean,
        required: true
    }
});

// Arama terimi için ref
const searchTerm = ref('');

// Filtrelenmiş satırların hesaplanması
const filteredRows = computed(() => {
    if (!searchTerm.value) {
        return props.rows;
    }
    const term = searchTerm.value.toLowerCase();
    return props.rows.filter(row => {
        // Satırın her bir değerini arama terimiyle karşılaştır
        return props.columns.some(column => {
            const value = row[column.value]?.toString().toLowerCase() ?? '';
            return value.includes(term);
        });
    });
});

const getColumnSlotName = (column) => {
    return column.value + "-slot";
}

</script>

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg bg-white">
                    <div v-if="searchVisible" class="p-4">
                        <input type="text" v-model="searchTerm" placeholder="Search..."
                            class="w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500" />
                    </div>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
                                <th scope="col" class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <input id="checkbox-all" type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                        <label for="checkbox" class="sr-only">
                                            Checkbox
                                        </label>
                                    </div>
                                </th>
                                <!-- Sütun başlıklarını döngü ile oluştur -->
                                <th v-for="(column, index) in columns" :key="index" scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500">
                                    {{ column.text }}
                                </th>
                                <!-- Eğer updateButtonVisible prop'u true ise Edit sütunu ekle -->
                                <th class="px-6 py-3 text-xs font-bold text-right text-gray-500">
                                    Aksiyonlar
                                </th>
                                <!-- Eğer deleteButtonVisible prop'u true ise Delete sütunu ekle -->
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <!-- Verileri döngü ile oluştur -->
                            <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="cursor-porinter">
                                <td class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <input type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                        <label for="checkbox" class="sr-only">
                                            Checkbox
                                        </label>
                                    </div>
                                </td>
                                <!-- Sütun değerlerini döngü ile oluştur -->
                                <td v-for="(column, colIndex) in columns" :key="colIndex"
                                    class="px-6 py-4 text-sm font-medium text-gray-600 whitespace-nowrap">
                                    <slot v-if="column.value === 'mainUser'" name="mainUser" :row="row">
                                        {{ row.userName + ' ' + row.userSurname }}
                                    </slot>
                                    <slot v-else :name="column.value">
                                        {{ row[column.value] }}
                                    </slot>
                                </td>
                                <!-- Eğer updateButtonVisible prop'u true ise Edit butonunu ekle -->
                                <td
                                    class="flex items-center justify-end px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a class="text-green-500 bg-green-100 rounded-md p-2 hover:text-green-700" href="#">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24"
                                            stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </a>
                                    <a class="text-red-500 bg-red-100 p-2 rounded-md hover:text-red-700 ml-5" href="#">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" width="24" height="24"
                                            stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path
                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                            </path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>  
