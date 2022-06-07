<template>
  <nav class="site-nav">
    <div class="container site-nav__container">
      <router-link to="/">
        <img
          src="../assets/header-logo.svg"
          alt="site-logo"
          width="108"
          height="29"
          class="site-logo"
        />
      </router-link>

      <div class="site-nav__links">
        <router-link to="/about">About</router-link>
        <router-link to="/location">Location</router-link>
        <router-link to="careers">Creers</router-link>
      </div>

      <a href="#" class="get-scootin">Get Scootin</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.site-nav {
  padding: 22px 0;
  background-color: #fff;
}

.site-nav__container {
  display: flex;
  align-items: center;
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
  margin-left: auto;
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
</style>
