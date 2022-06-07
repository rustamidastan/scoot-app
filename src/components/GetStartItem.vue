<template>
  <div class="get-start-item">
    <div class="img-wrapper">
      <img :src="getStartProps.img" alt="" />
    </div>

    <h3 class="get-start-title">{{ getStartProps.title }}</h3>

    <p class="get-start-text">{{ getStartProps.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["getStartProps"],
};
</script>

<style>
.img-wrapper {
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcb72b;
  border-radius: 50%;
}

.get-start-title {
  margin-top: 40px;
  margin-bottom: 27px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #495567;
  font-family: "Space Mono";
}

.get-start-text {
  width: 350px;
  color: #939caa;
}
</style>
