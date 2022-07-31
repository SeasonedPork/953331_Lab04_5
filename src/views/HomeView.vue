<template>
  <div class="home">
    <tr v-for="event in events" :key="event.id">
      <h3>Total Passenger: {{ event.totalPassengers }}</h3>
    </tr>
    <template v-for="item in events">
      <EventCard
        v-for="event in item.data"
        :key="event.id"
        :event="event"
      ></EventCard>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";

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
  created() {
    EventService.getEventsPass()
      .then((res) => {
        this.events = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
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
