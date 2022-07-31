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
import EventService from '@/service/EventService.js'

var count = 0

export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEventsPass()
      .then((response) => {
        response.data.forEach((object) => {
          object.data.forEach((object) => {
            console.log()
            if (object._id == this.id) {
              this.event = object
              count += 1
            }
            if (count + Object.keys(object).length == Object.keys(object).length) {
              this.$router.push({
                name: '404Resource',
                params: { resource: this.id }
              })
            }
          })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
