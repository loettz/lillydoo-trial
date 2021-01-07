<template>
  <Section theme="gray">
    <div class="footer__partner">
      <div class="footer__payment">
        <div class="footer__partner-title">Sicher bezahlen mit:</div>
        <div class="footer__partner-logos">
          <Partner name="visa" />
          <Partner name="mastercard" />
          <Partner name="paypal" />
          <Partner name="rechnung" />
          <Partner name="sepa" />
        </div>
      </div>
      <div class="footer_shipping">
        <div class="footer__partner-title">Unser Versandpartner:</div>
        <Partner name="dhl" />
      </div>
    </div>
  </Section>
</template>

<script>
import Partner from "@/components/Utils/Partner";
import Section from "@/components/Layout/Section";
export default {
  name: "FooterPartner",
  components: {Section, Partner}
}
</script>
