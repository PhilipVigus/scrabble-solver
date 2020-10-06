class Scrabble {
  constructor(word) {
    this.word = word.toUpperCase();
  }

  score() {
    return letterScores[this.word];
  }
}

const letterScores = {
  A: 1,
  F: 4,
};

export default Scrabble;
