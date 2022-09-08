<template>
  <nav class="site-nav" :class="{ active: menu }">
    <div class="site-nav__container">
      <div class="site-nav--top">
        <div class="menu-toggler">
          <button class="menu-open-icon" v-if="!menu" @click="navMenu">
            <img src="../assets/menu-icon.svg" alt="" />
          </button>

          <button class="menu-close-icon" v-if="menu" @click="navMenu">
            <img src="../assets/icon-menu-close.svg" alt="" />
          </button>
        </div>
        <router-link to="/">
          <img
            src="../assets/header-logo.svg"
            alt="site-logo"
            width="108"
            height="29"
            class="site-logo"
            @click="mainPage"
          />
        </router-link>
      </div>

      <div class="site-nav-menu" :class="{ active: menu }">
        <div class="site-nav__links">
          <router-link to="/about" @click="mainPage">About</router-link>
          <router-link to="/location" @click="mainPage">Location</router-link>
          <router-link to="careers" @click="mainPage">Creers</router-link>
        </div>

        <a href="#" class="get-scootin" @click="navMenu">Get Scootin</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },

  methods: {
    navMenu() {
      this.menu = !this.menu;
      this.$emit("menu", this.menu);
    },
    mainPage() {
      if (this.menu == true) {
        this.menu = !this.menu;
        this.$emit("menu", this.menu);
      }
    },
  },
};
</script>

<style>
.site-nav {
  padding: 22px 0;
  background-color: #fff;
}

.site-nav__container {
  max-width: 1110px;
  margin: 0 auto;
}

.site-nav.active::before {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 0;
  left: 0;
  content: "";
  background: rgba(0, 0, 0, 0.3);
}

.site-nav__container {
  display: flex;
  align-items: center;
}

.menu-toggler button {
  width: 20px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggler {
  margin-right: 100px;
  display: none;
}

.site-nav-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-nav__links {
  margin-left: 60px;
}

.site-nav__links a {
  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #939caa;
  transition: all 0.3s ease;
}

.site-nav__links a:not(:last-child) {
  margin-right: 32px;
}

.site-nav__links a:hover,
.site-nav__links a.router-link-exact-active {
  color: #fcb72b;
}

.get-scootin {
  padding: 14px 39px;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background-color: #fcb72b;
  border: 3px solid transparent;
  transition: all 0.3 ease;
  text-decoration: none;
}

.get-scootin:hover {
  border-color: #fcb72b;
  color: #fcb72b;
  background-color: transparent;
}

@media screen and (max-width: 850px) {
  .site-nav__container {
    max-width: 690px;
  }
}

@media screen and (max-width: 450px) {
  .site-nav {
    padding: 0;
    position: relative;
  }

  .site-nav__container {
    width: 100vw !important;
  }

  .site-nav--top {
    display: flex;
    align-items: center;
    z-index: 15;
    background-color: #fff;
    padding: 22px 0;
    padding-left: 32px;
    width: 100%;
  }

  .site-nav-menu {
    display: none;
  }

  .site-nav-menu.active {
    width: 256px;
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: 10;
    height: 80vh;
    padding-top: 64px;
    padding-left: 32px;
    padding-bottom: 24px;
    padding-right: 32px;
    background-color: #333a44;
  }
  .site-nav__links {
    margin-left: 0;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
  }

  .site-nav__links a {
    color: white;
  }

  .site-nav__links a:not(:last-child) {
    margin-right: 0px;
    margin-bottom: 24px;
  }

  .get-scootin {
    margin-left: 0;
    display: block;
    margin-top: 250px;
  }

  .menu-toggler {
    display: block;
  }
}
</style>
