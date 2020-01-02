import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Home from '../components/pages/Home.vue';
import Landing from '../components/pages/Landing.vue';
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;