<template>
  <div class="careers">
    <PageBanner :title="title" />
    <Aims :aims="aims" />
    <Features :features="features" :title="featureTitle" />
    <Vacancies :vacancies="vacancies" />
    <Footer />
  </div>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
import Aims from "../components/Aims.vue";
import Features from "../components/Features.vue";
import Vacancies from "@/components/Vacancies.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    PageBanner,
    Aims,
    Features,
    Vacancies,
    Footer,
  },
  data() {
    return {
      title: "Careers",
      aims: [
        {
          title: "Care to join our mission?",
          text: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
          img: require("../assets/careers-img1.png"),
          link: true,
        },
      ],
      featureTitle: "Why join us?",

      features: [
        {
          title: "Our tech",
          img: require("../assets/about-values-1.png"),
          text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
        },
        {
          title: "Our integrity",
          img: require("../assets/about-values-2.png"),
          text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
        },
        {
          title: "Our community",
          img: require("../assets/about-values-3.png"),
          text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
        },
      ],

      vacancies: [
        {
          title: "General Manager",
          location: "Jakarta, Indonesia",
        },
        {
          title: "UI/UX Designer",
          location: "Yokohama, Japan",
        },
        {
          title: "Blog Content Copywriter",
          location: "New York, United States",
        },
        {
          title: "Graphic Designer",
          location: "New York, United States",
        },
        {
          title: "Fleet Supervisor",
          location: "Jakarta, Indonesia",
        },
        {
          title: "UX Analyst",
          location: "London, United Kingdom",
        },
      ],
    };
  },
};
</script>

<style>
.careers .aim-image {
  width: 720px;
  height: 445px;
  right: -44px;
}
</style>
