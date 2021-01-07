<template>
  <div class="section" :class="theme">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    theme:  {
      type: String,
      default: 'white'
    }
  }
}
</script>
