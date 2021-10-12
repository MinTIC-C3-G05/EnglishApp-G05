import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://backend-notas.herokuapp.com/api'; //'https://backend-notas.herokuapp.com/api','http://localhost:3000/api' //

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
