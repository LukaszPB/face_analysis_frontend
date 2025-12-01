/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import {createI18n} from "vue-i18n";
// Import translations
import en from './locales/en.json';
import pl from './locales/pl.json';

// Create Vue I18n instance
const i18n = createI18n({
  locale: 'pl', // Default language
  fallbackLocale: 'pl', // Fallback if a translation is missing
  messages: { en, pl },
  returnObjects: true
});


const app = createApp(App)

registerPlugins(app)
app.use(i18n);
app.mount('#app')
