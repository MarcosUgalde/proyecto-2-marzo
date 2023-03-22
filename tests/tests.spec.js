describe('"Pokemon Go" mini game', () => {
  describe("Pokemon class", () => {
    it('should exist a variable named "Pokemon"', () => {
      expect(Pokemon).not.toBe(undefined);
    });

    it("should be a function", () => {
      expect(typeof Pokemon).toEqual("function");
    });
    it("should receive two parameters and both should be strings", () => {
      const pokemon = new Pokemon();
      expect(typeof pokemon.name).toEqual("string");
      expect(typeof pokemon.type).toEqual("string");
    });
    it("should have two parameters that have the same value than the ones received into the constructor", () => {
      const pokemon = new Pokemon("name", "type");

      expect(pokemon.name).toEqual("name");
      expect(pokemon.type).toEqual("type");
    });
    it("should receive a third parameter and its value should be a number", () => {
      const pokemon = new Pokemon();

      expect(typeof pokemon.number).toEqual("number");
    });

    it("should receive a third parameter and its value should be the same than the one received into the constructor", () => {
      const pokemon = new Pokemon("name", "type", "number");

      expect(pokemon.number).toEqual("number");
    });
  });
});
