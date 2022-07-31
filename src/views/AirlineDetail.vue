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
        response.data.forEach((data) => {
          data.data.forEach((airline) => {
            if (airline._id == this.id) {
              airline.airline.forEach((obj) => {
                this.event = obj
                count += 1
              })
            }
            if (
              count + Object.keys(airline).length ==
              Object.keys(airline).length
            ) {
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
