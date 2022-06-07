<template>
  <div class="about">
    <PageBanner :title="title" />
    <Aims :aims="aims" />
    <Features :features="features" :title="featureTitle" />
    <FAQs :faqs="faqs" />
    <Footer />
  </div>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
import Aims from "@/components/Aims.vue";
import Features from "@/components/Features.vue";
import FAQs from "@/components/FAQs.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    PageBanner,
    Aims,
    Features,
    FAQs,
    Footer,
  },
  data() {
    return {
      title: "About",
      aims: [
        {
          title: "Mobility for the digital era",
          text: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
          link: false,
          img: require("../assets/about-mobility.png"),
        },
        {
          title: "Better urban living",
          text: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
          link: false,
          img: require("../assets/about-better.png"),
        },
      ],

      featureTitle: "Our values",

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

      faqs: [
        {
          title: "How it works",
          faqsItems: [
            {
              title: "How do I download the app?",
              text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
            },
            {
              title: "Can I find a nearby Scoots?",
              text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
            },
            {
              title: "Do I need a license to ride?",
              text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
            },
          ],
        },
        {
          title: "Safe driving",
          faqsItems: [
            {
              title: "Should I wear a helmet?",
              text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
            },
            {
              title: "How about the rules & regulations?",
              text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
            },
            {
              title: "What if I damage my Scoot?",
              text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.about .aim-image {
  width: 720px;
  height: 445px;
  right: -144px;
}

.about .aim-wrapper.odd .aim-image {
  width: 610px;
  left: -144px;
}

.about .aim-wrapper:first-child {
  margin-bottom: 200px;
}
</style>
