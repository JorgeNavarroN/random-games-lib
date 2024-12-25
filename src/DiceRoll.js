const RandomGame = require("./RandomGame.js");

class DiceRoll extends RandomGame {
  constructor(sides = 6) {
    super();
    this.sides = sides;
  }

  roll(times = 1) {
    if (times < 1) throw new Error("You must roll the dice at least once.");
    if (times === 1) return RandomGame.generateRandomNumber(1, this.sides);

    let rolls = [];
    for (let i = 0; i < times; i++) {
      rolls.push(RandomGame.generateRandomNumber(1, this.sides));
    }
    return rolls;
  }
}

module.exports = DiceRoll;
