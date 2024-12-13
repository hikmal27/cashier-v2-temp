/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { VsxIcon } from "vue-iconsax";
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import './index.css'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.component("VsxIcon", VsxIcon);
app.mount('#app')
