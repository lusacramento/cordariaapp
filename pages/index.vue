<template>
  <div id="the-project" class="the-project">
    <div class="container-fluid">
      <div class="row text-center layer-top align-items-center">
        <div class="col">
          <h1 class="title mt-3 mb-4">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container layer-center">
      <div class="row justify-content-around">
        <div class="col-md-4 col-12">
          <Box
            :title-text="boxes.what.text"
            :schema="boxes.what.schema"
            :left-logo="boxes.what.leftLogo"
            :right-logo="boxes.what.rightLogo"
          />
          <p class="large-line-height">
            Destinado à pessoas interessadas em iniciar o estudo do violão e guitarra e
            professores dessa arte, o projeto
            <strong>Cordaria</strong>
            é um aplicativo
            <i>web</i>
            com intuito de auxiliar a prática ao instrumento.
          </p>
          <p class="large-line-height">
            Desenvolvido pelo músico e programador
            <strong>Lu Sacramento</strong>, o projeto é fruto de uma pesquisa sobre novas
            metodologias e abordagens ao ensino à distância de música.
          </p>
        </div>
        <div class="col-md-4 col-12">
          <Box
            :title-text="boxes.doing.text"
            :schema="boxes.doing.schema"
            :left-logo="boxes.doing.leftLogo"
            :right-logo="boxes.doing.rightLogo"
          />
          <p>
            Sua função é gerar exercícios básicos de digitação com foco na técnica. Tais
            exercícios vem para
            <strong>auxiliar o educando</strong> a executar as notas dadas através de uma
            escrita de tablatura, cuja a linguagem é de fácil entendimento comparado a
            escrita de partitura.
          </p>
          <p>
            Desta forma, o aluno poderá praticar junto ao auxílio de um
            <strong>“correpetidor” virtual</strong>, em qualquer momento e lugar!
          </p>
        </div>
      </div>
      <aside class="row d-flex justify-content-center mt-4">
        <div class="col-lg-6 col-md-9 col-12">
          <Box
            :title-text="boxes.callInAction.text"
            :schema="boxes.callInAction.schema"
            :left-logo="boxes.callInAction.leftLogo"
            :right-logo="boxes.callInAction.rightLogo"
          />
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import Box from "@/components/box/Box.vue";

export default {
  components: { Box },

  data() {
    return {
      title: "O PROJETO",
      boxes: {
        what: {
          text: "<h2>O que é?</h2>",
          schema: "the-project",
          leftLogo: false,
          rightLogo: false,
        },
        doing: {
          text: "<h2>O que faz?</h2>",
          schema: "the-project",
          leftLogo: false,
          rightLogo: false,
        },
        callInAction: {
          text:
            '<main><a style="font-size:1.5em" class="no-text-decoration" href="/a-pratica">Inicie agora seu treinamento!</a></main>',
          schema: "the-project",
          leftLogo: true,
          rightLogo: false,
        },
      },
    };
  },
  head() {
    return {
      title: "Cordaria - O Projeto",
      meta: [
        {
          hid: "titleprojeto",
          name: "title",
          content: "Cordaria - Já praticou hoje?",
        },
        {
          hid: "projeto",
          name: "description",
          content:
            "O projeto Cordaria é resultado de uma pesquisa que vem para auxiliar, educandos e professores, a prática de violão e guitarra",
        },
        {
          hid: "projetokeys",
          name: "keywords",
          content: "pesquisa, prática, música, projeto, violão, guitarra",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://cordaria.com.br",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  font-size: 1.5em !important;
}
#the-project {
  text-align: center;
}

.large-line-height {
  line-height: 1.7;
}
</style>
