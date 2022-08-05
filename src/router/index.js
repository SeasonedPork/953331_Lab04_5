import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetail from "../views/event/EventDetail.vue";
import EventLayoutView from "../views/EventLayoutView.vue";
import AirlineDetails from "../views/event/AirlineDetail.vue";
import NetworkErrorView from "@/views/NetworkError.vue";
import NotFound from "@/views/NotFound.vue";
import RegisterView from "@/views/event/RegisterView.vue";

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
        name: "AirlineDetail",
        component: AirlineDetails,
        props: true,
      },
      {
        path: "register",
        name: "RegisterView",
        component: RegisterView,
        props: true,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
