<template>
  <div class="score" v-html="score" />
</template>

<script>
export default {
  props: {
    score: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style>
div.score {
  padding: 0 20px;
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
  font-size: 0.8em;
}
</style>
