<script setup >
import { onMounted, ref, computed } from 'vue';
import Table from "../components/table/Table.vue"
import { usePortfolioStore } from '../store/portfolio';
import { storeToRefs } from 'pinia';

const portfolioStore = usePortfolioStore();
const { portfolioItems, isLoading, itemsPerPage } = storeToRefs(portfolioStore);

const headers = ref([
    { text: "ID", value: "customerId" },
    { text: "İsim", value: "customerName" },
    { text: "Soyisim", value: "customerSurname" },
    { text: "TC No", value: "taxNumber" },
    { text: "Atanmış Kullanıcı", value: "mainUser" },
    { text: "Gecikmiş Ödeme", value: "delayedPayment" },
    { text: "Son not", value: "notes" }
]);

const loading = computed(() => portfolioStore.isLoading)
const itemPerPage = computed(() => portfolioStore.itemsPerPage)
const handleSearch = (term) => {
    searchTerm.value = term;
};

const handleItemsPerPage = (value) => {
    itemsPerPage.value = value;
};

const openInNewTab = (row) => {
    const url = `https://example.com/detail/${row.customerId}`;
    const win = window.open(url, '_blank');
    win.focus();
};


onMounted(async () => {
    await portfolioStore.fetchDataAndSetPortfolio();
});
</script>
<template>
    <div class="content-head ml-2 mb-4 w-1/2 font-sans">
        <h1 class="text-4xl font-bold text-gray-600">Portfolyo </h1>
        <p class="text-md text-gray-500 font-normal mt-2">Borçlu Portfolyölerini inceleyin, Detayları Görüntüleyin ve Borçlu
            takibi yaparken zorlanmayın Zamanında Ödemeleri Sağlayın</p>
    </div>
    <div class="table w-full mt-10">
        <div v-if="loading" class="loading-overlay">
            <div class="loading-spinner"></div>
            <p class="loading-text">Yükleniyor... Lütfen bekleyin</p>
        </div>
        <Table :columns="headers" :rows="portfolioItems" :isLoading="isLoading" :items-per-page="itemPerPage">
            <template v-for="column in columns" v-slot:[column.value]="{ row }">
                <template v-if="column.value === 'mainUser'">
                    <span v-if="row.userName && row.userSurname">
                        <span @click="openInNewTab(row)" class="link">{{ row.userName }} {{ row.userSurname }}</span>
                    </span>
                    <span v-else>Atanmamış</span>
                </template>
                <template v-else>
                    {{ row[column.value] }}
                </template>
            </template>
        </Table>
    </div>
</template>

