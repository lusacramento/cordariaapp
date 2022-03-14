<template>
  <div id="score-terminal" class="score" v-html="score" />
</template>

<script>
export default {
  name: 'ScoreTerminal',
  props: {
    score: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style>
div.score {
  padding: 0 20px;
  font-family: 'Encode Sans';
  font-weight: var(--font-semi-bold);
  color: var(--font-color-hover);
  font-size: 0.8em;
}
</style>
