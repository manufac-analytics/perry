import { SolubilitySheet } from './solubility';
import { SpecificGravity } from './specific-gravity';
import { Qualitative, Colors, CrystallineForms } from './utils';

export interface PhysicalProperties {
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