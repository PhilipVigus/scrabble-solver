class Scrabble {
  constructor(word) {
    this.word = word.toUpperCase();
  }

  score() {
    let total = 0;

    for (let letter of this.word) {
      total += letterScores[letter];
    }
    return total;
  }
}

const letterScores = {
  A: 1,
  E: 1,
  F: 4,
  R: 1,
  S: 1,
  T: 1,
};

export default Scrabble;
