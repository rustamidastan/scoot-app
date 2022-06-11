<template>
  <div class="faqs">
    <div class="container">
      <h2 class="faqs-title">FAQs</h2>
      <FAQsGroup v-for="(faq, index) in faqs" :key="index" :faq="faq" />
    </div>
  </div>
</template>

<script>
import FAQsGroup from "./FAQsGroup.vue";
export default {
  components: {
    FAQsGroup,
  },
  props: ["faqs"],
};
</script>

<style>
.faqs {
  padding-bottom: 160px;
}

.faqs-title {
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
  text-align-last: center;
  letter-spacing: -2px;
  color: #495567;
  margin-bottom: 64px;
}

@media screen and (max-width: 450px) {
  .faqs-title {
    font-size: 32px;
    margin-bottom: 48px;
  }

  .faqs {
    padding-bottom: 120px;
  }
}
</style>
