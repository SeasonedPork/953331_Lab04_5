import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventListView.vue";
import EventDetail from "../views/event/EventDetail.vue";
import EventLayoutView from "../views/EventLayoutView.vue";
import AirlineDetails from "../views/event/AirlineDetail.vue";
import NetworkErrorView from "@/views/NetworkError.vue";
import NotFound from "@/views/NotFound.vue";
import RegisterView from "@/views/event/RegisterView.vue";
import EventService  from "@/service/EventService";
import NProgress from 'nprogress'

const routes = [
  {
    path: "/",
    name: "home",
    component: EventList,
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
    beforeEnter: (to) => {
      return EventService.getEventsPassenger(to.params.id)
      .then(response => {
        //set data here
      })
      .catch((error) => {
        if (error.response && error.response.status == 404 ) {
          return {
            name: '404Resource',
            params: { resouce: 'event' }
          }
        }else{
          return {name: "NetworkError"}
        }
      })
    },
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
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router;
