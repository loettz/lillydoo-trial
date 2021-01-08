<template>
<div class="flower-teaser">
  <Section>
    <Heading2 title="Überzeug dich selbst" center />
    <Button text="Jetzt gratis testen"/>
  </Section>
  <div class="flower-teaser__background" />
</div>
</template>

<script>
import Section from "@/components/Layout/Section";
import Heading2 from "@/components/Utils/Heading2";
import Button from "@/components/Utils/Button";
export default {
  name: "FlowerTeaser",
  components: {Button, Heading2, Section}
}
</script>

<style scoped>

</style>