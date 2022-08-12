<template>
  <div v-if="event">
    <p>Name : {{ event.first_name }} {{ event.last_name }}</p>
    <p>Id : {{ event.id }}</p>
    <p>Destination : {{ event.Destination }}</p>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ["event","id"],
  inject:["GStore"],
  methods: {
    Edit() {
      this.GStore.flashMessage = 
      'You are succesfully Edited ' + this.event.title + ' page'
    },
    beforeRouteEnter (routeTo, routeFrom, next) {
      // ...
    }
  }
};


</script>
