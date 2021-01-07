<template>
  <Section>
    <div class="trialbox">
      <div class="trialbox__display-section">
        <img alt="Testpaket"
             title="Testpaket"
             :src="require(`@/assets/images/lillydoo-testpaket-${this.$store.state.size}.jpg`)">
      </div>
      <div class="trialbox__select-section">
        <Heading2 title="Entdecke unsere Hautfreundlichkeit" />
        <div class="trialbox__selection-label">Wähle deine Größe</div>
        <div class="trialbox__selection">
          <SelectSize :val=1 subtext="(2-5 KG)" />
          <SelectSize :val=2 subtext="(4-8 KG)" />
          <SelectSize :val=3 subtext="(6-10 KG)" />
          <SelectSize :val=4 subtext="(9-14 KG)" />
          <SelectSize :val=5 subtext="(11-16 KG)" />
        </div>
      </div>
    </div>
    <div class="trialbox__info-section">
      <div class="trialbox__description">
            <span>Teste jetzt unsere hautfreundlichen Windeln
            und erhalte unsere Feuchttücher mit 99% Wasser zu Größe 1 - 3
            oder die Sensitiven Feuchttücher zu Größe 4 - 5.</span>
          <List>
            <li>Wir zahlen die Produkte, Du nur den Versand.</li>
            <li class="highlight">Automatischer Übergang ins jederzeit kündbare Windel-Abo ab 49,50 € pro Lieferung.</li>
            <li>Preise inkl. MwSt., ggf. zzgl. <Link url="#" text="Versandkosten" /></li>
          </List>
        <Button text="Jetzt bestellen" fullwidth />
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Layout/Section";
import Button from "@/components/Utils/Button";
import List from "@/components/Utils/List";
import Heading2 from "@/components/Utils/Heading2";
import Link from "@/components/Utils/Link";
import SelectSize from "@/components/Utils/SelectSize";

export default {
name: "TrialBoxSelection",
  components: {
    SelectSize,
    Link,
    Heading2,
    List,
    Button,
    Section
  },
}

</script>
