<template>
  <div :id="id" :key="id" class="card-fragment p-1" :class="{ highlight: isHighlight }">
    {{ fragment }}
  </div>
</template>

<script>
import "@/assets/animate/animate.min.css";
export default {
  props: ["fragment", "key", "id", "isHighlight"],
};
</script>

<style>
div.card-fragment {
  display: inline;
}

.highlight {
  animation: bounce;
  animation-duration: 100ms;
  font-size: 1.5em;
}
</style>
