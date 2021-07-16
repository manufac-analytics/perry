import { MeltingNature, MeltingOutcome } from './melting-point';
import { SolubilityNature, SolubilitySheet } from './solubility';
import { SpecificGravity, SpecificGravityReference } from './specific-gravity';
import { Qualitative, Colors, CrystallineForms, Adjectives } from './utils';

export interface PhysicalProperties {
  name: string;
  formula: string;
  formulaWeight: number;
  color: Qualitative<Colors>;
  crystallineForm: Qualitative<CrystallineForms>;
  refractiveIndex: number;
  specificGravity: SpecificGravity;
  meltingOutcomes: MeltingOutcome[];
  boilingOutcomes: MeltingOutcome[];
  solubilitySheet: SolubilitySheet;
}

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
      substanceTemperatureCelsius: 20,
      reference: SpecificGravityReference.Water,
      referenceTemperatureCelsius: NaN,
    },
    meltingOutcomes: [
      {
        nature: MeltingNature.Melts,
        temperature: {
          value: 660,
          units: 'deg C',
          error: 0,
          greaterOrLess: 'exact',
        },
        pressure: {
          value: 1,
          units: 'atm',
          error: 0,
          greaterOrLess: 'exact',
        },
      },
    ],
    boilingOutcomes: [
      {
        nature: MeltingNature.Melts,
        temperature: {
          value: 2056,
          units: 'deg C',
          error: 0,
          greaterOrLess: 'exact',
        },
        pressure: {
          value: 1,
          units: 'atm',
          error: 0,
          greaterOrLess: 'exact',
        },
      },
    ],
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
