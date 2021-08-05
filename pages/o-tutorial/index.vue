<template>
  <div id="the-tutorial" class="the-tutorial">
    <div class="container-fluid">
      <div class="row text-center layer-top align-items-around">
        <div class="col">
          <h1 class="title mt-3 mb-4">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container layer-center">
      <div class="row justify-content-around">
        <section class="col-md-6 col">
          <div class="row justify-content-center d-flex mb-1">
            <Box
              :title-text="boxes.how.text"
              :schema="boxes.how.schema"
              :left-logo="boxes.how.leftLogo"
              :right-logo="boxes.how.rightLogo"
            />
          </div>
          <p class="text-center">
            O aplicativo ficará responsável por lhe informar o
            <strong>momento instantâneo</strong> da nota a ser tocada acompanhado da
            <b>execução do áudio</b> em um andamento pré-determinado.
          </p>
          <p class="text-center">
            Cada dígito representa qual <strong>dedo</strong> será precionado e em qual
            <strong>casa</strong>, para gerar a nota exigida pelo exercício. No caso do
            dígito for igual a 0, a nota será dada pela corda solta.
          </p>

          <p class="text-center mb-2">
            Dessa forma, o aluno poderá praticar junto ao auxílio de um
            <b>"correpetidor" virtual</b>, em qualquer momento e lugar!
          </p>
          <aside class="mt-4 mb-3">
            <Box
              :title-text="boxes.callInAction.text"
              :schema="boxes.callInAction.schema"
              :left-logo="boxes.callInAction.leftLogo"
              :right-logo="boxes.callInAction.rightLogo"
              class="mt-4"
            />
          </aside>
        </section>

        <div class="col-md-5 col-sm-12">
          <div class="row">
            <div class="col">
              <Box
                :title-text="boxes.steps.text"
                :schema="boxes.steps.schema"
                :left-logo="boxes.steps.leftLogo"
                :right-logo="boxes.steps.rightLogo"
              />
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-sm-12 mb-3">
              <CarouselClues />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Box from "@/components/box/Box.vue";
import CarouselClues from "@/components/carousel/CarouselClues.vue";
export default {
  components: { CarouselClues },
  // eslint-disable-next-line require-await
  data() {
    return {
      title: "O TUTORIAL",
      boxes: {
        how: {
          text: "<h2>Como Funciona o app?</h2>",
          schema: "the-tutorial",
          leftLogo: false,
          rightLogo: false,
        },
        steps: {
          text: "<h2>Passo-a-passo</h2>",
          schema: "the-tutorial",
          leftLogo: false,
          rightLogo: false,
        },
        callInAction: {
          text:
            '<main><a style="font-size:1.5em" class="no-text-decoration" href="/a-pratica">Inicie agora seu treinamento!</a></main>',
          schema: "the-tutorial",
          leftLogo: true,
          rightLogo: false,
        },
      },
    };
  },
  head() {
    return {
      title: "Cordaria - O Tutorial",
      meta: [
        {
          hid: "titletutorial",
          name: "title",
          content: "Cordaria - Tutorial simples e prático de nossa aplicação",
        },
        {
          hid: "tutorial",
          name: "description",
          content: "Aprenda como usar o cordaria neste tutorial simples e prático.",
        },
        {
          hid: "tutorialkeys",
          name: "keywords",
          content: "Tutorial, Treinamento, Passo-a-Passo, Instrumento, Cordas, Digitação",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://cordaria.com.br/o-tutorial",
        },
      ],
    };
  },
};
</script>

<style>
#the-tutorial {
  text-align: center;
}
</style>
