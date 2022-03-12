<template>
  <div id="the-pratice" class="cordaria">
    <div class="exercise-nav container-fluid">
      <div class="row text-center layer-top align-items-center">
        <div class="col">
          <div
            class="mt-3 mb-4 d-flex justify-content-center align-items-center"
          >
            <b-button v-b-toggle.sidebar-menu variant="dark">Menu</b-button>
            <b-sidebar
              id="sidebar-menu"
              title="Menu"
              shadow
              bg-variant="dark"
              text-variant=""
              :visible="isEnabledMenu"
            >
              <div class="px-3 py-2">
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
            <h1 class="title mt-3 mb-4">{{ title }}</h1>
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
              :is-mobile="isMobile"
            />
          </div>
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
import * as Tone from 'tone' // to play the audios
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStop } from '@fortawesome/free-solid-svg-icons'

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
    const guitar = await $http.$get('./json/guitar.json')
    const cavaco = await $http.$get('./json/cavaco.json')
    const bass = await $http.$get('./json/bass.json')

    const tips = await $http.$get('./json/tips.json')

    return {
      lessons: lessons.lessons,
      deck: deck.deck,
      guitar: guitar.guitarMap,
      cavaco: cavaco.cavacoMap,
      bass: bass.bassMap,
      instrumentMap: null,
      tips: tips.tips,

      suffledDeck: null,
      isMobile: null,

      printLoad: '',

      // exercises
      instrument: null,
      lesson: null,
      firstFinger: null,
      stringNumber: '5',
      bpm: null,
      allString: false,
      direction: 'down',

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
      release: 1,
      adjustSync: 1.1,

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

      // starting Audio library
      if (Tone.context.state !== 'running') {
        Tone.context.resume()
      }
      this.isVisibleButtonPlay = false
      this.score = 'Carregando<br>...'

      // getting audios
      this.instrument = payload.instrument

      switch (this.instrument) {
        case 'guitar':
          this.instrumentMap = this.guitar
          break
        case 'cavaco':
          this.instrumentMap = this.cavaco
          break
        case 'bass':
          this.instrumentMap = this.bass
          break
        default:
          break
      }

      this.getAudios()

      // getting form data
      payload.view === 'mobile'
        ? (this.isMobile = true)
        : (this.isMobile = false)

      this.lesson = payload.lesson

      if (payload.lesson !== 0) {
        const lesson = payload.lesson.toString()
        this.firstFinger = this.lessons[lesson].firstFinger
        this.stringNumber = this.lessons[lesson].stringNumber
        this.bpm = this.lessons[lesson].bpm
      } else {
        this.firstFinger = payload.firstFinger
        this.stringNumber = payload.stringNumber
        this.bpm = payload.bpm
      }

      this.printLoad = 'CONFIGURAÇÃO DESTE EXERCÍCIO'

      this.startTraining()
    },

    // Main Method
    startTraining() {
      // suffling Deck
      this.suffledDeck = this.generateExercise()

      this.printLoad = 'Baralho embaralhado!'

      // generating audios sequence
      this.tempo = this.convertBpmToMs()
      this.release = this.calculateRelease()
      this.sequence = this.generateSequence()

      // preparing lesson screen
      this.currentCard = this.suffledDeck[0]
      this.nextCard = this.suffledDeck[1]

      this.lengthSuffledDeck = this.suffledDeck.length
      this.preCount = this.currentCard.fragments.length

      // starting practice
      this.timer = setInterval(this.play, this.tempo)
      this.isVisibleButtonStop = false
    },

    // adjusting release (audio)
    calculateRelease() {
      const release = (this.tempo / 1000) * this.adjustSync
      return release
    },

    // requiring Audio Files
    getAudios() {
      const urls = {}
      for (let iString = 0; iString < this.instrumentMap.length; iString++) {
        const fret = this.instrumentMap[iString]
        fret.forEach((element) => {
          urls[element.note] = `${element.tablature}.mp3`
        })
      }

      const instrumentUrl = this.instrumentMap[0][0].baseUrl
      this.sampler = new Tone.Sampler({
        urls,
        baseUrl: instrumentUrl,
        onload: () => {
          this.isLoaded = true
        },
      }).toDestination()
    },

    // requiring notes for generate sequence
    getNotes(fret) {
      let note = null
      const strings = this.instrumentMap[this.stringNumber]
      const tablature = this.stringNumber + fret
      note = strings[fret][tablature]
      return note
    },

    // changing string
    changingString() {
      if (this.stringNumber === 1) {
        this.direction = 'up'
      }
      if (this.direction === 'down') {
        this.stringNumber--
      }
      if (this.direction === 'up') {
        this.stringNumber++
      }
      if (this.stringNumber === 6) {
        this.direction = 'down'
      }
    },

    // generating audio sequence
    generateSequence() {
      switch (this.stringNumber) {
        case 'allUp':
          this.stringNumber = 6
          this.allString = true
          break
        case 'allDown':
          this.stringNumber = 1
          this.allString = true
          break
      }

      const notes = ['C1', 'C0', 'C0', 'C0', 'C0']
      this.suffledDeck.forEach((card) => {
        if (this.allString) {
          card.fragments.forEach((fragments) => {
            const fragment = fragments.fragment
            notes.push(this.getNotes(fragment))
          })
          this.changingString()
        } else {
          card.fragments.forEach((fragments) => {
            const fragment = fragments.fragment
            notes.push(this.getNotes(fragment))
          })
        }
      })

      const seq = new Tone.Sequence(
        (time, note) => {
          this.sampler.triggerAttackRelease(note, this.release, time)
        },
        notes,
        '4n'
      )
      seq.loop = false
      Tone.Transport.bpm.value = this.bpm
      Tone.Transport.start()
      return seq
    },

    // selecting  first finger
    filterFinger(finger) {
      // let startFinger = this.startFinger;ns
      return finger.value[0] === `${this.firstFinger}`
    },

    // generating visual cards
    generateExercise() {
      let shadowDeck = this.deck.slice()
      for (let i = shadowDeck.length; i > 0; i--) {
        const sortedIndex = this.sortIndex(i)
        const card = shadowDeck[sortedIndex]
        shadowDeck.push(card)
        shadowDeck.splice(sortedIndex, 1)
      }

      shadowDeck = shadowDeck.filter(this.filterFinger)

      return shadowDeck
    },

    // auxiliary function to suffle cards
    sortIndex(max) {
      const min = Math.ceil(0)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
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
    // converting BPM to miliseconds
    convertBpmToMs() {
      const newTempo = 60000 / this.bpm
      return newTempo
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

<style scoped>
button {
  width: 45px;
  height: 45px;
}

.bg-exercise-screen {
  background-color: var(--bg-nav);
}

#sidebar-menu {
  background-color: var(--bg-layer-top) !important;
  font-family: 'Encode Sans';
  font-weight: var(--font-semi-bold);
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
</style>
