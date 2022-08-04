<template>
  <div v-if="event">
    <div id="nav">
      <router-link :to="{ name: 'EventDetail', params: { id } }">
        Passengers Details</router-link
      >
      |
      <router-link :to="{ name: 'EventDetail', params: { id } }">
        Airline Details</router-link
      >
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "../service/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvents(this.id)
      .then((response) => {
        this.event = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
