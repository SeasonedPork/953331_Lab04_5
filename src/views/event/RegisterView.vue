<template>
  <p></p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ["id", "event"],
  inject: ["GStore"],
  methods: {
    register() {
      //assume successful API call to register them

      //set a flash message to appear on the next page on the next page loaded which says
      //you are succesfully registered for + this.event.title
      this.GStore.flashMessage =
        "you are succesfully registered for " +
        this.event.id +
        " move to " +
        (this.event.id + 1);
      setTimeout(() => {
        //after 3 second remove it
        this.GStore.flashMessage = "";
      }, 5000);

      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style></style>
