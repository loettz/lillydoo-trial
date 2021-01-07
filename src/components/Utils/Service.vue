<template>
  <span class="service">
    <span class="material-icons">{{ icon }}</span>{{ text }}
  </span>
</template>

<script>
export default {
  name: "Service",
  props: {
    icon: String,
    text: String
  }
}
</script>
