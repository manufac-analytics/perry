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
};
