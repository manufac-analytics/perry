import { ElementDictionary } from "../src/data/elements";
import { Phases, Phase } from "../src/interfaces/element-props";

function checkUrl(url: string): boolean {
  let isUrl = true;
  try {
    new URL(url);
  } catch (e) {
    isUrl = false;
  }
  return isUrl;
}

function checkPhase(phase: Phase): boolean {
  return Object.values(Phases).includes(phase);
}

describe("Periodic Table Elements", () => {
  const elements: string[] = Object.keys(ElementDictionary);
  it("should return true for correct URL of source", () => {
    for (let el of elements) {
      expect(checkUrl(ElementDictionary[el].source)).toBe(true);
    }
  });
  it("should return true for correct URL of Spectral Image", () => {
    for (let el of elements) {
      if (typeof ElementDictionary[el].spectralImage === "string") {
        expect(checkUrl(ElementDictionary[el].spectralImage as string)).toBe(true);
      }
    }
  });
  it("should return true for correct URL of Spectral Image", () => {
    for (let el of elements) {
      if (typeof ElementDictionary[el].spectralImage !== "string") {
        expect(checkUrl(ElementDictionary[el].spectralImage as string)).toBe(false);
      }
    }
  });
  it("should return false if the phase is among Gas , Liquid or Solid", () => {
    for (let el of elements) {
      expect(checkPhase(ElementDictionary[el].phase)).toBe(true);
    }
  });
});
