import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import './assets/css/global.css'
import router from './router';
import vuetify from './plugins/vuetify';
import JsonViewer from 'vue-json-viewer'

import { registerLayouts } from './layouts/register';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router);
app.use(vuetify);
app.use(JsonViewer);

registerLayouts(app);



app.mount('#app')
