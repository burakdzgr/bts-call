import { defineStore } from "pinia";

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolioItems: [], // Boş bir dizi olarak başlatıyoruz
    isLoading: false, // Yükleme durumu
    itemsPerPage: 25 // Sayfa başına gösterilecek öğe sayısı
  }),
  getters: {
    getPortfolioItems(state) {
      return state.portfolioItems;
    },
  },
  mutations: {
    setPortfolioItems(state, payload) {
      state.portfolioItems = payload;
    },
  },
  actions: {
    async fetchDataAndSetPortfolio() {
      try {
        this.isLoading = true
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_GET_PORTFOLIO_ALL);
        const responseData = await response.json();
        const data = responseData.data
        this.portfolioItems = Array.isArray(data) ? data : [];
        this.isLoading = false
      } catch (error) {
        console.error('Veri alinamadi:', error);
      }
    },
    updatePortfolioItems(data){
      customerId = data.customerId
      customerName = data.customerName
      customerLastName = data.customerLastName
      taxNumber = data.taxNumber
      userName = data.userName
      userSurname = data.userSurname
      delayedPayment = data.delayedPayment
    },
  },
});
