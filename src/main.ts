import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { menu } from './i18n/en/labels'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const languages = {
    menu
};

const i18n = createI18n({
    locale: 'menu',
    fallbackLocale: 'menu',
    messages: languages
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
