<template>
  <div class="home">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../components/EventCard.vue";
import EventService from "@/service/EventService.js";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  //eslint-disable-next-line no-unused-vars
  beforeRouteEnter (routeTo, routeFrom, next) {
    EventService.getEvents(2,parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => { 
        comp.events = response.data;
        comp.totalEvents = response.headers['x-total-count']})
      })
      .catch(() => {
        next({ name: 'NetworkError'})
      })
  },
   beforeRouteUpdate (routeTo, routeFrom, next) {
    EventService.getEvents(2,parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.events = response.data;
        this.totalEvents = response.headers['x-total-count'] 
        next() //<-----
      })
      .catch(() => {
        next({ name: 'NetworkError'})
      })
  },

};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
