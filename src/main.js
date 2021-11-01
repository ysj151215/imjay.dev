import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Home from './pages/index.vue'
import 'virtual:windi.css'

const routes = [
  { path: '/:pathMatch(.*)*', redirect: '/' },
  { path: '/', component: Home }
]

export const createApp = ViteSSG(App, { routes })
