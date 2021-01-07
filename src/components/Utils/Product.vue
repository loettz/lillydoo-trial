<template>
  <div class="product">
    <div class="product__image">
      <img :alt="name"
       :title="name"
       :src="require(`@/assets/images/${image}.jpg`)" />
    </div>
    <div class="product__description">
      <div class="product__title">{{ name }}</div>
      <div class="product__rating"><img src="../../assets/images/starsrating.png" /> (12)</div>
      <List>
        <li>0% Parfüme & Lotionen, 100% LILLYDOO Schutz</li>
        <li>Extra weich und super bequem</li>
        <li>Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption</li>
      </List>
    </div>
  </div>
</template>

<script>
import List from "@/components/Utils/List";
export default {
name: "Product",
  components: {List},
  props: {
    name: String,
    image: String
  }
}
</script>
