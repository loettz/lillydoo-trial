<template>
  <Section theme="turquoise">
    <div class="footer__service">
      Wir wollen mehr für Dich sein, nicht nur Wickeln und Tschüss.
      Also ruf gerne an oder schreib uns!
      <div class="footer__service-contact">
        <Service icon="email" text="service@lillydoo.com" />
        <Service icon="phone" text="49 (0) 69 - 643 57 420" />
        <span class="material-icons">facebook</span>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Layout/Section";
import Service from "@/components/Utils/Service";
export default {
  name: "FooterService",
  components: {Service, Section}
}
</script>
