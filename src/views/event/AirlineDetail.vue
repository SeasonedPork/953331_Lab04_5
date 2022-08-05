<template>
  <div v-if="event">
    <p>Airline : {{ event.airlineId }}</p>
    <p>Travel Date : {{ event.travelDate }}</p>
    <p>Source : {{ event.Source }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>
