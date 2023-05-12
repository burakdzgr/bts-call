const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/Notification.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: () => import('../views/ChatRoom.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/dept-list',
    name: 'Depts',
    component: () => import('../views/DeptsView.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/payment-methods',
    name: 'PaymentMethods',
    component: () => import('../views/PaymentMethods.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/supervisor',
    name: 'Supervisor',
    component: () => import('../views/Supervisor.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/group-info',
    name: 'GroupInfo',
    component: () => import('../views/GroupInfo.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../views/ChangePassword.vue'),
    meta: {
      layout: 'Dashboard'
    }
  },
];

export default routes;
