<template>
  <div class="sign-up">
    <div class="container sign-up__container">
      <h2 class="sign-up__title">Sign up and Scoot off today</h2>

      <div class="sign-up__btn-group">
        <a class="sign-up__btn" href="#"
          ><img
            src="../assets/app-store.svg"
            alt="app store"
            width="160"
            height="56"
        /></a>
        <a class="sign-up__btn" href="#"
          ><img
            src="../assets/google-play.svg"
            alt="google play"
            width="182"
            height="56"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sign-up {
  padding-top: 102px;
  padding-bottom: 102px;
  background-image: url(../assets/site-footer-bg-circles.svg);
  background-repeat: no-repeat;
  background-position: 130% -230%;
  background-color: #495567;
}

.sign-up__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sign-up__title {
  max-width: 415px;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.1px;
  color: #fff;
}

.sign-up__btn-group {
  display: flex;
}

.sign-up__btn img {
  display: block;
}

.sign-up__btn:first-child {
  margin-right: 20px;
}
</style>
