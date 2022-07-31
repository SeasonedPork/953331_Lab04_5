<template>
  <div class="event">
    <h1>Name: {{ event.name }}</h1>
    <p>ID: {{ event._id }}</p>
    <p>Trips: {{ event.trips }}</p>
    <div v-for="airline in event.airline" :key="airline.id">
      <p>Airline: {{ airline.name }}</p>
      <img :src="airline.logo" alt="" />
    </div>
  </div>
</template>

<script>
import EventService from "@/service/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEventsPassengers()
      .then((response) => {
        response.data.forEach((object) => {
          object.data.forEach((object) => {
            if (object._id == this.id) {
              this.event = object;
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
