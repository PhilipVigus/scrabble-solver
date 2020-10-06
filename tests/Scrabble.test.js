import Scrabble from "../src/Scrabble";

describe("Scrabble", () => {
  describe("score", () => {
    it("scores 1 for a", () => {
      const scrabble = new Scrabble("a");
      expect(scrabble.score()).toEqual(1);
    });
  });
});
