import { calculateDIPPRVaporPressure, DIPPRVaporPressureDictionary } from "../src/data/vapor-pressure-constants";
import { calculateDIPPRDensity, DIPPRDensityDictionary } from "../src/data/density-constants";
import {
  calculateDIPPRThermalConductivity,
  DIPPRThermalConductivityDictionary
} from "../src/data/thermal-conductivity-constants";
import {
  calculateDIPPRVaporThermalConductivity,
  DIPPRVaporThermalConductivityDictionary
} from "../src/data/vapor-thermal-conductivity-constants";

describe("calculateDIPPRVaporPressure", () => {
  it("should return NaN outside the specified range of temperature", () => {
    const vaporProps = DIPPRVaporPressureDictionary["Acetaldehyde"];
    expect(calculateDIPPRVaporPressure("Acetaldehyde", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporPressure("Acetaldehyde", vaporProps.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct vapor pressure at Tmin and Tmax", () => {
    const vaporProps = DIPPRVaporPressureDictionary["Acetaldehyde"];
    expect(calculateDIPPRVaporPressure("Acetaldehyde", vaporProps.minimumTemperature).toPrecision(3)).toBe(
      vaporProps.pressureAtMinimumTemperature.toPrecision(3)
    );
    expect(calculateDIPPRVaporPressure("Acetaldehyde", vaporProps.maximumTemperature).toPrecision(3)).toBe(
      vaporProps.pressureAtMaximumTemperature.toPrecision(3)
    );
  });

  it("should return correct vapor pressure at Tmin and Tmax for SulfurHexafluoride where C4 and C5 are missing", () => {
    const vaporProps = DIPPRVaporPressureDictionary["SulfurHexafluoride"];
    expect(calculateDIPPRVaporPressure("SulfurHexafluoride", vaporProps.minimumTemperature).toPrecision(3)).toBe(
      vaporProps.pressureAtMinimumTemperature.toPrecision(3)
    );
    expect(calculateDIPPRVaporPressure("SulfurHexafluoride", vaporProps.maximumTemperature).toPrecision(3)).toBe(
      vaporProps.pressureAtMaximumTemperature.toPrecision(3)
    );
  });
});

describe("calculateDIPPRDensity", () => {
  it("should return NaN outside the specified range of temperature", () => {
    const densityProps = DIPPRDensityDictionary["Acetaldehyde"];
    expect(calculateDIPPRDensity("Acetaldehyde", densityProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRDensity("Acetaldehyde", densityProps.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct density at Tmin and Tmax", () => {
    const densityProps = DIPPRDensityDictionary["Acetaldehyde"];
    expect(calculateDIPPRDensity("Acetaldehyde", densityProps.minimumTemperature)).toBeCloseTo(
      densityProps.densityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRDensity("Acetaldehyde", densityProps.maximumTemperature)).toBeCloseTo(
      densityProps.densityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for water", () => {
    const densityProps = DIPPRDensityDictionary["Water"];
    const densityPropsExtended = DIPPRDensityDictionary["WaterExtended"];
    expect(
      calculateDIPPRDensity(
        "Water",
        Math.min(densityProps.minimumTemperature, densityPropsExtended.minimumTemperature) - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRDensity(
        "Water",
        Math.max(densityProps.maximumTemperature, densityPropsExtended.maximumTemperature) + 1
      )
    ).toBe(NaN);
  });

  it("should return correct density at Tmin and Tmax for water", () => {
    const densityProps = DIPPRDensityDictionary["Water"];
    const densityPropsExtended = DIPPRDensityDictionary["WaterExtended"];
    expect(calculateDIPPRDensity("Water", densityProps.minimumTemperature)).toBeCloseTo(
      densityProps.densityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRDensity("Water", densityPropsExtended.maximumTemperature)).toBeCloseTo(
      densityPropsExtended.densityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for o-terphenyl", () => {
    const densityProps = DIPPRDensityDictionary["oTerphenyl"];
    const densityPropsExtended = DIPPRDensityDictionary["oTerphenylExtended"];
    expect(
      calculateDIPPRDensity(
        "oTerphenyl",
        Math.min(densityProps.minimumTemperature, densityPropsExtended.minimumTemperature) - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRDensity(
        "oTerphenyl",
        Math.max(densityProps.maximumTemperature, densityPropsExtended.maximumTemperature) + 1
      )
    ).toBe(NaN);
  });

  it("should return correct density at Tmin and Tmax for o-terphenyl", () => {
    const densityProps = DIPPRDensityDictionary["oTerphenyl"];
    const densityPropsExtended = DIPPRDensityDictionary["oTerphenylExtended"];
    expect(calculateDIPPRDensity("oTerphenyl", densityProps.minimumTemperature)).toBeCloseTo(
      densityProps.densityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRDensity("oTerphenyl", densityPropsExtended.maximumTemperature)).toBeCloseTo(
      densityPropsExtended.densityAtMaximumTemperature,
      3
    );
  });
});

describe("calculateDIPPRThermalConductivity", () => {
  it("should return NaN outside the specified range of temperature", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["Acetaldehyde"];
    expect(calculateDIPPRThermalConductivity("Acetaldehyde", (vaporProps.minimumTemperature as number) - 1)).toBe(NaN);
    expect(calculateDIPPRThermalConductivity("Acetaldehyde", (vaporProps.maximumTemperature as number) + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity at Tmin and Tmax", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["Acetaldehyde"];
    expect(
      calculateDIPPRThermalConductivity("Acetaldehyde", vaporProps.minimumTemperature as number).toPrecision(3)
    ).toBe((vaporProps.thermalConductivityAtMinimumTemperature as number).toPrecision(3));
    expect(
      calculateDIPPRThermalConductivity("Acetaldehyde", vaporProps.maximumTemperature as number).toPrecision(3)
    ).toBe((vaporProps.thermalConductivityAtMaximumTemperature as number).toPrecision(3));
  });

  it("should return NaN for undefined values of Tmin and Tmax for Nitrogen trifluoride", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["NitrogenTrifluoride"];
    expect(calculateDIPPRThermalConductivity("NitrogenTrifluoride", vaporProps.minimumTemperature as number)).toBe(NaN);
    expect(calculateDIPPRThermalConductivity("NitrogenTrifluoride", vaporProps.maximumTemperature as number)).toBe(NaN);
  });

  it("should return NaN outside the specified range of temperature for Nitrous oxide", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["NitrousOxide"];
    expect(calculateDIPPRThermalConductivity("NitrousOxide", (vaporProps.minimumTemperature as number) - 1)).toBe(NaN);
    expect(calculateDIPPRThermalConductivity("NitrousOxide", (vaporProps.maximumTemperature as number) + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity at Tmin and Tmax for Nitrous oxide", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["NitrousOxide"];
    expect(
      calculateDIPPRThermalConductivity("NitrousOxide", vaporProps.minimumTemperature as number).toPrecision(3)
    ).toBe((vaporProps.thermalConductivityAtMinimumTemperature as number).toPrecision(3));
    expect(
      calculateDIPPRThermalConductivity("NitrousOxide", vaporProps.maximumTemperature as number).toPrecision(3)
    ).toBe((vaporProps.thermalConductivityAtMaximumTemperature as number).toPrecision(3));
  });

  it("should return NaN for undefined values of Tmin and Tmax for Silicon Tetrafluoride", () => {
    const vaporProps = DIPPRThermalConductivityDictionary["SiliconTetrafluoride"];
    expect(calculateDIPPRThermalConductivity("SiliconTetrafluoride", vaporProps.minimumTemperature as number)).toBe(
      NaN
    );
    expect(calculateDIPPRThermalConductivity("SiliconTetrafluoride", vaporProps.maximumTemperature as number)).toBe(
      NaN
    );
  });
});

describe("calculateDIPPRVaporThermalConductivity", () => {
  const specialCompoundList = [
    "AceticAcid",
    "AceticAcidExtended1",
    "AceticAcidExtended2",
    "ButyricAcid",
    "ButyricAcidExtended",
    "FormicAcid",
    "FormicAcidExtended1",
    "FormicAcidExtended2",
    "HeptanoicAcid",
    "HeptanoicAcidExtended",
    "OctanoicAcid",
    "OctanoicAcidExtended",
    "PentanoicAcid",
    "PentanoicAcidExtended",
    "PropionicAcid",
    "PropionicAcidExtended"
  ];
  it("should return NaN outside the specified range of temperature", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["Acetaldehyde"];
    expect(calculateDIPPRVaporThermalConductivity("Acetaldehyde", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("Acetaldehyde", vaporProps.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity at Tmin and Tmax", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["Acetaldehyde"];
    expect(calculateDIPPRVaporThermalConductivity("Acetaldehyde", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("Acetaldehyde", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Acetic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["AceticAcid"];
    const vaporPropsExtended1 = DIPPRVaporThermalConductivityDictionary["AceticAcidExtended1"];
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporPropsExtended1.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity for Acetic Acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["AceticAcid"];
    const vaporPropsExtended1 = DIPPRVaporThermalConductivityDictionary["AceticAcidExtended1"];
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporPropsExtended1.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("AceticAcid", vaporPropsExtended1.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Butyric Acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["ButyricAcid"];
    const vaporPropsExtended1 = DIPPRVaporThermalConductivityDictionary["ButyricAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporPropsExtended1.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity for Butyric Acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["ButyricAcid"];
    const vaporPropsExtended1 = DIPPRVaporThermalConductivityDictionary["ButyricAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporPropsExtended1.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("ButyricAcid", vaporPropsExtended1.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Formic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["FormicAcid"];
    const vaporPropsExtended2 = DIPPRVaporThermalConductivityDictionary["FormicAcidExtended2"];
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporPropsExtended2.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity for Formic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["FormicAcid"];
    const vaporPropsExtended1 = DIPPRVaporThermalConductivityDictionary["FormicAcidExtended1"];
    const vaporPropsExtended2 = DIPPRVaporThermalConductivityDictionary["FormicAcidExtended2"];
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporPropsExtended1.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporPropsExtended1.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended1.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporPropsExtended2.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended2.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("FormicAcid", vaporPropsExtended2.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended2.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Heptanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["HeptanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["HeptanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporPropsExtended.maximumTemperature + 1)).toBe(
      NaN
    );
  });

  it("should return correct thermal conductivity for Heptanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["HeptanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["HeptanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporPropsExtended.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("HeptanoicAcid", vaporPropsExtended.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Octanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["OctanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["OctanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporPropsExtended.maximumTemperature + 1)).toBe(NaN);
  });

  it("should return correct thermal conductivity for Octanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["OctanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["OctanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporPropsExtended.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("OctanoicAcid", vaporPropsExtended.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Pentanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["PentanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["PentanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporPropsExtended.maximumTemperature + 1)).toBe(
      NaN
    );
  });

  it("should return correct thermal conductivity for Pentanoic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["PentanoicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["PentanoicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporPropsExtended.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PentanoicAcid", vaporPropsExtended.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature for Propionic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["PropionicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["PropionicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporProps.minimumTemperature - 1)).toBe(NaN);
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporPropsExtended.maximumTemperature + 1)).toBe(
      NaN
    );
  });

  it("should return correct thermal conductivity for Propionic acid", () => {
    const vaporProps = DIPPRVaporThermalConductivityDictionary["PropionicAcid"];
    const vaporPropsExtended = DIPPRVaporThermalConductivityDictionary["PropionicAcidExtended"];
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporProps.minimumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporProps.maximumTemperature)).toBeCloseTo(
      vaporProps.thermalConductivityAtMaximumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporPropsExtended.minimumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMinimumTemperature,
      3
    );
    expect(calculateDIPPRVaporThermalConductivity("PropionicAcid", vaporPropsExtended.maximumTemperature)).toBeCloseTo(
      vaporPropsExtended.thermalConductivityAtMaximumTemperature,
      3
    );
  });

  it("should return NaN outside the specified range of temperature", () => {
    for (let compound in DIPPRVaporThermalConductivityDictionary) {
      if (specialCompoundList.includes(compound) === false) {
        const vaporProps = DIPPRVaporThermalConductivityDictionary[compound];
        expect(calculateDIPPRVaporThermalConductivity(compound, vaporProps.minimumTemperature - 1)).toBe(NaN);
        expect(calculateDIPPRVaporThermalConductivity(compound, vaporProps.maximumTemperature + 1)).toBe(NaN);
      }
    }
  });

  it("should return correct thermal conductivity at Tmin and Tmax", () => {
    for (let compound in DIPPRVaporThermalConductivityDictionary) {
      if (specialCompoundList.includes(compound) === false) {
        const vaporProps = DIPPRVaporThermalConductivityDictionary[compound];
        expect(calculateDIPPRVaporThermalConductivity(compound, vaporProps.minimumTemperature)).toBeCloseTo(
          vaporProps.thermalConductivityAtMinimumTemperature,
          3
        );
        expect(calculateDIPPRVaporThermalConductivity(compound, vaporProps.maximumTemperature)).toBeCloseTo(
          vaporProps.thermalConductivityAtMaximumTemperature,
          3
        );
      }
    }
  });
});
