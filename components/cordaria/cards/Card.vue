<template>
  <div
    :id="id"
    :key="id"
    class="m-2 card align-items-center justify-content-center"
    :class="{
      pastCardColor: card.isPastCard,
      currentCardColor: card.isCurrentCard,
      futureCardColor: card.isFutureCard,
    }"
  >
    <CardFragment
      v-for="(fragment, i) in card.fragments"
      :id="id + ' ' + fragment.position"
      :key="fragment + ' ' + i"
      :is-highlight="fragment.isHighlight"
      :fragment="fragment.fragment"
    />
  </div>
</template>

<script>
import CardFragment from "./CardFragment";

export default {
  components: { CardFragment },
  props: {
    card: {
      type: Object,
      default: null
    }, 
    key: {
      type: String,
      default: null
      },
      id: {
        type: String,
        default: null,
      },
      fragment: {
        type: Number,
        default: null
        },
  },


  data() {
    return {
      isPastCardColor: true,
      isCurrentCardColor: false,
      isFutureCardColor: true,
    };
  },
};
</script>

<style>
div.card {
  flex-direction: row;
  background-color: #39c2a1;
  width: 160px;
  height: 160px;
}

/* color mobile view */
#prev-card,
.pastCardColor {
  font-family: "Encode Sans";
  font-weight: var(--font-bold);
  color: rgba(27, 20, 4, 0.5);
  background-color: #b4423f !important;
}
#current-card,
.currentCardColor {
  font-family: "Encode Sans";
  font-weight: var(--font-black);
  background-color: #ffd740 !important;
  color: rgb(27, 20, 4);
}

#current-card {
  border: solid 10px rgba(57, 57, 67, 1);
  box-sizing: content-box;
}

#next-card,
.futureCardColor {
  font-family: "Encode Sans";
  font-weight: var(--font-bold);
  background-color: #39c2a1 !important;
  color: rgba(27, 20, 4, 0.9);
}

@media (max-width: 575.98px) {
  div.card {
    width: 75px;
    height: 75px;
    font-size: 0.7em;
    flex-direction: row;
  }
  #prev-card,
  #current-card,
  #next-card {
    width: 180px;
    height: 180px;
    font-size: 2.5em;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) {
  div.card {
    width: 80px;
    height: 80px;
    font-size: 0.8em;
  }
  #prev-card,
  #current-card,
  #next-card {
    width: 160px;
    height: 160px;
    font-size: 2.3em;
  }
}

@media (min-width: 992px) {
  div.card {
    width: 100px;
    height: 100px;
    font-size: 1.1em;
  }
  #prev-card,
  #current-card,
  #next-card {
    width: 250px;
    height: 250px;
    font-size: 3.3em;
  }
}
</style>
