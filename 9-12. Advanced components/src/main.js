import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

const app = createApp(App);

// Global components!
app.component('base-badge', BaseBadge);

app.mount('#app');
