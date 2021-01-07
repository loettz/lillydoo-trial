<template>
  <a :href="url" class="link">{{ text }}</a>
</template>

<script>
export default {
  name: "Link",
  props: {
    url: String,
    text: String
  }
}
</script>
