import { PhysicalProperties } from '../interfaces/physical-properties';
import { SolubilityNature } from '../interfaces/solubility';
import { SpecificGravityReference } from '../interfaces/specific-gravity';
import { Adjectives, Colors, CrystallineForms } from '../interfaces/utils';

export const InorganicCompounds: Record<string, PhysicalProperties> = {
  Aluminum: {
    name: 'Aluminum',
    formula: 'Al',
    formulaWeight: 26.98,
    color: { nature: Colors.Silver, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Cubic,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 2.7,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      HCl: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      H2SO4: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  NormalAluminumAcetate: {
    name: 'Aluminum acetate (normal)',
    formula: 'Al(C2H3O2)3',
    formulaWeight: 204.11,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Powder,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Decomposes,
        adjective: Adjectives.Empty,
      },
    },
  },

  BasicAluminumAcetate: {
    name: 'Aluminum acetate (basic)',
    formula: 'Al(OH)(C2H3O2)2',
    formulaWeight: 162.08,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Amorphous,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      NH4Salts: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumBromide1: {
    name: 'Aluminum bromide',
    formula: 'AlB3',
    formulaWeight: 266.69,
    color: { nature: Colors.Empty, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Trigonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 3.01,
      substanceTemperature: {
        value: 25,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      acetone: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumBromide2: {
    name: 'Aluminum bromide',
    formula: 'AlBr3.6H2O',
    formulaWeight: 374.78,
    color: { nature: Colors.Colorless, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Crystalline, CrystallineForms.Deliquescent],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      ethylAlcohol95percent: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumCarbide: {
    name: 'Aluminum carbidde',
    formula: 'Al4C3',
    formulaWeight: 143.96,
    color: { nature: Colors.Yellow, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Hexagonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 2.7,
    specificGravity: {
      value: 2.95,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Decomposes,
        adjective: Adjectives.Empty,
        value: 'CH4',
        temperature: {
          value: NaN,
          units: 'C',
          error: 0,
          greaterOrLess: 'less',
        },
      },
      acid: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      acetone: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumChloride1: {
    name: 'Aluminum chloride',
    formula: 'AlCl3',
    formulaWeight: 133.34,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Deliquescent, CrystallineForms.Hexagonal],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 2.44,
      substanceTemperature: {
        value: 25,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
        value: 69.87,
        temperature: {
          value: 15,
          units: 'C',
          error: 0,
          greaterOrLess: 'exact',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.SolubleDecomposes,
        adjective: Adjectives.Empty,
      },
      ethyl: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      ether: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      chloroform: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      CCl4: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      benzene: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumChloride2: {
    name: 'Aluminum chloride',
    formula: 'AlCl3.6H2O',
    formulaWeight: 241.43,
    color: { nature: Colors.Colorless, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Deliquescent, CrystallineForms.Trigonal],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 1.56,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
        value: 400,
        temperature: {
          value: NaN,
          units: 'C',
          error: 0,
          greaterOrLess: 'exact',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Very,
      },
      ethylAlcohol50percent: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      chloroform: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      ethyl: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      ether: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumFluoride1: {
    name: 'Aluminum fluoride(fluellite)',
    formula: 'AlF3.H20',
    formulaWeight: 101.99,
    color: { nature: Colors.Colorless, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Rhombic, CrystallineForms.Hexagonal],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 1.49,
    specificGravity: {
      value: 2.17,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
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

  AluminumFluoride2: {
    name: 'Aluminum fluoride',
    formula: 'Al2F6.7H2O',
    formulaWeight: 294.06,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Crystalline, CrystallineForms.Powder],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
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
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Monoclinic,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 2.42,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
        value: 0.000104,
        temperature: {
          value: 18,
          units: 'C',
          error: 0,
          greaterOrLess: 'exact',
        },
        gas: false,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: SolubilityNature.Soluble, // acid is given in both soluble and insoluble
        adjective: Adjectives.Empty,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumNitrate: {
    name: 'Aluminum nitrate',
    formula: 'Al(NO3)3.9H2O',
    formulaWeight: 375.13,
    color: { nature: Colors.Empty, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Rhombic, CrystallineForms.Deliquescent],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: NaN,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
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
        adjective: Adjectives.Empty,
      },
      CS2: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumNitride: {
    name: 'Aluminum nitride',
    formula: 'Al2N2',
    formulaWeight: 81.98,
    color: { nature: Colors.Yellow, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Hexagonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 3.05,
      substanceTemperature: {
        value: 25,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 4,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
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
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumOxide1: {
    name: 'Aluminum oxide',
    formula: 'Al2O3',
    formulaWeight: 101.96,
    color: { nature: Colors.Colorless, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Hexagonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 1.67 - 8,
    specificGravity: {
      value: 3.99,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
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

  AluminumOxide2: {
    name: 'Aluminum oxide (corundum)',
    formula: 'Al2O3',
    formulaWeight: 101.96,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Trigonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 1.768,
    specificGravity: {
      value: 4.0,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
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
    color: { nature: Colors.Colorless, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: CrystallineForms.Hexagonal,
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 2.59,
      substanceTemperature: {
        value: 20,
        units: 'C',
        error: 5,
        greaterOrLess: 'less',
      },
      reference: SpecificGravityReference.Water,
      referenceTemperature: {
        value: 0,
        units: 'C',
        error: 0,
        greaterOrLess: 'exact',
      },
    },
    meltingOutcomes: [],
    boilingOutcomes: [],
    solubilitySheet: {
      coldWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      alkali: {
        nature: SolubilityNature.Soluble,
        adjective: Adjectives.Empty,
      },
      aceticAcid: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
    },
  },
};
