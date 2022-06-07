<template>
  <SiteBanner />
  <GetStart />
</template>

<script>
import SiteBanner from "../components/SiteBanner.vue";
import GetStart from "../components/GetStart.vue";

export default {
  name: "HomeView",
  components: { SiteBanner, GetStart },
};
</script>
