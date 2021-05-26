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
  color: Qualitative<Colors>;
  crystallineForm: Qualitative<CrystallineForms>;
  refractiveIndex: number;
  specificGravity: SpecificGravity;
  meltingPointCelcius: number;
  boilingPointCelcius: number;
  solubilitySheet: SolubilitySheet;
}

export const InorganicCompounds: Record<string, PhysicalProperties> = {
  NormalAluminumAcetate: {
    name: 'Aluminum acetate (normal)',
    synonyms: [],
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
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingPointCelcius: 660,
    boilingPointCelcius: 2056,
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
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      H2SO4: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
      alkali: {
        nature: SolubilityNature.Insoluble,
        adjective: Adjectives.Empty,
      },
    },
  },
};
