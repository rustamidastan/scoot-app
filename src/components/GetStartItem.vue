<template>
  <div class="get-start-item">
    <div class="img-wrapper">
      <img :src="getStartProps.img" alt="" />
    </div>

    <div>
      <h3 class="get-start-title">{{ getStartProps.title }}</h3>

      <p class="get-start-text">{{ getStartProps.text }}</p>
    </div>
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

@media screen and (max-width: 850px) {
  .get-start-item {
    display: flex;
    margin-bottom: 40px;
  }

  .img-wrapper {
    margin-right: 80px;
  }

  .get-start-title {
    margin-top: 0;
  }

  .get-start-text {
    width: 400px;
  }
}

@media screen and (max-width: 450px) {
  .get-start-item {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .get-start-text {
    width: 311px;
    text-align: center;
  }

  .get-start-title {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .img-wrapper {
    margin-right: 0;
  }
}
</style>
