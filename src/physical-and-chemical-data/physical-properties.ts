import { Colors } from './colors';
import { CrystallineForms } from './crystalline-forms';
import { SolubilitySheet, SolubilityNature } from './solubility';
import { SpecificGravity, SpecificGravityReference } from './specific-gravity';
import { Qualitative } from './utils';

interface PhysicalProperties {
  name: string;
  synonyms: string[];
  formula: string;
  formulaWeight: number;
  color?: Qualitative<Colors>;
  crystallineForm: Qualitative<CrystallineForms[]>;
  refractiveIndex: number;
  specificGravity?: SpecificGravity;
  meltingPointCelcius?: number;
  boilingPointCelcius?: number;
  solubilitySheet: SolubilitySheet;
}

export const InorganicCompounds: Record<string, PhysicalProperties> = {
  Aluminum: {
    name: 'Aluminum',
    synonyms: [],
    formula: 'Al',
    formulaWeight: 26.98,
    color: { nature: Colors.Silver, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Cubic],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 2.7,
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingPointCelcius: 660,
    boilingPointCelcius: 2056,
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
      HCl: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      H2SO4: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      alkali: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
    },
  },
  NormalAluminumAcetate: {
    name: 'Aluminum acetate (normal)',
    synonyms: [],
    formula: 'Al(C2H3O2)3',
    formulaWeight: 204.11,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Powder],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    meltingPointCelcius: 200,
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: [SolubilityNature.Decomposes],
        adjective: Adjectives.Empty,
      },
    },
  },
  BasicAluminumAcetate: {
    name: 'Aluminum acetate (basic)',
    synonyms: [],
    formula: 'Al(OH)(C2H3O2)2',
    formulaWeight: 162.08,
    color: { nature: Colors.White, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Amorphous],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    meltingPointCelcius: 50,
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      NH4Salts: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumBromide: {
    name: 'Aluminum bromide',
    synonyms: [],
    formula: 'AlB3',
    formulaWeight: 266.69,
    crystallineForm: {
      nature: [CrystallineForms.Trigonal],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: NaN,
    specificGravity: {
      value: 3.01,
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingPointCelcius: 97.5,
    boilingPointCelcius: 268,
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      EthylAlcohol: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      Acetone: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      CS2: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumCarbide: {
    name: 'Aluminum carbide',
    synonyms: [],
    formula: 'Al4C3',
    formulaWeight: 143.96,
    color: { nature: Colors.Yellow, adjective: Adjectives.Empty },
    crystallineForm: {
      nature: [CrystallineForms.Hexagonal],
      adjective: Adjectives.Empty,
    },
    refractiveIndex: 2.7,
    specificGravity: {
      value: 2.95,
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingPointCelcius: 2200, // Needs to be rechecked
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Decomposes], // decomposes to CH4 ? does CH4 needs to be stored
        adjective: Adjectives.Empty,
      },
      acid: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      Acetone: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
    },
  },

  AluminumChloride: {
    name: 'Aluminum chloride',
    synonyms: [],
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
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingPointCelcius: 194, // Needs to be rechecked
    boilingPointCelcius: 182.7,
    solubilitySheet: {
      coldWater: {
        nature: [SolubilityNature.Decomposes], // decomposes to CH4 ? does CH4 needs to be stored
        adjective: Adjectives.Empty,
      },
      hotWater: {
        nature: [SolubilityNature.Soluble, SolubilityNature.Decomposes],
        adjective: Adjectives.Empty,
      },
      ethyl: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      ether: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      chloroform: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      CCl4: {
        nature: [SolubilityNature.Soluble],
        adjective: Adjectives.Empty,
      },
      benzene: {
        nature: [SolubilityNature.Insoluble],
        adjective: Adjectives.Empty,
      },
    },
  },
};
