<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Space+Mono:wght@700&display=swap");
#app {
  font-family: "Lexend Deca", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #939caa;
}

h1,
h2,
h3,
h4,
a {
  font-family: "Space Mono";
}

.container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
