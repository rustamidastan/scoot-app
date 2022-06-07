<template>
  <section class="banner">
    <div class="container">
      <h1 class="banner-title">Scooter sharing made simple</h1>
      <img class="banner-line-img" src="../assets/line.svg" alt="" />
      <p class="banner-text">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <img
        class="banner-go-to-right-img"
        src="../assets/go-to-right.svg"
        alt=""
      />
      <a class="link" href="#">Get Scootin</a>
      <img
        class="banner-circle-img"
        src="../assets/banner-sircle.png"
        alt="sircle"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.banner {
  position: relative;
  padding: 155px 0;
  background: linear-gradient(rgba(73, 85, 103, 0.8), rgba(73, 85, 103, 0.8)),
    url(../assets/bg-header.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  position: relative;
  max-width: 1110px;
  margin: 0 auto;
}

.banner-title {
  margin: 0;
  padding: 0;
  width: 500px;
  font-size: 56px;
  line-height: 1;
  font-weight: 700;
  font-family: "Space Mono";
  letter-spacing: -2.5px;
  color: #fff;
}

.banner-text {
  position: relative;
  left: 90px;
  margin: 40px 0;
  width: 405px;
  color: #fff;
}

.link {
  position: relative;
  left: 90px;
  display: inline-block;
  padding: 14px 40px;
  font-size: 15px;
  line-height: 25px;
  font-family: "Space Mono";
  font-weight: 700;
  color: #fff;
  background-color: #fcb72b;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.link:hover {
  background-color: transparent;
  color: #fcb72b;
  border-color: #fcb72b;
}

.banner-line-img {
  position: absolute;
  bottom: 140px;
  left: -165px;
}

.banner-go-to-right-img {
  position: absolute;
  bottom: 5px;
  right: 125px;
}

.banner-circle-img {
  position: absolute;
  right: -190px;
  bottom: 13px;
}
</style>
