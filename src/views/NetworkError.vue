<template>
  <div class="NetworkError">
    <h1>Uh-oh!</h1>
    <h3>
      it looks like you're experiencing some network issues,please take a breath
      and
      <a href="#" @click="$router.go(-1)">clickhere</a> to try again
    </h3>
  </div>
</template>
