import {
  Qualitative,
  Measure,
  MeasureRange,
  MeltingOutcome,
  SolubilitySheet,
  SpecificGravity,
} from './utils';
import { Colors, CrystallineForms } from './enums';

export interface PhysicalProperties {
  name: string;
  formula: string;
  formulaWeight: number;
  color?: Qualitative<Colors>[] | Qualitative<Colors>;
  crystallineForms?:
    | Qualitative<CrystallineForms>[]
    | Qualitative<CrystallineForms>;
  refractiveIndex?: Measure | MeasureRange;
  specificGravity?: SpecificGravity;
  meltingOutcomes: MeltingOutcome[];
  boilingOutcomes: MeltingOutcome[];
  solubilitySheet: SolubilitySheet;
}
