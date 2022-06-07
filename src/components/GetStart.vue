<template>
  <div class="get-start">
    <div class="container">
      <ul>
        <li v-for="(getStart, index) in getStartData" :key="index">
          <GetStartItem :getStartProps="getStart" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GetStartItem from "./GetStartItem.vue";
export default {
  components: {
    GetStartItem,
  },
  data() {
    return {
      getStartData: [
        {
          title: "Locate with app",
          img: require("../assets/get-start-1.png"),
          text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
        },

        {
          title: "Pick your scooter",
          img: require("../assets/get-start-2.png"),
          text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. ",
        },

        {
          title: "Enjoy the ride",
          img: require("../assets/get-start-3.png"),
          text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
        },
      ],
    };
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.get-start {
  position: relative;
  padding-top: 150px;
  padding-bottom: 100px;
}

.get-start .container::before {
  position: absolute;
  left: -140px;
  top: 42px;
  width: 917px;
  height: 15px;
  background-color: #e5ecf4;
  content: "";
  z-index: -5;
}

.get-start ul {
  display: flex;
  justify-content: space-between;
}
</style>
