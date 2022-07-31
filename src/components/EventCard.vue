<template>
  <div class="event" v-if="event">
    <h1>Name: {{ event.name }}</h1>
    <p>ID: {{ event._id }}</p>
    <p>Trips: {{ event.trips }}</p>
    <router-link :to="{ name: 'AirlineDetails', params: { id: event._id } }">
      Airline Details
    </router-link>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

var count = 0;

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEventsPass()
      .then((res) => {
        res.data.forEach((obj) => {
          obj.data.forEach((obj) => {
            if (obj._id == this.id) {
              this.event = obj;
              count += 1;
            }
            if (count + Object.keys(obj).length == Object.keys(obj).length) {
              this.$router.push({
                name: "404Resource",
                params: { resource: this.id },
              });
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
