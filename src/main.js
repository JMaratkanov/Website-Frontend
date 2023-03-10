import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from 'vue-cookies'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



const app = createApp(App);

app.use(VueAxios, axios);
app.use(store);
app.use(VueCookies);

app.mount("#app");