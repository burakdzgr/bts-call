// store/main.js

import { defineStore } from 'pinia';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: {
      email: null,
      password: null
    },
    totalNotReadingCount: 0,
  }),
  getters: {
    getTotalNotReadingCount(state) {
      return state.totalNotReadingCount;
    },
    getAuthUser(state) {
      return state.authUser;
    },
  },
  mutations: {
    updateTotalNotReadingCount(state, payload) {
      state.totalNotReadingCount = payload;
    },
    updateAuthUser(state, payload) {
      state.authUser = {
        email: payload.email,
        password: payload.password
      };
    },
  },
  actions: {
    login(context, { username, password }) {
      const user = {
        email: this.username,
        password : this.password
      };
      context.commit('updateAuthUser', user);

      localStorage.setItem('email', JSON.stringify(user.email));
      localStorage.setItem('password', JSON.stringify(user.password));
      console.log('Yönlendiriliyor...');
      router.push('/');
    },
    logout(context) {
      this.authUser = null;
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      router.push('/login');
    }
  }
});
