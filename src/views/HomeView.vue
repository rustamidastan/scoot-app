<template>
  <SiteBanner />
  <GetStart />
  <Aims :aims="aims" />
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
  data() {
    return {
      aims: [
        {
          title: "Easy to use riding telemetry",
          text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
          img: require("../assets/easy-bg-img.jpg"),
          link: true,
        },
        {
          title: "Coming to a city near you",
          text: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
          img: require("../assets/coming-bg-img.jpg"),
          link: true,
        },
        {
          title: "Zero hassle payments",
          text: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
          img: require("../assets/zero-bg-img.jpg"),
          link: true,
        },
      ],
    };
  },
};
</script>
