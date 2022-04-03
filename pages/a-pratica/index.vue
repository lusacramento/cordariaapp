<template>
  <div id="the-pratice" class="cordaria">
    <div class="exercise-nav container-fluid">
      <div class="row text-center layer-top align-items-center">
        <div class="col-12 col-lg-4">
          <b-sidebar
            id="sidebar-menu"
            title="Menu"
            class="menu-button"
            shadow
            bg-variant="dark"
            text-variant=""
            :visible="isEnabledMenu"
          >
            <div
              class="exercises-nav-layer d-flex flex-column align-items-center"
            >
              <ExerciseNav
                :lessons="lessons"
                :is-visible-button-play="isVisibleButtonPlay"
                :is-visible-button-stop="isVisibleButtonStop"
                :stop="stop"
                :score="score"
                @props="load"
              />
            </div>
          </b-sidebar>
          <b-button id="menu-button" v-b-toggle.sidebar-menu variant="dark"
            >Menu</b-button
          >
        </div>
        <div class="col-12 col-lg-4">
          <h1 class="title mt-3 mb-4">{{ title }}</h1>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center">
          <ScoreTerminal :score="score" />
          <button
            v-if="isVisibleButtonStop"
            type="button"
            class="
              btn btn-danger btn-controls
              d-flex
              align-items-center
              justify-content-center
            "
            @click="stop(true)"
          >
            <font-awesome-icon class="fa fa-code stop" :icon="iconStop" />
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center bg-exercise-screen">
      <div class="col-lg-10 layer-center">
        <div class="exercise-screen">
          <ExerciseScreen
            :prev-card="prevCard"
            :current-card="currentCard"
            :next-card="nextCard"
            :suffled-deck="suffledDeck"
            :is-mobile="settings.isMobile"
          />
        </div>
      </div>
    </div>
    <div class="tips">
      <CatJump :tips="tips" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import Func from '@/plugins/functions'

import CatJump from '@/components/cordaria/Tips'
import ExerciseNav from '@/components/cordaria/ExerciseNav'
import ExerciseScreen from '@/components/cordaria/ExerciseScreen'
import ScoreTerminal from '@/components/cordaria/Score'
// import Score from '@/components/cordaria/Score'

library.add([faStop])

export default {
  name: 'APratica',
  components: {
    FontAwesomeIcon,
    CatJump,
    ExerciseNav,
    ExerciseScreen,
    ScoreTerminal,
  },
  async asyncData({ $http }) {
    const lessons = await $http.$get('./json/lessons.json')
    const deck = await $http.$get('./json/deck.json')
    const acousticGuitar = await $http.$get('./json/acoustic-guitar.json')
    const eletricGuitar = await $http.$get('./json/eletric-guitar.json')
    const cavaco = await $http.$get('./json/cavaco.json')
    const bass = await $http.$get('./json/bass.json')

    const tips = await $http.$get('./json/tips.json')

    return {
      lessons: lessons.lessons,
      deck: deck.deck,
      instruments: {
        acousticGuitar: acousticGuitar.guitarMap,
        eletricGuitar: eletricGuitar.guitarMap,
        cavaco: cavaco.cavacoMap,
        bass: bass.bassMap,
      },
      instrumentMap: null,
      tips: tips.tips,

      suffledDeck: null,

      // exercises
      settings: {
        isMobile: null,
        lesson: null,
        firstFinger: null,
        stringNumber: '5',
        bpm: null,
        allStrings: false,
        direction: 'down',
        release: 1,
      },
      instrument: null,

      // Audios Exercise
      sequence: null,

      // Cards
      prevCard: {},
      currentCard: {},
      nextCard: {},
      isPastCard: false,
      isCurrentCard: false,
      isFuterCard: false,

      // Show Buttons
      isVisibleButtonPlay: false,
      isVisibleButtonStop: false,
      iconStop: 'stop',

      // Indexes
      preCount: 4,
      lengthSuffledDeck: 0,
      iCard: 0,
      iValue: 0,

      swapCard: false,

      // Playing
      tempo: null,
      score: 'Aguardando<br />para iniciar',

      fadeOutValue: 10,

      isStopSequence: false,

      // Menu
      isEnabledMenu: true,
    }
  },
  data() {
    return {
      title: 'A PRÁTICA',
    }
  },
  head() {
    return {
      title: 'Cordaria - Pratique agora!',
      meta: [
        {
          hid: 'titlepratica',
          name: 'title',
          content: 'Já Praticou Hoje? Inicie agora mesmo seu treinamento!',
        },
        {
          hid: 'pratica',
          name: 'description',
          content: 'Inicie agora mesmo seu treinamento musical. Bons Estudos!',
        },
        {
          hid: 'particakeys',
          name: 'keywords',
          content: 'Treinamento, Método, Violão, Guitarra, Dedilhado',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://cordaria.com.br/a-pratica',
        },
      ],
    }
  },

  watch: {
    preCount(newPreCount) {
      return newPreCount
    },

    score(newScore) {
      return newScore
    },

    suffledDeck(newSuffledDeck) {
      return newSuffledDeck
    },

    prevCard(newPrevCard) {
      return newPrevCard
    },

    currentCard(newCurrentCard) {
      return newCurrentCard
    },

    nextCard(newNextCard) {
      return newNextCard
    },
    tempo(newTempo) {
      return newTempo
    },
  },

  created() {
    this.sendPropsHideFooter()
  },

  mounted() {
    this.isVisibleButtonPlay = true
  },
  destroyed() {
    this.stop(true)
  },
  methods: {
    showMenu() {
      this.isCollapse = !this.isCollapse
    },
    load(payload) {
      // hide Menu
      this.isEnabledMenu = payload.isEnabledMenu

      this.isVisibleButtonPlay = false
      this.score = 'Carregando<br>...'

      this.instrument = payload.instrument
      this.instrumentMap = Func.selectInstrument(
        this.instrument,
        this.instruments
      )

      // getting audios
      this.sampler = Func.getAudios(this.instrumentMap)

      // getting form data

      this.settings = Func.getData(payload, this.settings, this.lessons)

      this.startTraining()
    },

    // Main Method
    startTraining() {
      // suffling Deck
      this.suffledDeck = Func.generateExercise(
        this.deck,
        this.settings.firstFinger
      )

      // generating audios sequence
      this.tempo = Func.convertBpmToMs(this.settings.bpm)
      this.settings.release = Func.calculateRelease(this.tempo)
      this.sequence = Func.generateSequence(
        this.settings,
        this.suffledDeck,
        this.instrumentMap,
        this.sampler
      )

      // preparing lesson screen
      this.currentCard = this.suffledDeck[0]
      this.nextCard = this.suffledDeck[1]

      this.lengthSuffledDeck = this.suffledDeck.length
      this.preCount = this.currentCard.fragments.length

      // starting practice
      this.timer = setInterval(this.play, this.tempo)
      this.isVisibleButtonStop = false
    },

    play() {
      const lengthValue = this.currentCard.value.length - 1
      this.sendSequence()
      this.sequence.start()
      this.isVisibleButtonStop = true

      if (this.preCount > 0) {
        this.score = `Iniciando em <br /><b>${this.preCount}!</b>`

        this.preCount = this.preCount - 1
      } else if (this.iCard <= this.lengthSuffledDeck) {
        this.score = `<b>Executando<br /></b>...`

        if (this.swapCard) {
          this.iCard = this.startAnimateCards(this.iCard)

          this.iValue = 0
        }

        this.iValue = this.startAnimateValues(this.iValue, this.iCard)

        if (this.iValue > lengthValue) {
          this.swapCard = true
        } else {
          this.swapCard = false
        }
      }
    },

    startAnimateCards(iCard) {
      iCard++
      const next = iCard + 1
      this.prevCard = this.currentCard
      this.currentCard = this.nextCard
      next < this.lengthSuffledDeck
        ? (this.nextCard = this.suffledDeck[next])
        : (this.nextCard = {})
      this.suffledDeck[this.iCard].isPastCard = true
      this.suffledDeck[this.iCard].isCurrentCard = false

      return iCard
    },

    startAnimateValues(iValue, iCard) {
      if (iCard === this.lengthSuffledDeck) {
        const prevCardLenght = this.prevCard.width - 1
        this.prevCard.fragments[prevCardLenght].isHighlight = false

        this.score = 'Lição<br />finalizada!'
        clearInterval(this.timer)
      } else {
        this.suffledDeck[this.iCard].isFutureCard = false
        this.suffledDeck[this.iCard].isCurrentCard = true
        const fragmentCurrent = this.currentCard.fragments[iValue]
        let fragmentPrev = null

        if (iCard > 0 && iValue === 0) {
          const lastIndexPrev = this.prevCard.width - 1
          fragmentPrev = this.prevCard.fragments[lastIndexPrev]

          this.prevCard.fragments[lastIndexPrev].isHighlight = false
        }

        if (iValue !== 0) {
          fragmentPrev = this.currentCard.fragments[iValue - 1]
          fragmentPrev.isHighlight = false
        }
        fragmentCurrent.isHighlight = true
        iValue++
        return iValue
      }
    },

    sendSequence() {
      this.$emit('sequence', this.sequence)
    },

    stop(isResetRouter) {
      if (this.sequence != null) {
        clearInterval(this.timer)
        this.sequence.stop()
        this.isVisibleButtonStop = false
        this.score = 'Aguardando<br />...'
        this.prevCard = {}
        this.currentCard = {}
        this.nextCard = {}
        this.suffledDeck.length = 0
        this.isVisibleButtonPlay = true
      }
      if (isResetRouter) {
        this.$router.go()
      }
    },
    sendPropsHideFooter() {
      this.$emit('props', {
        hideFooter: true,
      })
    },
  },
}
</script>

<style>
b-button {
  width: 45px;
  height: 45px;
}

.bg-exercise-screen {
  background-color: var(--bg-nav);
}

#sidebar-menu {
  background-color: rgba(0, 0, 0, 0.7) !important;
  font-family: 'Encode Sans';
  font-weight: var(--font-semi-bold);
}

#menu-button {
  color: var(--font-color-p);
}
#menu-button:hover {
  color: rgba(255, 255, 255, 0.7);
}

.exercise-nav {
  background-color: rgba(255, 255, 255, 0.1);
}

.exercise-screen {
  justify-content: center;
}

.sidebar-menu-enabled {
  display: flex !important;
}

.sidebarMenuDisabled {
  display: none !important;
}

.b-sidebar-body {
  display: flex !important;
  align-items: center !important;
}
.close {
  color: white;
}
.close:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
