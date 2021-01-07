<template>
  <li class="nav-item"
      :class="{ 'nav-item--active': active }">
    <a>{{ title }}</a>
  </li>
</template>

<script>
export default {
name: "NavItem",
  props: {
  title: String,
  active: {
    type: Boolean,
    default: false
  }
  }
}
</script>
