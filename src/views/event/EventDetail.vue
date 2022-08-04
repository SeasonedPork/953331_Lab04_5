<template>
  <p>Name : {{ event.first_name }} {{ event.last_name }}</p>
  <p>Id : {{ event.id }}</p>
  <p>Destination : {{ event.Destination }}</p>
</template>

<script>
export default {
  props: ["event"],
};
</script>
