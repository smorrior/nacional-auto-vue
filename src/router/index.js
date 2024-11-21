
export const router = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/o-nama',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];
