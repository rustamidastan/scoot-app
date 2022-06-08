<template>
  <div class="faq-item">
    <button class="faq-item__btn" @click="tab = !tab" :class="{ active: tab }">
      {{ faqItem.title }}
      <fa icon="chevron-down" class="tab-icon" />
    </button>
    <p class="faq-item__text" v-show="tab">{{ faqItem.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["faqItem"],
  data() {
    return {
      tab: false,
    };
  },
};
</script>

<style>
.faq-item {
  width: 730px;
  padding: 32px 40px;
  background-color: #f2f5f9;
}

.faq-item:not(:last-child) {
  margin-bottom: 16px;
}

.faq-item__btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  font-family: "Space Mono";
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #495567;
  cursor: pointer;
}

.tab-icon {
  color: #fcb72b;
  animation: dropdownIconDown 300ms ease-in-out forwards;
}

.faq-item__btn.active {
  margin-bottom: 24px;
}

.faq-item__btn.active .tab-icon {
  animation: dropdownIconUp 300ms ease-in-out forwards;
}

@keyframes dropdownIconUp {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes dropdownIconDown {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.faq-item__text {
  font-size: 15px;
  line-height: 25px;
  color: #495567;
}
</style>
