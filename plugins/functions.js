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
  allStringsConfig(settings) {
    switch (settings.stringNumber) {
      case 'allUp':
        settings.stringNumber = 6
        settings.allStrings = true
        break
      case 'allDown':
        settings.stringNumber = 1
        settings.allStrings = true
        break
    }
    return settings
  },
  // changing string
  changingString(settings) {
    switch (settings.stringNumber) {
      case 1:
        settings.direction = 'up'
        break
      case 6:
        settings.direction = 'down'
        break
      default:
        break
    }

    switch (settings.direction) {
      case 'down':
        settings.stringNumber--
        break
      case 'up':
        settings.stringNumber++
        break
      default:
        break
    }
    return settings
  },

  // generatting sequence
  generateSequence(suffledDeck, settings, sampler, instrumentMap) {
    // config if all strings enable
    settings = this.allStringsConfig(settings)

    const notes = ['C1', 'C0', 'C0', 'C0', 'C0']
    suffledDeck.forEach((card) => {
      if (settings.allStrings) {
        card.fragments.forEach((fragments) => {
          const fragment = fragments.fragment
          notes.push(this.getNotes(fragment, instrumentMap, settings))
        })
        // changing string
        settings = this.changingString(settings)
      } else {
        card.fragments.forEach((fragments) => {
          const fragment = fragments.fragment
          notes.push(this.getNotes(fragment))
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
}
