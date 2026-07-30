import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkList.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/MovieView.vue')
  },
  {
    path: '/WorkList',
    name: 'WorkList',
     component: () => import(/* webpackChunkName: "worklist" */ '../views/WorkList.vue')
  },
  {
    path: '/prototype/A-type/html/A-type',
    name: 'A-type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../prototype/A-type/html/A-type.vue')
  },
  {
    path: '/prototype/A-type/html/A-type-2',
    name: 'A-type-2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../prototype/A-type/html/A-type-2.vue')
  },
  {
    path: '/prototype/B-type/html/B-type',
    name: 'B-type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../prototype/B-type/html/B-type.vue')
  },
  {
    path: '/html/_FW/fw_product_detail',
    name: 'fw_product_detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/_FW/fw_product_detail.vue')
  },
  {
    path: '/html/_PD/FMDC-temp',
    name: 'FMDC-temp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/_PD/FMDC-temp.vue')
  },
  {
    path: '/html/_PD/FMHA-temp',
    name: 'FMHA-temp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/_PD/FMHA-temp.vue')
  },
  {
    path: '/html/UD/FMAA-0100000000F01-B',
    name: 'FMAA-0100000000F01-B',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/UD/FMAA-0100000000F01-B.vue')
  },
  {
    path: '/html/UD/FMAA-0200000000F01-B',
    name: 'FMAA-0200000000F01-B',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/UD/FMAA-0200000000F01-B.vue')
  },
  {
    path: '/html/UD/FMAA-0300000000F01-B',
    name: 'FMAA-0300000000F01-B',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/UD/FMAA-0300000000F01-B.vue')
  },
  {
    path: '/html/UD/FMAA-0400000000F01-B',
    name: 'FMAA-0400000000F01-B',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/UD/FMAA-0400000000F01-B.vue')
  },
  {
    path: '/html/FU/FMEC-0103030100F01-A',
    name: 'FMEC-0103030100F01-A',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/FU/FMEC-0103030100F01-A.vue')
  },
  {
    path: '/html/MM/FMBB-0400000000F01',
    name: 'FMBB-0400000000F01',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/MM/FMBB-0400000000F01.vue')
  },
  {
    path: '/html/MM/FMBB-0500000000F01',
    name: 'FMBB-0500000000F01',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/MM/FMBB-0500000000F01.vue')
  },
  {
    path: '/html/MM/FMBB-0700000000F01',
    name: 'FMBB-0700000000F01',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../html/MM/FMBB-0700000000F01.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
