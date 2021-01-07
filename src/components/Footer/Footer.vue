<template>
<div class="footer">
  <FooterService />
  <FooterPartner />
  <FooterMenu />
</div>
</template>

<script>

import FooterService from "@/components/Footer/FooterService";
import FooterPartner from "@/components/Footer/FooterPartner";
import FooterMenu from "@/components/Footer/FooterMenu";
export default {
  name: "Footer",
  components: {FooterMenu, FooterPartner, FooterService}
}
</script>
