export default {
  startAnimateCards(iCard, card, suffledDeck, lengthSuffledDeck) {
    iCard++
    const next = iCard + 1
    card.prev = card.current
    card.current = card.next
    next < lengthSuffledDeck
      ? (card.next = suffledDeck[next])
      : (card.next = {})
    suffledDeck[iCard - 1].isPastCard = true
    suffledDeck[iCard - 1].isCurrentCard = false

    return iCard
  },

  startAnimateValues(
    iValue,
    iCard,
    lengthSuffledDeck,
    card,
    suffledDeck,
    score,
    finish
  ) {
    // test if end deck
    if (iCard === lengthSuffledDeck) {
      const lenghtPrevCard = card.prev.width - 1
      card.prev.fragments[lenghtPrevCard].isHighlight = false
      finish()
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
