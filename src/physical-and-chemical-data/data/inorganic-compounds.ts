import { PhysicalProperties } from '../interfaces/physical-properties';
import { SolubilityNature } from '../interfaces/solubility';
import { SpecificGravityReference } from '../interfaces/specific-gravity';
import { Adjectives, Colors, CrystallineForms } from '../interfaces/utils';

export const InorganicCompounds: Record<string, PhysicalProperties> = {
  Aluminum: {
    name: 'Aluminum',
    formula: 'Al',
    formulaWeight: 26.98,
    color: { nature: Colors.Silver },
    crystallineForms: {
      nature: CrystallineForms.Cubic,
    },
    specificGravity: {
      value: 2.7,
      substanceTemperature: {
        value: 20,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      HCl: {
        nature: SolubilityNature.Soluble,
      },
      H2SO4: {
        nature: SolubilityNature.Soluble,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  NormalAluminumAcetate: {
    name: 'Aluminum acetate (normal)',
    formula: 'Al(C2H3O2)3',
    formulaWeight: 204.11,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Powder,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
      },
      hotWater: {
        nature: SolubilityNature.Decomposes,
      },
    },
  },

  BasicAluminumAcetate: {
    name: 'Aluminum acetate (basic)',
    formula: 'Al(OH)(C2H3O2)2',
    formulaWeight: 162.08,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Amorphous,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Soluble,
      },
      NH4Salts: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  AluminumBromide: {
    name: 'Aluminum bromide',
    formula: 'AlB3',
    formulaWeight: 266.69,
    crystallineForms: {
      nature: CrystallineForms.Trigonal,
    },
    specificGravity: {
      value: 3.01,
      substanceTemperature: {
        value: 25,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
      },
      acetone: {
        nature: SolubilityNature.Soluble,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  HydratedAluminumBromide: {
    name: 'Aluminum bromide',
    formula: 'AlBr3.6H2O',
    formulaWeight: 374.78,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.DeliquescentCrystal,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  AluminumCarbide: {
    name: 'Aluminum carbide',
    formula: 'Al4C3',
    formulaWeight: 143.96,
    color: { nature: Colors.Yellow },
    crystallineForms: {
      nature: CrystallineForms.Hexagonal,
    },
    refractiveIndex: { value: 2.7 },
    specificGravity: {
      value: 2.95,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Decomposes,
        decomposesTo: 'CH4',
      },
      acid: {
        nature: SolubilityNature.Soluble,
      },
      acetone: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  AluminumChloride: {
    name: 'Aluminum chloride',
    formula: 'AlCl3',
    formulaWeight: 133.34,
    color: { nature: Colors.White },
    crystallineForms: [
      {
        nature: CrystallineForms.Deliquescent,
      },
      {
        nature: CrystallineForms.Hexagonal,
      },
    ],
    specificGravity: {
      value: 2.44,
      substanceTemperature: {
        value: 25,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        value: 69.87,
        temperature: {
          value: 15,
          units: 'C',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.SolubleDecomposes,
      },
      ethylEther: {
        nature: SolubilityNature.Soluble,
      },
      chloroform: {
        nature: SolubilityNature.Soluble,
      },
      CCl4: {
        nature: SolubilityNature.Soluble,
      },
      benzene: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  HydratedAluminumChloride: {
    name: 'Aluminum chloride',
    formula: 'AlCl3.6H2O',
    formulaWeight: 241.43,
    color: { nature: Colors.Colorless },
    crystallineForms: [
      {
        nature: CrystallineForms.Deliquescent,
      },
      {
        nature: CrystallineForms.Trigonal,
      },
    ],
    refractiveIndex: { value: 1.56 },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        value: 400,
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Very,
      },
      ethylAlcohol50percent: {
        nature: SolubilityNature.Soluble,
      },
      ethylEther: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  FluelliteAluminumFluoride: {
    name: 'Aluminum fluoride (fluellite)',
    formula: 'AlF3.H20',
    formulaWeight: 101.99,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Rhombic,
    },
    refractiveIndex: { value: 1.49 },
    specificGravity: {
      value: 2.17,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Slightly,
      },
    },
  },

  AluminumFluoride: {
    name: 'Aluminum fluoride',
    formula: 'Al2F6.7H2O',
    formulaWeight: 294.06,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.CrystallinePowder,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Slightly,
      },
    },
  },

  AluminumHydroxide: {
    name: 'Aluminum hydroxide',
    formula: 'Al(OH)3',
    formulaWeight: 78.0,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Monoclinic,
    },
    specificGravity: {
      value: 2.42,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        value: 0.000104,
        temperature: {
          value: 18,
          units: 'C',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Soluble, // acid is given in both soluble and insoluble
      },
      alkali: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  AluminumNitrate: {
    name: 'Aluminum nitrate',
    formula: 'Al(NO3)3.9H2O',
    formulaWeight: 375.13,
    crystallineForms: [
      {
        nature: CrystallineForms.Rhombic,
      },
      {
        nature: CrystallineForms.Deliquescent,
      },
    ],
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Very,
      },
      hotWater: {
        nature: SolubilityNature.SolubleDecomposes,
        adjective: Adjectives.Very,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  AluminumNitride: {
    name: 'Aluminum nitride',
    formula: 'Al2N2',
    formulaWeight: 81.98,
    color: { nature: Colors.Yellow },
    crystallineForms: {
      nature: CrystallineForms.Hexagonal,
    },
    specificGravity: {
      value: 3.05,
      substanceTemperature: {
        value: 25,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Decomposes,
        adjective: Adjectives.Slowly,
      },
      alkali: {
        nature: SolubilityNature.SolubleDecomposes,
      },
    },
  },

  AluminumOxide: {
    name: 'Aluminum oxide',
    formula: 'Al2O3',
    formulaWeight: 101.96,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Hexagonal,
    },
    refractiveIndex: { min: { value: 1.67 }, max: { value: 8 } },
    specificGravity: {
      value: 3.99,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.VerySlightly,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.VerySlightly,
      },
    },
  },

  CorundumAluminumOxide: {
    name: 'Aluminum oxide (corundum)',
    formula: 'Al2O3',
    formulaWeight: 101.96,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Trigonal,
    },
    refractiveIndex: { value: 1.768 },
    specificGravity: {
      value: 4.0,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.VerySlightly,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.VerySlightly,
      },
    },
  },

  AluminumPhosphate: {
    name: 'Aluminum phosphate',
    formula: 'AlPO4',
    formulaWeight: 121.95,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Hexagonal,
    },
    specificGravity: {
      value: 2.59,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Soluble,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
      },
      aceticAcid: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  MuscoviteAluminumPottasiumSilicate: {
    name: 'Aluminum potassium silicate (muscovite)',
    formula: '3Al2O3.K2O.6SiO2.2H2O',
    formulaWeight: 796.61,
    crystallineForms: {
      nature: CrystallineForms.Monoclinic,
    },
    refractiveIndex: { value: 1.59 },
    specificGravity: {
      value: 2.9,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  OrthoClaseAluminumPottasiumSilicate: {
    name: 'Aluminum potassium silicate (orthoclase)',
    formula: 'Al2O3.K2O.6SiO2',
    formulaWeight: 556.66,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Monoclinic,
    },
    refractiveIndex: { value: 1.524 },
    specificGravity: {
      value: 2.56,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },
  AluminumPottasiumTartrate: {
    name: 'Aluminum potassium tartrate',
    formula: 'AlK(C4H4O6)2',
    formulaWeight: 362.22,
    color: { nature: Colors.Colorless },
    // Does not have crystalline form in the table
    refractiveIndex: { value: 1.59 },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  AluminumSodiumFlouride: {
    name: 'Aluminum sodium fluoride (cryolite)',
    formula: 'AlF3.3NaF',
    formulaWeight: 209.94,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Monoclinic,
    },
    refractiveIndex: { value: 1.3389 },
    specificGravity: {
      value: 2.9,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Slightly,
      },
      HCl: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  AluminumSodiumSilicate: {
    name: 'Aluminum sodium silicate ',
    formula: 'Al2O3.Na2O.6SiO2',
    formulaWeight: 524.44,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Trigonal,
    },
    refractiveIndex: { value: 1.529 },
    specificGravity: {
      value: 2.61,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
      },
      acid: {
        nature: SolubilityNature.Decomposes,
      },
    },
  },

  AluminumSulfate: {
    name: 'Aluminum sulfate ',
    formula: 'Al2(SO4)3',
    formulaWeight: 342.15,
    color: { nature: Colors.White },
    crystallineForms: {
      nature: CrystallineForms.Crystalline,
    },
    refractiveIndex: { value: 1.529 },
    specificGravity: {
      value: 2.71,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        value: 31.3,
        temperature: {
          value: 0,
          units: 'C',
        },
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        value: 89,
        temperature: {
          value: 100,
          units: 'C',
        },
      },
    },
  },

  Alum: {
    name: 'Alum, ammonium (tschermigite)',
    formula: 'Al2(SO4)3.(NH4)2SO4.',
    formulaWeight: 906.66,
    color: { nature: Colors.Colorless },
    crystallineForms: {
      nature: CrystallineForms.Octahedral,
    },
    refractiveIndex: { value: 1.4594 },
    specificGravity: {
      value: 1.64,
      substanceTemperature: {
        value: 20,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        value: 3.9,
        temperature: {
          value: 0,
          units: 'C',
        },
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        value: Infinity,
        temperature: {
          value: 100,
          units: 'C',
        },
      },
      acid: {
        nature: SolubilityNature.Decomposes,
      },
    },
  },

  AmmoniumChrome: {
    name: 'ammonium chrome',
    formula: 'Cr2(SO4)3.(NH4)2SO4.24H2O',
    formulaWeight: 956.69,
    color: [
      {
        nature: Colors.Green, // Color is given Green or Violet Please see if you like this structure or suggest something else
      },
      {
        nature: Colors.Violet,
      },
    ],
    crystallineForms: {
      nature: CrystallineForms.Octahedral,
    },
    refractiveIndex: { value: 1.4842 },
    specificGravity: {
      value: 1.72,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        value: 21.2,
        temperature: {
          value: 25,
          units: 'C',
        },
        gas: false,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
      },
    },
  },

  AmmoniumIron: {
    name: 'ammonium iron',
    formula: 'Fe2(SO4)3.(NH4)2SO4⋅24H2O',
    formulaWeight: 964.38,
    color: {
      nature: Colors.Violet,
    },
    crystallineForms: {
      nature: CrystallineForms.Octahedral,
    },
    refractiveIndex: { value: 1.485 },
    specificGravity: {
      value: 1.71,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        value: 124,
        temperature: {
          value: 25,
          units: 'C',
        },
        gas: false,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  AmmoniumPotassium: {
    name: 'ammonium potassium (kalnite)',
    formula: 'Al2(SO4)3.K2SO4.24H2O',
    formulaWeight: 948.78,
    color: {
      nature: Colors.Colorless,
    },
    crystallineForms: {
      nature: CrystallineForms.Monoclinic,
    },
    refractiveIndex: { value: 1.4564 },
    specificGravity: {
      value: 1.76,
      substanceTemperature: {
        value: 26,
        units: 'C',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        value: 5.7,
        temperature: {
          value: 0,
          units: 'C',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        value: Infinity,
        temperature: {
          value: 93,
          units: 'C',
        },
        gas: false,
      },
    },
  },

  AmmoniumPotassiumChrome: {
    name: 'ammonium potassium chrome',
    formula: 'Cr2(SO4)3.K2SO4.24H2O',
    formulaWeight: 998.81,
    color: [
      {
        nature: Colors.Red,
      },
      {
        nature: Colors.Green,
      },
    ],
    crystallineForms: {
      nature: CrystallineForms.Cubic,
    },
    refractiveIndex: { value: 1.4814 },
    specificGravity: {
      value: 1.83,
      reference: SpecificGravityReference.Water,
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        value: 20,
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        value: 50,
        gas: false,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },

  AmmoniumSodium: {
    name: 'ammonium sodium',
    formula: 'Al2(SO4)3.Na2SO4.24H2O',
    formulaWeight: 916.56,
    color: {
      nature: Colors.Colorless,
    },
    crystallineForms: {
      nature: CrystallineForms.Octahedral,
    },
    refractiveIndex: { value: 1.4388 },
    specificGravity: {
      value: 1.675,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        value: 106.4,
        temperature: {
          value: 0,
          units: 'C',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        value: 121.7,
        temperature: {
          value: 45,
          units: 'C',
        },
        gas: false,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Insoluble,
      },
    },
  },
};
