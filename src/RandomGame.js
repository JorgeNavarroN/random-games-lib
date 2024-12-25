class RandomGame {
  constructor() {
    this.number = 0;
  }

  static #randomNumber(min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateRandomNumber(min, max, save = false) {
    const random = RandomGame.#randomNumber(min, max);
    if (save) this.number = random;
    return random;
  }

  static guessNumber(guess) {
    return guess === this.number;
  }

  static getNumber() {
    return this.number;
  }
}

module.exports = RandomGame;
