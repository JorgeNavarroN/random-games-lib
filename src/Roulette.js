const RandomGame = require("./RandomGame");

class Roulette extends RandomGame {
  constructor(options) {
    super();
    this.options = options;
  }

  spinRandom() {
    const index = RandomGame.generateRandomNumber(0, this.options.length - 1);
    return this.options[index];
  }

  spinProbabilities(...probabilities) {
    if (probabilities.length === 0) {
      return this.spinRandom();
    }

    if (probabilities.length !== this.options.length) {
      throw new Error("Probabilities must have the same length as options");
    }

    let total = 0;
    for (const prob of probabilities) {
      if (prob < 0 || prob > 100) {
        throw new Error("Each probability must be between 0 and 100");
      }
      total += prob;
    }

    if (total !== 100) {
      throw new Error("Probabilities must sum 100");
    }

    let cumulativeProbability = 0;
    for (let i = 0; i < this.options.length; i++) {
      cumulativeProbability += probabilities[i];
      if (RandomGame.generateRandomNumber(0, 100) < cumulativeProbability) {
        return this.options[i];
      }
    }
  }

  getOptions() {
    return this.options;
  }

  addOption(option) {
    this.options.push(option);
  }

  removeOption(option) {
    const index = this.options.indexOf(option);
    if (index >= 0) this.options.splice(index, 1);
  }

  clearOptions() {
    this.options = [];
  }

  getOptionsLength() {
    return this.options.length;
  }

  static create(options) {
    return new Roulette(options);
  }

  static createEmpty() {
    return new Roulette([]);
  }
}

module.exports = Roulette;
