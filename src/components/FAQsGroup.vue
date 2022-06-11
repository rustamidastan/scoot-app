<template>
  <div class="faqs-group">
    <h3 class="faqs-group__title">{{ faq.title }}</h3>

    <div class="faq-wrapper">
      <FAQsItem
        v-for="(faqItem, index) in faq.faqsItems"
        :key="index"
        :faqItem="faqItem"
      />
    </div>
  </div>
</template>

<script>
import FAQsItem from "./FAQsItem.vue";
export default {
  components: { FAQsItem },
  props: ["faq"],
};
</script>

<style>
.faqs-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.faqs-group:not(:last-child) {
  margin-bottom: 64px;
}

.faqs-group__title {
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  color: #495567;
  letter-spacing: -1.8px;
}

@media screen and (max-width: 850px) {
  .faqs-group {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .faqs-group__title {
    margin-bottom: 32px;
  }
}

@media screen and (max-width: 450px) {
  .faqs-group__title {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
