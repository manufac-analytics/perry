import { Colors } from './colors';
import { CrystallineForms } from './crystalline-forms';
import { SolubilitySheet } from './solubility';
import { Qualitative } from './utils';

export interface PhysicalProperties {
  name: string;
  synonyms: string[];
  formula: string;
  formulaWeight: number;
  color: Qualitative<Colors>[];
  crystallineForm: Qualitative<CrystallineForms>[];
  refractiveIndex: number;
  specificGravity: number;
  meltingPointCelcius: number;
  boilingPointCelcius: number;
  solubilitySheet: SolubilitySheet;
}
