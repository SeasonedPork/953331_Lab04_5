<template>
  <p>Airline : {{ event.airlineId }}</p>
  <p>Travel Date : {{ event.travelDate }}</p>
  <p>Source : {{ event.Source }}</p>
</template>

<script>
export default {
  props: ["event"],
};
</script>
