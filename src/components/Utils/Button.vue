<template>
  <button
      class="button-primary"
      :class="{ 'button-primary--fullwidth': fullwidth }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    fullwidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>
