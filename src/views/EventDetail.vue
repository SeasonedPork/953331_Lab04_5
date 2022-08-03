<template>
  <div class="event">
    <h1>Name: {{ events.first_name }}  {{ events.last_name }}</h1>
    <h1>ID: {{ events.id }}</h1>
    <p>Trips: {{ events.trips }}</p>
  </div>
</template>

<script>
import EventService from "@/service/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      events: null,
    };
  },
  created() {
    console.log(this.id);
    EventService.getEventsPassenger(this.id)
      .then((response) => {
        console.log(response.data);
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
