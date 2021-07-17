import { MeltingOutcome } from './melting-point';
import { SolubilitySheet } from './solubility';
import { SpecificGravity } from './specific-gravity';
import { Qualitative, Colors, CrystallineForms } from './utils';

export interface PhysicalProperties {
  name: string;
  formula: string;
  formulaWeight: number;
  color: Qualitative<Colors>;
  crystallineForm: Qualitative<CrystallineForms[] | CrystallineForms>;
  refractiveIndex: number;
  specificGravity: SpecificGravity;
  meltingOutcomes: MeltingOutcome[];
  boilingOutcomes: MeltingOutcome[];
  solubilitySheet: SolubilitySheet;
}
