<template>
  <div class="location-map-wrapper">
    <div class="container">
      <div class="location-map"></div>
      <div class="map-cities">
        <div class="city">New York</div>
        <div class="city">London</div>
        <div class="city">Jakarta</div>
        <div class="city">Yokohama</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.location-map-wrapper {
  padding: 120px 0;
}

.location-map {
  height: 545px;
  width: 100%;
  background-image: url(../assets/locations-map.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.map-cities {
  display: none;
  margin-top: 40px;
}

.city {
  width: 311px;
  height: 72px;
  background: rgba(252, 183, 43, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1px;
  color: #495567;
  font-family: "Space Mono";
}

.city:not(:last-child) {
  margin-bottom: 16px;
}

@media screen and (max-width: 850px) {
  .location-map {
    width: 690px;
    height: 337px;
  }
}

@media screen and (max-width: 450px) {
  .location-map-wrapper {
    padding: 72px 0;
  }
  .location-map {
    width: 311px;
    height: 152px;
    background-image: url(../assets/map-mobilee.png);
  }

  .map-cities {
    display: block;
  }
}
</style>
