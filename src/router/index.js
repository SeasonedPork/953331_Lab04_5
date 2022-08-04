import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetail from "../views/event/EventDetail.vue";
import EventLayoutView from "../views/EventLayoutView.vue";
import AirlineDetails from "../views/event/AirlineDetail.vue";

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
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: EventLayoutView,
    children: [
      {
        path: "",
        name: "EventDetail",
        component: EventDetail,
        props: true,
      },
      {
        path: "airline",
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
