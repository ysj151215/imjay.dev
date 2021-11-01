import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import 'virtual:windi.css'

export const createApp = ViteSSG(App)
