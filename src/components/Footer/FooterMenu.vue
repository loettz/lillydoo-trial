<template>
  <Section>
    <ul class="footer__menu">
      <NavItem title="LILLYDOO App" />
      <NavItem title="Zahlung und Versand" />
      <NavItem title="Karriere" />
      <NavItem title="Presse" />
      <NavItem title="AGB" />
      <NavItem title="Datenschutzerklärung" />
      <NavItem title="Impressum" />
    </ul>
    <div class="footer__awards">
      <img alt="Trustmark" title="Trustmark" src="../../assets/images/trustmark.png" />
      <img alt="Reddot" title="Reddot" src="../../assets/images/reddot-logo.svg" />
    </div>
    <div class="footer__copyright">	&copy;2021 LILLYDOO GMBH</div>
  </Section>
</template>

<script>
import NavItem from "@/components/Utils/NavItem";
import Section from "@/components/Layout/Section";
export default {
  name: "FooterMenu",
  components: {Section, NavItem}
}
</script>
