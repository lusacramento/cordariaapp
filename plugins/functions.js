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
}
