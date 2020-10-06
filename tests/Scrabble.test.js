import Scrabble from "../src/Scrabble";

describe("Scrabble", () => {
  describe("score", () => {
    it("scores 1 for a", () => {
      const scrabble = new Scrabble("a");
      expect(scrabble.score()).toEqual(1);
    });

    it("scores 4 for f", () => {
      const scrabble = new Scrabble("f");
      expect(scrabble.score()).toEqual(4);
    });

    it("scores 6 for street", () => {
      const scrabble = new Scrabble("street");
      expect(scrabble.score()).toEqual(6);
    });

    it("scores 22 for quirky", () => {
      const scrabble = new Scrabble("quirky");
      expect(scrabble.score()).toEqual(22);
    });
  });
});
