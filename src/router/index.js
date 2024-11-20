import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';


export const router = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/o-nama',
    name: 'about',
    component: AboutView,
  },
];
