<script setup >
import { onMounted, ref, computed, reactive, watch } from 'vue';
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

const tab = ref(null);
const length = ref(0);



</script>

<template>
    <div class="content-head ml-2 mb-4 w-1/2 font-sans">
        <h1 class="text-4xl font-bold text-gray-600">Portfolyo </h1>
        <p class="text-md text-gray-500 font-normal mt-2">Borçlu Portfolyölerini inceleyin, Detayları Görüntüleyin ve Borçlu
            takibi yaparken zorlanmayın Zamanında Ödemeleri Sağlayın</p>
    </div>
    <button @click="length++">ekle</button>




    <div class="table w-full mt-10">
        <div v-if="loading" class="loading-overlay">
            <div class="loading-spinner"></div>
            <p class="loading-text">Yükleniyor... Lütfen bekleyin</p>
        </div>
        <v-tabs v-model="tab" background-color="red lighten-2" dark>
            <v-tab :key="ub">
                <p>portfolyö</p>
            </v-tab>
            <v-tab v-for="n in length" :key="n">

                <p>müşteri adı</p>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item :key="ub">
                <Table :columns="headers" :rows="portfolioItems" :isLoading="isLoading" :items-per-page="itemPerPage">
                    <template v-for="column in columns" v-slot:[column.value]="{ row }">
                        <template v-if="column.value === 'mainUser'">
                            <span v-if="row.userName && row.userSurname">
                                <span @click="openInNewTab(row)" class="link">{{ row.userName }} {{ row.userSurname
                                }}</span>
                            </span>
                            <span v-else>Atanmamış</span>
                        </template>
                        <template v-else>
                            {{ row[column.value] }}
                        </template>
                    </template>
                </Table>
            </v-tab-item>
            <v-tab-item v-for="n in length" :key="n">
                <p>buraya detay sayfası gelcek</p>
            </v-tab-item>
        </v-tabs-items>
    </div>
    <v-toolbar>

        <template v-slot:extension>
            <v-tabs v-model="tab" align-tabs="title">
                <v-tab v-for="(item, index) in 3" :key="item">
                    {{ "item" + index }}
                </v-tab>
            </v-tabs>
        </template>
    </v-toolbar>

    <v-window v-model="tab">
        <v-window-item v-for="(item, index) in 3" :key="item">
            <v-card flat>
                <v-card-text>
                    {{ "item" + index }}

                </v-card-text>
            </v-card>
        </v-window-item>
    </v-window>
</template>

