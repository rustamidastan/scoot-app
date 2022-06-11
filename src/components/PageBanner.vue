<template>
  <div class="page-banner">
    <div class="container page-banner__container">
      <h2 class="page-banner__title">{{ title }}</h2>
      <img
        src="../assets/site-hero-bg-circles.svg"
        alt="page image"
        class="page-banner__img"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.page-banner {
  padding: 72px 0;
  background: linear-gradient(rgba(73, 85, 103, 0.8), rgba(73, 85, 103, 0.8)),
    url(../assets/careers-bg-img.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.page-banner__container {
  position: relative;
}

.page-banner__title {
  font-size: 56px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  letter-spacing: -2.5px;
}

.page-banner__img {
  position: absolute;
  right: -190px;
  top: 0;
}

@media screen and (max-width: 850px) {
  .page-banner__img {
    top: 0;
    right: -90px;
  }
}

@media screen and (max-width: 450px) {
  .page-banner__img {
    display: none;
  }

  .page-banner__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
