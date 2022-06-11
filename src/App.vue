<template>
  <Navbar @menu="getMenu" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      menu: false,
    };
  },

  methods: {
    getMenu(menu) {
      this.menu = menu;
      console.log(this.menu);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Space+Mono:wght@700&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Lexend Deca", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #939caa;
}

body {
  overflow-x: hidden;
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

@media screen and (max-width: 850px) {
  body {
    overflow-x: hidden !important;
  }
  .container {
    max-width: 690px !important;
  }
}

@media screen and (max-width: 450px) {
  .container {
    max-width: 315px !important;
  }

  body {
    overflow-x: hidden !important;
  }
}
</style>
