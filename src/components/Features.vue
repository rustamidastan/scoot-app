<template>
  <div class="features">
    <div class="container">
      <h2 class="features-title">{{ title }}</h2>
      <div class="features-items">
        <FeatureItem
          v-for="(feature, index) in features"
          :key="index"
          :feature="feature"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureItem from "./FeatureItem.vue";
export default {
  components: { FeatureItem },
  props: ["features", "title"],
};
</script>

<style>
.features {
  padding-top: 80px;
  padding-bottom: 120px;
}

.features-title {
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -2px;
  text-align: center;
  color: #495567;
  margin-bottom: 103px;
}

.features-items {
  display: flex;
}

.feature-item:not(:last-child) {
  margin-right: 30px;
}
</style>
