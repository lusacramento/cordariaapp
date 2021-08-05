<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="slide in slides" :key="slide.id" class="">
        <div v-show="slide.isImage">
          <img
            v-if="slide.isImage"
            :src="slide.img"
            :alt="slide.altText"
            class="img img-fluid"
          />
        </div>
        <div v-if="slide.isVideo">
          <video class="video img img-fluid" controls preload="auto">
            <source class="img img-fluid" :src="slide.src" type="video/mp4" />
          </video>
        </div>

        <div v-html="slide.text" />
      </div>
    </VueSlickCarousel>
  </div>

  <!-- <client-only placeholder="Carregando. Aguarde..."> -->
  <!-- <agile :infinite="false" :navButtons="false" :mobileFirst="false" >
    <div v-for="slide in slides" :key="slide">
        <div v-show="slide.isImage">
          <img
          v-if="slide.isImage"
          :src="slide.img"
          :alt="slide.altText"
          class="img img-fluid"
          />
        </div>
        <div v-if="slide.isVideo">
          <video class="video img img-fluid" controls preload="auto">
            <source
              class="img img-fluid"
              :src="slide.src"
              type="video/mp4"
            />
          </video>
        </div>

        <div v-html="slide.text" />
      </div>
    <template slot="prevButton"></template>
    <template slot="nextButton"></template>
    </agile> -->
  <!-- </client-only> -->
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import tutorialPasso1 from "@/assets/imgs/tutorial-cordaria-passo-1.gif";
import tutorialPasso2 from "@/assets/imgs/tutorial-cordaria-passo-2.gif";
import tutorialPasso3 from "@/assets/imgs/tutorial-cordaria-passo-3.png";
import tutorialPasso4 from "@/assets/imgs/tutorial-cordaria-passo-4.mp4";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        // dots: true,
        infinite: false,
        vertical: false,
        // accessibility: true,
        // adaptiveHeight: true,
        // variableWidth: true,
        // centerMode: true
        responsive: [
          {
            breakpoint: 576,
            settings: {
              vertical: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      slides: [
        {
          id: 0,
          isImage: true,
          isVideo: false,
          img: tutorialPasso1,
          altText: "Tutorial Passo 1",

          text: `<p>Entrar no link <strong>A prática</strong>;<br />
          Selecione o modo de <strong>visualização</strong> de sua preferência:<br />
          3 Cartas: modo  dinâmico; Todas as Cartas: modo clássico.`,
        },
        {
          id: 1,
          isImage: true,
          isVideo: false,
          img: tutorialPasso2,
          altText: "Tutorial Passo 2",
          text: `<p>
           Selecione uma lição pré-determinada ou personalizada.<br />
           Para lições personalizadas, selecione o <strong>primeiro dedo</strong>, 
           a <strong>corda</strong>
           e o <strong>andamento</strong> de acordo com seu ritmo.<p />`,
        },
        {
          id: 2,
          isImage: true,
          isVideo: false,
          img: tutorialPasso3,
          altText: "Tutorial Passo 3",
          text: `<p>Aperte o botão <strong>play</strong>. Aproveite o tempo da pré-contagem para se posicionar:
            Alinhe os dedos <strong>1, 2, 3 e 4</strong> nas respectivas casas
            da corda selecionada.</p>`,
        },
        {
          id: 3,
          isImage: false,
          isVideo: true,
          src: tutorialPasso4,
          title: "Cordaria - Tutorial",
          description: "Passo 4",
          text:
            "<p>Toque as notas realçadas apresentadas na carta amarela no <strong>momento informado</strong>.</p>",
        },
      ],
    };
  },
};
</script>
<style>
/* .carousel-wrapper {
  height: 100%
} */

/* .img-wrapper img {
  margin: auto;
  width: auto;
  height: 100vh;
  background-image: linear-gradient(gray 100%, transparent 0);
  flex-wrap:wrap;
} */
</style>
