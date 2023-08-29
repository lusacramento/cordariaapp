// Functions.js
// This module contains the functions and methods used to run the application.

// Math Functions
import * as Tone from 'tone' // to play the audios

export default {
  // converting beats per minute for miliseconds
  convertBpmToMs(bpm) {
    const newTempo = 60000 / bpm
    return newTempo
  },

  // adjusting release (audio)
  calculateRelease(tempo) {
    const adjustSync = 1.1 // <-- ajust here the release duration for legattos notes
    const release = (tempo / 1000) * adjustSync
    return release
  },

  // auxiliary function to suffle cards
  sortIndex(max) {
    const min = Math.ceil(0)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  // end Math functions

  // Exercises Functions
  // selecting instrument
  selectInstrument(instrument, instruments) {
    let instrumentMap = {}
    switch (instrument) {
      case 'acoustic-guitar':
        instrumentMap = instruments.acousticGuitar
        break
      case 'eletric-guitar':
        instrumentMap = instruments.eletricGuitar
        break
      case 'cavaco':
        instrumentMap = instruments.cavaco
        break
      case 'bass':
        instrumentMap = instruments.bass
        break
      default:
        break
    }
    return instrumentMap
  },

  // getting audios

  getAudios(instrumentMap) {
    // starting Audio library

    if (Tone.context.state !== 'running') {
      Tone.context.resume()
    }

    const urls = {}
    for (const iString in instrumentMap) {
      const fret = instrumentMap[iString]
      fret.forEach((element) => {
        urls[element.note] = `${element.tablature}.mp3`
      })
    }

    const instrumentUrl = instrumentMap[0][0].baseUrl
    const sampler = new Tone.Sampler({
      urls,
      baseUrl: instrumentUrl,
      onload: () => {
        this.isLoaded = true
      },
    }).toDestination()

    return sampler
  },

  // getting Data
  getData(payload, settings, lessons) {
    payload.view === 'mobile'
      ? (settings.isMobile = true)
      : (settings.isMobile = false)

    settings.lesson = payload.lesson

    if (payload.lesson !== 0) {
      const lesson = payload.lesson.toString()
      settings.firstFinger = lessons[lesson].firstFinger
      settings.stringNumber = lessons[lesson].stringNumber
      settings.bpm = lessons[lesson].bpm
    } else {
      settings.firstFinger = payload.firstFinger
      settings.stringNumber = payload.stringNumber
      settings.bpm = payload.bpm
    }
    return settings
  },

  // setting case if all strings is selected.
  configAllStrings(settings, stringsNumber) {
    switch (settings.stringNumber) {
      case 'fromBassToTreble':
        settings.stringNumber = stringsNumber
        settings.direction = 'down'
        break
      case 'fromTrebleToBass':
        settings.stringNumber = 1
        settings.direction = 'up'
        break
      default:
    }
    return settings
  },
  // changing string
  changingString(settings, stringsNumber) {
    if (settings.direction === 'down') {
      settings.stringNumber--
    } else {
      settings.stringNumber++
    }

    if (
      (settings.stringNumber === 1 && stringsNumber === 4) ||
      (settings.stringNumber === 1 && stringsNumber === 6)
    ) {
      settings.direction = 'up'
    }
    if (
      (settings.stringNumber === 4 && stringsNumber === 4) ||
      (settings.stringNumber === 6 && stringsNumber === 6)
    ) {
      settings.direction = 'down'
    }

    return settings
  },

  // generatting sequence
  generateSequence(settings, deck, instrumentMap, sampler) {
    const stringsNumber = instrumentMap[0][0].stringsNumber

    // config if all strings enable
    if (
      settings.stringNumber === 'fromBassToTreble' ||
      settings.stringNumber === 'fromTrebleToBass'
    ) {
      settings.allStrings = true
      settings = this.configAllStrings(settings, stringsNumber)
    }

    const notes = ['C1', 'C0', 'C0', 'C0', 'C0']
    deck.forEach((card) => {
      if (settings.allStrings) {
        card.fragments.forEach((fragments) => {
          const fragment = fragments.fragment
          const note = this.getNotes(fragment, instrumentMap, settings)
          notes.push(note)
        })
        // changing string
        settings = this.changingString(settings, stringsNumber)
      } else {
        card.fragments.forEach((fragments) => {
          const fragment = fragments.fragment
          notes.push(this.getNotes(fragment, instrumentMap, settings))
        })
      }
    })

    const seq = new Tone.Sequence(
      (time, note) => {
        sampler.triggerAttackRelease(note, settings.release, time)
      },
      notes,
      '4n'
    )
    seq.loop = false
    Tone.Transport.bpm.value = settings.bpm
    Tone.Transport.start()
    return seq
  },

  getNotes(fragment, instrumentMap, settings) {
    const fret = fragment
    let note = null
    const strings = instrumentMap[settings.stringNumber]
    const tablature = settings.stringNumber + fret

    note = strings[fret][tablature]
    return note
  },

  // selecting  first finger
  filterFinger(firstFinger) {
    return function filter(finger) {
      // convert number values of string values
      const value = finger.value[0].toString()
      const filter = firstFinger.toString()
      return value === filter
    }
  },

  // generating visual cards
  generateExercise(deck, firstFinger) {
    let shadowDeck = deck.slice()
    for (let i = shadowDeck.length; i > 0; i--) {
      const sortedIndex = this.sortIndex(i)
      const card = shadowDeck[sortedIndex]
      shadowDeck.push(card)
      shadowDeck.splice(sortedIndex, 1)
    }

    shadowDeck = shadowDeck.filter(this.filterFinger(firstFinger))

    return shadowDeck
  },
}
