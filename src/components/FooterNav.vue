<template>
  <nav class="footer-nav">
    <div class="container footer-nav__container">
      <router-link to="/" class="site-logo">
        <img
          src="../assets/footer-logo.png"
          alt="site-logo"
          width="108"
          height="29"
        />
      </router-link>

      <div class="footer-nav__links">
        <router-link to="/about">About</router-link>
        <router-link to="/location">Location</router-link>
        <router-link to="careers">Creers</router-link>
      </div>

      <div class="footer-nav__socials">
        <a href="#">
          <fa :icon="['fab', 'facebook-square']" />
        </a>
        <a href="#">
          <fa :icon="['fab', 'twitter']" />
        </a>
        <a href="#">
          <fa :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.footer-nav {
  padding-top: 35px;
  padding-bottom: 32px;
  background-color: #333a44;
}

.footer-nav__container {
  display: flex;
  align-items: center;
}

.footer-nav__links {
  margin-left: 60px;
}

.footer-nav__links a {
  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #939caa;
  transition: all 0.3s ease;
}

.footer-nav__links a:hover {
  color: #fcb72b;
}

.footer-nav__links a:not(:last-child) {
  margin-right: 32px;
}

.footer-nav__socials {
  margin-left: auto;
}

.footer-nav__socials a {
  color: #fcb72b;
  font-size: 24px;
  transition: all 0.3s ease;
}

.footer-nav__socials a:hover {
  color: #ffffff;
}

.footer-nav__socials a:not(:last-child) {
  margin-right: 24px;
}
</style>
