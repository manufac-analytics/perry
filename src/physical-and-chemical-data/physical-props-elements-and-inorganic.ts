const SolubilityFlavors = {
  Insoluble: 'insoluble',
  Soluble: 'soluble',
  Decomposes: 'decomposes',
} as const;
type SolubilityFlavors = typeof SolubilityFlavors[keyof typeof SolubilityFlavors];

interface Solubility {
  coldWater: SolubilityFlavors;
  hotWater: SolubilityFlavors;
  [key: string]: SolubilityFlavors;
}

interface PhysicalProperties {
  name: string;
  formula: string;
  formulaWeight: number;
  color: string;
  crystallineForm: string;
  refractiveIndex: number;
  specificGravity: number;
  meltingPointCelcius: number;
  boilingPointCelcius: number;
  solubility: Solubility;
}
