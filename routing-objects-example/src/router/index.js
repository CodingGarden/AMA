import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Colors from '../views/Colors.vue';
import SingleColor from '../views/SingleColor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/colors/:id',
    name: 'SingleColor',
    component: SingleColor,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
