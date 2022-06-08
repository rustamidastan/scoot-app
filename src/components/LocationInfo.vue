<template>
  <div class="location-info">
    <div class="container location-info__container">
      <h2 class="location-info__title">{{ info.title }}</h2>
      <p class="location-info__text">{{ info.text }}</p>
      <a href="#" class="location-info__lnk">Message Us</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style>
.location-info {
  padding-bottom: 122px;
}

.location-info__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-info__title {
  width: 311px;
  color: #495567;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -2px;
}

.location-info__text {
  width: 445px;
  font-size: 15px;
  line-height: 25px;
}

.location-info__lnk {
  padding: 14px 67px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  border: 3px solid transparent;
  background-color: #fcb72b;
  transition: all 0.3 s ease;
  text-decoration: none;
}
.location-info__lnk:hover {
  border-color: #fcb72b;
  color: #fcb72b;
  background-color: transparent;
}
</style>
