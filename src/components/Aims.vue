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
  props: ["aims"],
};
</script>

<style>
.aims {
  padding-top: 100px;
  padding-bottom: 180px;
}

@media screen and (max-width: 850px) {
  .aims {
    padding-top: 70px;
    padding-bottom: 0;
  }
}
</style>
