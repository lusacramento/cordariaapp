/* eslint-disable vue/no-v-html */
<template>
  <div id="clues" class="">
    <div class="container-fluid">
      <div class="row text-center layer-top align-items-center">
        <div class="col">
          <h1 class="title mt-3 mb-4">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container layer-center justify-content-center d-flex">
        <div class="clues-area">
          <div class="row d-flex align-items-center clues-nav m-3 p-3">
            <div class="col-lg-4 col-12">
              <div class="title-clues">Dicas para um bom estudo</div>
            </div>
            <div
              class="col-lg-8 options col-12 justify-content-end align-items-center align-self-center"
            >
              <div
                class="clues-buttons"
                :class="{ cluesActive: text[0].isSelected }"
                @click="section = updateText(0)"
              >
                Ambientação
              </div>
              <div
                class="clues-buttons"
                :class="{ cluesActive: text[1].isSelected }"
                @click="section = updateText(1)"
              >
                Pré-estudo
              </div>
              <div
                class="clues-buttons"
                :class="{ cluesActive: text[2].isSelected }"
                @click="section = updateText(2)"
              >
                Estudo
              </div>
              <div
                class="clues-buttons"
                :class="{ cluesActive: text[3].isSelected }"
                @click="section = updateText(3)"
              >
                Pós-estudo
              </div>
            </div>
          </div>
          <div class="text-clues">
            <div class="row justify-content-center">
              <div class="col-10">
                <div v-html="section" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "DICAS",
      section: "",
      isSelected: false,
      text: [
        {
          id: "ambiente",
          value: `<h4>Esolhendo o Ambiente</h4>
              <p class="justify">
                A escolha um ambiente tranquilo é ideal para mantermos livre de
                distrações durante toda sua atividade.
              </p>
              <h4>Escolhendo uma cadeira</h4>
              <p class="justify">
                Dê preferência a uma cadeira sem apoio a braços e atente-se na
                altura do acento de acordo com sua. De modo geral, a altura
                ideal é quando os joelhos estejam em um ângulo de 90 graus
                quando sentado.
              </p>`,
          isSelected: true,
        },
        {
          id: "pre-estudo",
          value: `<h4>Respirando</h4>
              <p class="justify">
                Antes de começar a estudar, PARE! Respire fundo algumas vezes.
                Este método ajuda a esvaziar a cabeça e focar sua concentração
                na sua aprendizagem.
              </p>
              <h4>Alongando</h4>
              <p class="justify">
                Sempre faça alongamentos físicos antes de iniciar os estudos.
              </p>
              <h4>Afinando</h4>
              <p class="justify">
                Lembre-se sempre de afinar o violão antes de iniciar a tocar.
                Caso haja dificuldade de afinar, recorra a aplicativos
                afinadores
              </p>`,
          isSelected: false,
        },
        {
          id: "estudo",
          value: ` <h4>
                Exercitando com saúde
              </h4>
              <p class="justify">
                Atente-se a postura! Lembre de manter a coluna ereta.
              </p>
              <h4>
                Relaxe!
              </h4>
              <p class="justify">
                Lembre-se de relaxar os músculos desnecessários à prática!
              </p>
              <h4>
                Respire!
              </h4>
              <p class="justify">
                Lembre-se de manter uma respiração tranquila durante todo seu
                estudo; Essas dicas, além de prevenir lesões, você terá
                rendimento melhor e sua saúde agradece!
              </p>`,
          isSelected: false,
        },
        {
          id: "performance",
          value: `
              <h4>Pulo do gato</h4>
              <p class="justify">
                Mantenha a disciplina! Seja assíduo e organize seu horário de
                estudo.
              </p>
              <p class="justify">
                Se policie! Caso, sinta alguma fadiga ou dor que dure por um
                período maior que algumas horas, páre! Algo está errado com sua
                postura, movimento ou corpo. Procure uma orientação com um
                especialista.
              </p>
              <p class="justify">
                Avance a lição somente se você se sentir seguro!
              </p>
              <p class="justify">
                Deixe de timidez! Exercite também em um volume mais alto. Isso
                lhe trará uma maior segurança ao fazer musical.
              </p>`,
          isSelected: false,
        },
        // {
        //   id: "pos-estudo",
        //   value: `<h4>Pós-Estudo</h4>
        //       <p class="justify">
        //         E por último, não menos importante... • Cuide bem de seu
        //         instrumento! Lembre de limpar somente com um pano húmido e
        //         troque as cordas com frequência. Mantenha-o sempre dentro da sua
        //         bag, quando não estiver sendo utilizado.
        //         <br />
        //         Agindo assim, seu instrumento com certeza vai retribuir!
        //       </p>`,
        //   isSelected: false,
        // },
      ],
    };
  },

  head() {
    return {
      title: "Cordaria - Dicas",
      meta: [
        {
          hid: "titleddicas",
          name: "title",
          content: "Cordaria - Dicas para estudo de cordas",
        },
        {
          hid: "dicas",
          name: "description",
          content: "Dicas para um bom estudo com saúde e melhorias na sua performance.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://cordaria.com.br/dicas",
        },
        {
          hid: "dicaskeys",
          name: "keywords",
          content: "Dicas, Performance, Desenvolvimento, cordas, Violão, Guitarra",
        },
      ],
    };
  },

  mounted() {
    this.section = this.text[0].value;
  },
  methods: {
    updateText(i) {
      this.removeAllActive();
      this.text[i].isSelected = true;
      return this.text[i].value;
    },
    removeAllActive() {
      this.text.forEach((element) => {
        element.isSelected = false;
      });
    },
  },
};
</script>
<style>
.clues-area {
  border: var(--clues-border);
}
.clues-nav {
  border: var(--clues-border-nav);
}

.title-clues {
  color: var(--clues-color);
  font-family: "Encode Sans";
  font-weight: var(--font-semi-bold);
}

.clues-buttons {
  background-color: transparent !important;
  font-family: "Encode Sans";
  font-weight: var(--font-regular);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
.clues-buttons:hover,
.cluesActive {
  /* background-color: var(--bg-app) !important; */
  color: rgba(255, 255, 255, 0.8) !important;
}
.cluesActive {
  color: var(--clues-color) !important;
}

@media (min-width: 992px) {
  .clues-area {
    height: 340px;
    width: 80%;
  }
  .clues-buttons {
    padding-left: 30px;
  }
  .options {
    display: flex;
  }
}
/*
@media (max-width: 991.8 px) {
} */
</style>
