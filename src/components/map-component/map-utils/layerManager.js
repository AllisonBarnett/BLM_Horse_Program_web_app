import DeckMap from './DeckMap'

export default {
  layers: {},
  deckInstance: null,
  init (deckProps) {
    this.deckInstance = new DeckMap(deckProps)
  },

  updateDeckInstance () {
    if (!this.deckInstance) {
      return
    }
    const layers = [...Object.values(this.layers)];
    if (this.deckInstance) {
    this.deckInstance.setProps({ layers })
    }
  }
}