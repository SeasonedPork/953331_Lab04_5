<template>
  <div class="home">
    <p>id: {{ this.id }}</p>
    <router-link :to="{ name: 'EventDetails', params: { id: this.id } }">
      See Passenger Details
    </router-link>
    <router-link :to="{ name: 'AirlineDetails', params: { id: this.id } }">
      Airline Details
    </router-link>
  </div>
  <router-view :event="event" />
</template>

<script>
// @ is an alias to /src
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
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
