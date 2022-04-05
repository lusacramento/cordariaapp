<template>
  <div class="exercise-screen .layer-center mt-2 mb-4">
    <div class="container-fluid mt-3">
      <div v-if="isMobile">
        <div class="row mt-4 d-flex align-items-center justify-content-around">
          <Card id="prev-card" key="999" :card="card.prev" />
          <Card id="current-card" key="998" :card="card.current" />
          <Card id="next-card" key="997" :card="card.next" />
        </div>
      </div>
      <div v-if="!isMobile">
        <div class="row align-items-center">
          <Card
            v-for="(cardDeck, i) in suffledDeck"
            :id="cardDeck.id"
            :key="cardDeck + ' ' + i"
            :card="cardDeck"
            class="card cardView"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cordaria/cards/Card'

export default {
  components: { Card },
  props: {
    suffledDeck: {
      type: Array,
      default() {
        return []
      },
    },
    card: {
      type: Object,
      default() {
        return {}
      },
    },

    isMobile: {
      type: Boolean,
    },
    showExercise: Boolean,
  },
}
</script>

<style>
@media (min-width: 992px) {
  .exercise-screen {
    height: 60vh;
  }
}
</style>
