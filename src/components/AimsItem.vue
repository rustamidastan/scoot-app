<template>
  <div class="aim-wrapper">
    <div class="aim-info">
      <h2 class="aim-title">{{ aim.title }}</h2>
      <p class="aim-text">{{ aim.text }}</p>
      <a href="#" v-if="aim.link" class="aim-btn">Leaen More</a>
    </div>

    <img
      :src="aim.img"
      alt="aim image"
      class="aim-image"
      width="1020"
      height="460"
    />
  </div>
</template>

<script>
export default {
  props: ["aim"],
};
</script>

<style>
.aim-wrapper {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 120px;
  padding-bottom: 65px;
  padding-left: 165px;
  display: flex;
  align-items: center;
}

.aim-wrapper.odd {
  flex-direction: row-reverse;
  padding-left: 0;
  padding-right: 165px;
}

.aim-info {
  max-width: 445px;
}

.aim-title {
  font-size: 43px;
  line-height: 1;
  white-space: 700px;
  letter-spacing: -2, 17px;
  color: #495567;
  margin-bottom: 25px;
}

.aim.text {
  margin-bottom: 40px;
}

.aim-btn {
  display: inline-block !important;
  padding: 14px 45px;
  margin-top: 40px;
  background-color: #fcb72b;
  border: 3px solid transparent;
  color: #fff;
  display: block;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
}

.aim-btn:hover {
  background-color: transparent;
  color: #fcb72b;
  border-color: #fcb72b;
}

.aim-image {
  position: absolute;
  right: -544px;
}

.aim-wrapper.odd .aim-image {
  position: absolute;
  left: -544px;
}
</style>
