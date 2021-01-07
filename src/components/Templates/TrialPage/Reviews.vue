<template>
  <Section theme="gray">
    <Heading2 title="Was andere über unsere Windeln sagen" center />
    <Review />
    <Review />
    <Review />
  </Section>
</template>

<script>
import Section from "@/components/Layout/Section";
import Heading2 from "@/components/Utils/Heading2";
import Review from "@/components/Utils/Review";
export default {
  name: "Reviews",
  components: {Review, Heading2, Section}
}
</script>
