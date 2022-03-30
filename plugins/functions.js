// Math Functions

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
}
