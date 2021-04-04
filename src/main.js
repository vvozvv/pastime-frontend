import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import Toaster from '@meforma/vue-toaster'
const token = localStorage.getItem('user-token')

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

let refreshTokenPromise;

axios.interceptors.response.use(function (config) {
  console.log('200');
  return config;
}, async function (error) {
  console.error(error);
  if (!refreshTokenPromise) {
    refreshTokenPromise = store.dispatch('refreshToken');
  }
  
  await refreshTokenPromise;
  refreshTokenPromise = null;

  return Promise.reject(error);
});



createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .mount("#app");
