<template>
  <Section class="section" theme="gray">
    <Heading2 title="Wie es funktioniert" center />
    <FlexContainer>
      <Step title="Dein Testpaket"
            icon="gift"
            text="Wir schenken dir die Produkte, Du übernimmst nur das Porto" />
      <Step title="Deine Flexibilität"
            icon="list"
            link="#"
            link-text="Erfahre hier mehr über das LILLYDOO Windel-Abo"
            text="Erste Monatsbox nach 14 Tagen für 49,50 erhalten. Oder noch vor der ersten Lieferung kündigen" />
      <Step title="Deine Monatsbox"
            icon="box"
            text="Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder weitere Produkte hinzufügen." />
    </FlexContainer>
  </Section>
</template>

<script>

import Section from "@/components/Layout/Section";
import Heading2 from "@/components/Utils/Heading2";
import Step from "@/components/Utils/Step";
import FlexContainer from "@/components/Layout/FlexContainer";

export default {
  name: "Description",
  components: { FlexContainer, Step, Heading2, Section}
}
</script>

<style scoped>

</style>