<template>
  <div class="feature-item">
    <img :src="feature.img" alt="feature image" class="feature-img" />
    <div class="feature-index">0{{ index + 1 }}</div>
    <h3 class="feature-item__title">{{ feature.title }}</h3>
    <p class="feature-text">{{ feature.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["feature", "index"],
};
</script>

<style>
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.feature-img {
  width: 240px;
  height: 240px;
  border-radius: 50%;
}

.feature-index {
  position: relative;
  top: -48px;
  left: 0;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcb72b;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  font-family: "Space Mono";
  color: #495567;
  letter-spacing: -1.07px;
  border-radius: 50%;
}

.feature-item__title {
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #495567;
  letter-spacing: -1.07px;
  margin-bottom: 27px;
}

.feature-text {
  font-size: 15px;
  line-height: 25px;
  text-align: center;
}
</style>
