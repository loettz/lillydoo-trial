<template>
<div class="step">
  <img :alt="icon"
       :title="icon"
       :src="require(`@/assets/images/${icon}.svg`)" />
  <span class="step__title">{{ title }}</span>
  <span class="step__text">{{ text }}</span>
  <span class="step__link" v-if="link"><Link v-if="link" :text="linkText" :url="link" /></span>
</div>
</template>

<script>
import Link from "@/components/Utils/Link";
export default {
name: "Step",
  components: {Link},
  props: {
    icon: String,
    title: String,
    text: String,
    link: String,
    linkText: String
  }
}
</script>
