<template>
  <div id="trialpage">
    <TrialBoxTeaser />
    <TrialBoxSelection />
    <Description />
    <TrialBoxContent :size="size" />
    <Reviews />
    <FlowerTeaser />
  </div>
</template>

<script>

import TrialBoxSelection from "@/components/Templates/TrialPage/TrialBoxSelection";
import Description from "@/components/Templates/TrialPage/Description";
import TrialBoxTeaser from "@/components/Templates/TrialPage/TrialBoxTeaser";
import TrialBoxContent from "@/components/Templates/TrialPage/TrialBoxContent";
import Reviews from "@/components/Templates/TrialPage/Reviews";
import FlowerTeaser from "@/components/Templates/TrialPage/FlowerTeaser";

export default {
  name: "TrialPage",
  components: {
    FlowerTeaser,
    Reviews,
    TrialBoxContent,
    TrialBoxTeaser,
    Description,
    TrialBoxSelection},
  computed: {
    size: {
      get() {
        return this.$store.state.size;
      },
      set(value) {
        this.$store.commit("SET_SIZE", value);
      }
    },
  },
}
</script>
