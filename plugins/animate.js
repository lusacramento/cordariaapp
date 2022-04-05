export default {
  startAnimateValues(
    iValue,
    iCard,
    lengthSuffledDeck,
    card,
    suffledDeck,
    score,
    timer
  ) {
    // test if end deck
    if (iCard === lengthSuffledDeck) {
      const lenghtPrevCard = card.prev.width - 1
      card.prev.fragments[lenghtPrevCard].isHighlight = false
      score = 'Lição<br />finalizada!'
      clearInterval(timer)
    } else {
      suffledDeck[iCard].isFutureCard = false
      suffledDeck[iCard].isCurrentCard = true
      const fragmentCurrent = card.current.fragments[iValue]
      let fragmentPrev = null

      if (iCard > 0 && iValue === 0) {
        const lastIndexPrev = card.prev.width - 1
        fragmentPrev = card.prev.fragments[lastIndexPrev]

        card.prev.fragments[lastIndexPrev].isHighlight = false
      }

      if (iValue !== 0) {
        fragmentPrev = card.current.fragments[iValue - 1]
        fragmentPrev.isHighlight = false
      }
      fragmentCurrent.isHighlight = true
      iValue++
      return iValue
    }
  },
}
