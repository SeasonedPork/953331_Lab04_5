<template>
  <div class="event" v-if="event">
    <h3>{{ event.head_quaters }}</h3>
    <h1>Name: {{ event.name }}</h1>
    <p>ID: {{ event.id }}</p>
    <p>Website: {{ event.website }}</p>
    <img :src="event.logo" alt="" />
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
        response.data.forEach((data) => {
          data.data.forEach((airline) => {
            if (airline._id == this.id) {
              airline.airline.forEach((object) => {
                this.event = object;
              });
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
