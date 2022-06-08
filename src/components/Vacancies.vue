<template>
  <div class="vacancies">
    <div class="container">
      <VacancyItem
        v-for="(vacancy, index) in vacancies"
        :vacancy="vacancy"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import VacancyItem from "./VacancyItem.vue";
export default {
  components: {
    VacancyItem,
  },
  props: ["vacancies"],
};
</script>

<style>
.vacancies {
  padding-bottom: 160px;
}
</style>
