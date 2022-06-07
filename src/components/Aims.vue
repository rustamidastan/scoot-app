<template>
  <div class="aims">
    <AimsItem
      v-for="(aim, index) in aims"
      :aim="aim"
      :key="index"
      :class="{ odd: index % 2 == 1 }"
    />
  </div>
</template>

<script>
import AimsItem from "./AimsItem.vue";
export default {
  components: { AimsItem },
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

<style>
.aims {
  padding-top: 100px;
  padding-bottom: 180px;
}
</style>
