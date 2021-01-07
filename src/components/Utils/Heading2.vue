<template>
<h2 class="title"
    :class="{ 'title--center': center }">
  {{ title }}
</h2>
</template>

<script>
export default {
  name: "Heading2",
  props: {
    title: String,
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>