const cardDeck = require("./mocks/cardDeck.json");

class CardDeck {
  constructor() {
    this.hearts = cardDeck[0].cards;
    this.diamonds = cardDeck[1].cards;
    this.clovers = cardDeck[2].cards;
    this.spades = cardDeck[3].cards;

    this.cards = [
      ...this.hearts,
      ...this.diamonds,
      ...this.clovers,
      ...this.spades,
    ];
  }

  shuffle() {
    return this.cards.sort(() => Math.random() - 0.5);
  }

  drawCard(mount) {
    if (mount < 1) throw new Error("You must draw at least one card.");
    if (mount === 1) return this.cards.pop();

    let cards = [];
    for (let i = 0; i < mount; i++) {
      cards.push(this.cards.pop());
    }
    return cards;
  }

  drawCardFromSuit(suit, mount) {
    let cards = [];
    switch (suit) {
      case "hearts":
        for (let i = 0; i < mount; i++) {
          cards.push(this.hearts.pop());
        }
        break;
      case "diamonds":
        for (let i = 0; i < mount; i++) {
          cards.push(this.diamonds.pop());
        }
        break;
      case "clovers":
        for (let i = 0; i < mount; i++) {
          cards.push(this.clovers.pop());
        }
        break;
      case "spades":
        for (let i = 0; i < mount; i++) {
          cards.push(this.spades.pop());
        }
        break;
      default:
        throw new Error("Invalid suit.");
    }
    return cards;
  }

  getCards() {
    return this.cards;
  }

  getHearts() {
    return this.hearts;
  }

  getDiamonds() {
    return this.diamonds;
  }

  getClovers() {
    return this.clovers;
  }

  getSpades() {
    return this.spades;
  }

  getCardsCount() {
    return this.cards.length;
  }

  getHeartsCount() {
    return this.hearts.length;
  }

  getDiamondsCount() {
    return this.diamonds.length;
  }

  getCloversCount() {
    return this.clovers.length;
  }

  getSpadesCount() {
    return this.spades.length;
  }

  isCardsEmpty() {
    return this.cards.length === 0;
  }

  isHeartsEmpty() {
    return this.hearts.length === 0;
  }

  isDiamondsEmpty() {
    return this.diamonds.length === 0;
  }

  isCloversEmpty() {
    return this.clovers.length === 0;
  }

  isSpadesEmpty() {
    return this.spades.length === 0;
  }

  reset() {
    this.hearts = cardDeck[0].cards;
    this.diamonds = cardDeck[1].cards;
    this.clovers = cardDeck[2].cards;
    this.spades = cardDeck[3].cards;

    this.cards = [
      ...this.hearts,
      ...this.diamonds,
      ...this.clovers,
      ...this.spades,
    ];
  }
}

module.exports = CardDeck;
