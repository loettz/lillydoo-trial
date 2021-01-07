<template>
  <Section>
    <Heading2 title="Dein Testpaket enthält" center />
    <FlexContainer>
      <Product name="10 LILLYDOO Windeln" image="diapers" />
      <Product v-if="[1, 2, 3].includes(size)" name="15 Feuchttücher mit 99% Wasser" image="water-wipes" />
      <Product v-if="[4, 5].includes(size)" name="15 Sensitive Feuchttücher" image="sensitive-wipes" />
    </FlexContainer>
  </Section>
</template>

<script>
import Heading2 from "@/components/Utils/Heading2";
import FlexContainer from "@/components/Layout/FlexContainer";
import Product from "@/components/Utils/Product";
import Section from "@/components/Layout/Section";
export default {
  name: "TrialBoxContent",
  components: {Section, Product, FlexContainer, Heading2},
  props: {
    size: Number
  }
}
</script>

<style scoped>

</style>