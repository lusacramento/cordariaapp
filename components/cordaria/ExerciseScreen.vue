<template>
  <div class="exercise-screen .layer-center mt-2 mb-4">
    <div class="container-fluid mt-3">
      <div v-if="isMobile">
        <div class="row mt-4 d-flex align-items-center justify-content-around">
          <Card id="prev-card" key="999" :card="prevCard" />
          <Card id="current-card" key="998" :card="currentCard" />
          <Card id="next-card" key="997" :card="nextCard" />
        </div>
      </div>
      <div v-if="!isMobile">
        <div class="row align-items-center">
          <Card
            v-for="(card, i) in suffledDeck"
            :id="card.id"
            :key="card + ' ' + i"
            :card="card"
            class="card cardView"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/cordaria/cards/Card";

export default {
  components: { Card },
  props: {
    suffledDeck: {
      type: Array,
      default() {
        return [];
      },
    },
    prevCard: {
      type: Object,
      default() {
        return {};
      },
    },
    currentCard: {
      type: Object,
      default() {
        return {};
      },
    },
    nextCard: {
      type: Object,
      default() {
        return {};
      },
    },
    isMobile: {
      type: Boolean,
    },
    showExercise: Boolean,
  },
};
</script>

<style>
@media (min-width: 992px) {
  .exercise-screen {
    height: 60vh;
  }
}
</style>
