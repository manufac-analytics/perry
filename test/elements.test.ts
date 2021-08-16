import { ElementDictionary } from "../src/data/elements";
import { Phases, Phase } from "../src/interfaces/element-props";

function checkUrl(url?: string): boolean {
  let isUrl = false;
  if (typeof url === "string") {
    try {
      new URL(url);
      isUrl = true;
    } catch (e) {}
  }
  return isUrl;
}

function checkPhase(phase: Phase): boolean {
  return Object.values(Phases).includes(phase);
}

describe("Periodic Table Elements", () => {
  it("should return true for correct URL of source", () => {
    for (let el in ElementDictionary) {
      expect(checkUrl(ElementDictionary[el].source)).toBe(true);
    }
  });

  it("should return true for correct URL of Spectral Image", () => {
    for (let el in ElementDictionary) {
      expect(checkUrl(ElementDictionary[el].spectralImage)).toBe(
        typeof ElementDictionary[el].spectralImage === "string"
      );
    }
  });

  it("should return true if the phase is among Gas, Liquid or Solid", () => {
    for (let el in ElementDictionary) {
      expect(checkPhase(ElementDictionary[el].phase)).toBe(true);
    }
  });
});
