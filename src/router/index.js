import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import DashboardLayout from '../layouts/DashboardLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;