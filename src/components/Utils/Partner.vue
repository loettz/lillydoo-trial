<template>
  <img :alt="name"
       :title="name"
       width="100px"
       :src="require(`@/assets/images/${name}.svg`)" />
</template>

<script>
export default {
  name: "Partner",
  props: {
    name: String
  }
}
</script>
