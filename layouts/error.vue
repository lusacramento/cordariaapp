<template>
  <div>
    <h1 v-if="error.statusCode === 404">Página não encontrada</h1>
    <h1 v-else>Ocorreu um erro</h1>
    <NuxtLink to="/">Página Inicial</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: "error", // você pode definir um layout personalizado para a página de erro
  // props: [error]
};
</script>
