<template>
  <SiteBanner />
  <GetStart />
  <Aims />
  <Footer />
</template>

<script>
import SiteBanner from "../components/SiteBanner.vue";
import GetStart from "../components/GetStart.vue";
import Aims from "../components/Aims.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: { SiteBanner, GetStart, Aims, Footer },
};
</script>
