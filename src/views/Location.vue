<template>
  <PageBanner :title="title" />
  <Map />
  <LocationInfo :info="info" />
  <Footer />
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
import Map from "@/components/Map.vue";
import LocationInfo from "@/components/LocationInfo.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    PageBanner,
    Map,
    LocationInfo,
    Footer,
  },
  data() {
    return {
      title: "Location",
      info: {
        title: "Your city not listed?",
        text: "If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.",
      },
    };
  },
};
</script>

<style></style>
