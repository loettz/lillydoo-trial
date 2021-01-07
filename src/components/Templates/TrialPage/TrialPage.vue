<template>
  <div id="trialpage">
    <TrialBoxTeaser />
    <TrialBoxSelection />
    <Description />
    <TrialBoxContent :size="size" />
    <Reviews />
    <Section>
        <Heading2 title="Überzeug dich selbst" center />
        <Button text="Jetzt gratis testen"/>
    </Section>
    <img alt="Dandelion" title="Dandelion" src="../../../assets/images/16012019-33.jpg" />
  </div>
</template>

<script>

import '@/assets/styles/all.scss';
import TrialBoxSelection from "@/components/Templates/TrialPage/TrialBoxSelection";
import Description from "@/components/Templates/TrialPage/Description";
import TrialBoxTeaser from "@/components/Templates/TrialPage/TrialBoxTeaser";
import Heading2 from "@/components/Utils/Heading2";
import Section from "@/components/Layout/Section";
import Button from "@/components/Utils/Button";
import TrialBoxContent from "@/components/Templates/TrialPage/TrialBoxContent";
import Reviews from "@/components/Templates/TrialPage/Reviews";

export default {
  name: "TrialPage",
  components: {
    Reviews,
    TrialBoxContent,
    Button, Section, Heading2, TrialBoxTeaser, Description, TrialBoxSelection},
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
