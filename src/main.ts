import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
      darkModeSelector: '.mode-hitam',
    },
  }
});

app.mount("#app");
