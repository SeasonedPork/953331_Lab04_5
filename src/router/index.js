import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetails from "../views/EventDetail.vue";
import LayoutView from "../views/LayoutView.vue";
import AirlineDetails from "../views/AirlineDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/select/:id",
    name: "LayoutView",
    component: LayoutView,
    props: true,
    children: [
      {
        path: "/passenger/:id",
        name: "EventDetails",
        component: EventDetails,
        props: true,
      },
      {
        path: "/airline/:id",
        name: "AirlineDetails",
        component: AirlineDetails,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
