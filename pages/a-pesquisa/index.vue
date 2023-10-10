<template>
  <div id="the-research" class="the-research">
    <div class="container-fluid">
      <div class="row text-center layer-top align-items-center">
        <div class="col">
          <h1 class="title mt-3 mb-4">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container layer-center">
      <div class="row justify-content-around">
        <section class="col-md-5">
          <Box
            :title-text="boxes.aboutResearch.text"
            :schema="boxes.aboutResearch.schema"
            :is-logo="boxes.aboutResearch.isLogo"
          />

          <p class="justify">
            A pesquisa
            <strong>
              “Cordaria – Desenvolvimento de aplicação web para iniciação à
              prática do violão e guitarra”
            </strong>
            surge em um momento delicado da história mundial: a pandemia do
            Coronavírus – COVID 19. Compelidos a este problema, os profissionais
            da área da educação, sobre tudo com atuação na área da música
            enfrentam grandes desafios para conseguir adequar suas atividades
            para o ensino a distância. Parte deste desafio é devido a escassez
            de recursos tecnológicos que fogem da metodologia tradicional de
            ensino, muito das vezes, limitado a vídeos, textos, imagens e de
            forma repetida. Os problemas se amplificam com usuários oriundos da
            classe baixa, que tem uma limitação considerável de hardware e/ou
            baixa conexão de internet.
          </p>
        </section>
        <div class="col-md-5">
          <aside class="row justify-content-center">
            <a :href="researchUrl" target="_blank">
              <Box
                :title-text="boxes.downloadResearch.text"
                :schema="boxes.downloadResearch.schema"
                :left-logo="boxes.downloadResearch.leftLogo"
                :right-logo="boxes.downloadResearch.rightLogo"
              />
            </a>
          </aside>
          <section class="row">
            <div class="col">
              <p class="justify large-line-height">
                Utilizando meus conhecimentos de uma década como professor e
                alguns anos de desenvolvedor web, implementei uma aplicação para
                prática de exercícios básicos de violão e guitarra baseada em
                alguns métodos já experienciados por mim enquanto discente e
                docente. Com isso, Cordaria pretende
                <strong
                  >ampliar as possibilidades metodológicas do ensino
                  prático</strong
                >
                destes instrumentos num cenário EAD e oferecer uma oportunidade
                diferente para iniciação da arte do fazer musical, além de
                incentivar programadores e professores a pensar novas formas de
                aprendizagem.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <aside class="row justify-content-center mt-3 m-3">
      <div class="col-9">
        <p id="credit-text" class="text-center">
          Esta pesquisa foi possível devido ao apoio da Lei Emergencial de
          Incentivo à Cultura – Lei Aldir Blanc, Governo Federal, Ministério do
          Turismo e Secretaria Especial de Cultura, através da aprovação no
          Edital LAB no 14/2020 – “Seleção de Bolsistas para as Áreas Artísticas
          Técnicas e de Produção Cultural” promovido pela Secretaria de Cultura
          e Turismo de Minas Gerais – SECULT.
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import Box from '@/components/box/Box.vue'

export default {
  name: 'TheResearch',
  components: { Box },
  data() {
    return {
      title: 'A PESQUISA',
      boxes: {
        aboutResearch: {
          text: '<h2>Como surgiu?</h2>',
          schema: 'the-research',
          leftLogo: false,
          rightLogo: false,
        },
        downloadResearch: {
          text: `
                           <div
                    class="
                      col
                      download-research
                      d-flex
                      align-items-center
                      justify-content-around
                      small-line-height
                      text-center
                    "
                  >
                    <div>A Pesquisa<br />Na íntegra</div>
                    <div>&nbsp;|&nbsp;<br />&nbsp;|&nbsp;</div>
                    <div>Baixe<br /><span class="font-bold">Aqui</span></div>
                    <div>

                        <img
                          @mouseover="icon.url = imageMouseOver(icon)"
                          @mouseleave="icon.url = imageMouseLeave(icon)"
                          class="img img-fluid icon"
                          :src="icon.url"
                          :alt="icon.altText"
                        />
                    </div>
                  </div>
                `,
          schema: 'the-research',
          leftLogo: false,
          rightLogo: true,
        },
      },
      researchUrl:
        './pdf/SACRAMENTO-Luciano-Cordaria-desenvolvimento-de-aplicacao-web-para-violao-e-guitarra.pdf',
    }
  },

  head() {
    return {
      title: 'Cordaria - A Pesquisa',
      meta: [
        {
          hid: 'titlepesquisa',
          name: 'title',
          content:
            'Cordaria - Desenvolvimento de Aplicação Web para Iniciação à Prática do Violão e Guitarra',
        },
        {
          hid: 'pesquisa',
          name: 'description',
          content:
            'Cordaria pretende ampliar as possibilidades metodológicas do ensino prático num cenário EAD e oferecer uma oportunidade diferente para iniciação da arte.',
        },
        {
          hid: 'pesquisakeys',
          name: 'keywords',
          content: 'Pesquisa, Prática, Musical, Desafios, EAD',
        },
      ],
      link: [
        {
          href: 'https://cordaria.com.br/a-pesquisa.pdf',
          rel: 'canonical',
        },
      ],
    }
  },
}
</script>

<style>
#credit-text {
  font-family: var(--font-light);
  font-size: var(--font-size-light) !important;
}

.the-research p {
  font-size: 0.83em;
}

#credit-text {
  font-size: 0.67em !important;
  font-family: 'Encode Sans';
  font-weight: var(--font-light);
}

.download-research {
  font-family: 'Encode Sans';
  font-weight: var(--font-regular);
  font-size: 0.95em;
}
.font-bold {
  font-family: 'Encode Sans';
  font-weight: var(--font-bold);
}

.small-line-height {
  line-height: 1.3;
}
</style>
