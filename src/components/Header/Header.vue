<template>
<header class="header">
  <div class="container">
    <nav class="header__navigation">
      <div class="header__hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="header__logo"><img alt="LILLYDOO Logo" title="LILLYDOO Logo" src="../../assets/images/logo.png"/></div>
      <ul class="header__menu">
        <NavItem title="Gratis Testpaket" active />
        <NavItem title="Flexibles Abo" />
        <NavItem title="Produkte" />
        <span class="header__menu-gap"></span>
        <NavItem title="Magazin" />
        <NavItem title="Über LILLYDOO" />
      </ul>
      <div class="header__shopping-cart">
        <img alt="Einkaufswagen" title="Einkaufswagen" src="../../assets/images/shopping-cart.png" />
      </div>
    </nav>
  </div>
</header>
</template>

<script>
import NavItem from "@/components/Utils/NavItem";
export default {
name: "Header",
  components: {NavItem}
}
</script>
