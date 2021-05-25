const SolubilityIntensity = {
  Very: 'very',
  Slightly: 'slightly',
  Slowly: 'slowly',
  VerySlightly: 'very-slightly',
} as const;
type SolubilityIntensity = typeof SolubilityIntensity[keyof typeof SolubilityIntensity];

const SolubilityNature = {
  Insoluble: 'insoluble',
  Soluble: 'soluble',
  Decomposes: 'decomposes',
} as const;
type SolubilityNature = typeof SolubilityNature[keyof typeof SolubilityNature];

/**
 * Qualitative solubility information like:
 * - Insoluble
 * - Slightly soluble
 * - Very soluble
 * - Decomposes
 * - Decomposes slowly
 * - Very slighly soluble
 * - etc.
 */
interface QualitativeSolubility {
  nature: SolubilityNature;
  intensity: SolubilityIntensity;
}

/**
 * Given in parts by weight per 100 parts by weight of the solvent.
 * - Example: 10 g of the solute is soluble in 100 g of the solvent at 20 deg. C.
 * ```ts
 * {
 *    value: 10;
 *    temperatureCelsius: 20;
 *    gas: false;
 * }
 * ```
 * - Example: 5 cc the solute is soluble in 100 g of the solvent at 40 deg. C.
 * ```ts
 * {
 *    value: 5;
 *    temperatureCelsius: 40;
 *    gas: true;
 * }
 * ```
 */
interface QuantitativeSolubility {
  value: number;
  temperatureCelsius: number;
  gas: boolean;
}

type Solubility = QualitativeSolubility | QuantitativeSolubility;

interface SolubilitySheet {
  coldWater: Solubility;
  hotWater: Solubility;
  [key: string]: Solubility;
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
  solubilitySheet: SolubilitySheet;
}
