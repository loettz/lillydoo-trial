<template>
  <label class="radiobutton">
    <input
        type="radio"
        v-model="size"
        name="myradios"
        :value=val
        :checked="size === val">
    <span class="radiobutton__text">
      <span class="radiobutton__size">{{ val }}</span>
      <span class="radiobutton__description" v-if="subtext">{{ subtext }}</span>
    </span>
  </label>
</template>

<script>

export default {
  name: "SelectSize",
  props: {
    val: Number,
    subtext: String,
    current: String,
    model: Number
  },
  computed: {
    size: {
      get() {
        return this.$store.state.size;
      },
      set(value) {
        this.$store.commit("SET_SIZE", value);
      }
    },
  }
}
</script>
