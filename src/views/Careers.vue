<template>
  <PageBanner :title="title" />
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
export default {
  components: {
    PageBanner,
  },
  data() {
    return {
      title: "Careers",
    };
  },
};
</script>

<style></style>
