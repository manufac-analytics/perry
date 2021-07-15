import { MeltingPoint } from './melting-point';
import { SolubilitySheet } from './solubility';
import { SpecificGravity } from './specific-gravity';
import { Qualitative, Colors, CrystallineForms } from './utils';

export interface PhysicalProperties {
  name: string;
  formula: string;
  formulaWeight: number;
  color: Qualitative<Colors>;
  crystallineForm: Qualitative<CrystallineForms>;
  refractiveIndex: number;
  specificGravity: SpecificGravity;
  meltingPoint: MeltingPoint;
  boilingPoint: number;
  solubilitySheet: SolubilitySheet;
}
