import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/app.css";
import Home from "./pages/Home.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
