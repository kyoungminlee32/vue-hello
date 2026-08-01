import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    meta: { bodyClass: "is-worklist" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movie",
    name: "movie",
    component: () => import("../views/MovieView.vue"),
  },
  {
    path: "/WorkList",
    name: "WorkList",
    component: () =>
      import(/* webpackChunkName: "worklist" */ "../worklist/WorkList.vue"),
  },
  {
    path: "/prototype/A-type/html/A-type",
    name: "A-type",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../prototype/A-type/html/A-type.vue"
      ),
  },
  {
    path: "/prototype/A-type/html/A-type-2",
    name: "A-type-2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../prototype/A-type/html/A-type-2.vue"
      ),
  },
  {
    path: "/prototype/B-type/html/B-type",
    name: "B-type",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../prototype/B-type/html/B-type.vue"
      ),
  },
  {
    path: "/html/_FW/fw_product_detail",
    name: "fw_product_detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/_FW/fw_product_detail.vue"
      ),
  },
  {
    path: "/html/_PD/FMDC-temp",
    name: "FMDC-temp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../html/_PD/FMDC-temp.vue"),
  },
  {
    path: "/html/_PD/FMHA-temp",
    name: "FMHA-temp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../html/_PD/FMHA-temp.vue"),
  },
  {
    path: "/html/UD/FMAA-0100000000F01-B",
    name: "FMAA-0100000000F01-B",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/UD/FMAA-0100000000F01-B.vue"
      ),
  },
  {
    path: "/html/UD/FMAA-0200000000F01-B",
    name: "FMAA-0200000000F01-B",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/UD/FMAA-0200000000F01-B.vue"
      ),
  },
  {
    path: "/html/UD/FMAA-0300000000F01-B",
    name: "FMAA-0300000000F01-B",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/UD/FMAA-0300000000F01-B.vue"
      ),
  },
  {
    path: "/html/UD/FMAA-0400000000F01-B",
    name: "FMAA-0400000000F01-B",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/UD/FMAA-0400000000F01-B.vue"
      ),
  },
  {
    path: "/html/FU/FMEC-0103030100F01-A",
    name: "FMEC-0103030100F01-A",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/FU/FMEC-0103030100F01-A.vue"
      ),
  },
  {
    path: "/html/MM/FMBB-0400000000F01",
    name: "FMBB-0400000000F01",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/MM/FMBB-0400000000F01.vue"
      ),
  },
  {
    path: "/html/MM/FMBB-0500000000F01",
    name: "FMBB-0500000000F01",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/MM/FMBB-0500000000F01.vue"
      ),
  },
  {
    path: "/html/MM/FMBB-0700000000F01",
    name: "FMBB-0700000000F01",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../html/MM/FMBB-0700000000F01.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 페이지 이동이 완료된 후 실행되는 훅
router.afterEach((to, from) => {
  // 1. 이전 페이지의 body 클래스가 있다면 제거
  if (from.meta && from.meta.bodyClass) {
    document.body.classList.remove(from.meta.bodyClass);
  }

  // 2. 이동한 새 페이지의 body 클래스가 있다면 추가
  if (to.meta && to.meta.bodyClass) {
    document.body.classList.add(to.meta.bodyClass);
  }
});

export default router;
