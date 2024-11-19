import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { router } from './router';

import './assets/main.css'

export const createApp = ViteSSG( App, { routes: router })
