import {
  Adjectives,
  SpecificGravityReference,
  MeltingNature,
  MeasureKind,
  SolubilityNature,
} from './enums';

export interface Qualitative<T> {
  nature: T;
  adjective?: Adjectives;
}

export interface Measure {
  value: number;
  units?: string;
  error?: number;
  greaterOrLess?: MeasureKind;
}

export interface MeasureRange {
  min: Measure;
  max: Measure;
  includeMin?: boolean;
  includeMax?: boolean;
}

export interface INCHIProps {
  inchiString: string;
  inchiKey: string;
  molecularWeight: number;
}

/**
 * Vapor pressure Ps is calculated by Ps = exp(C1 + C2/T + C3 ln(T) + C4T C5),
 * where Ps is in Pa and T is in K.
 */
export interface DIPPRVaporPressureProps {
  name: string;
  formula: string;
  CAS: string;
  C1: number;
  C2: number;
  C3: number;
  C4: number;
  C5: number;
  minimumTemperature: number;
  maximumTemperature: number;
  pressureAtMinimumTemperature: number;
  pressureAtMaximumTemperature: number;
}

export interface DIPPRDensityProps {
  name: string;
  formula: string;
  CAS: string;
  C1: number;
  C2: number;
  C3: number;
  C4: number;
  C5?: number;
  C6?: number;
  C7?: number;
  minimumTemperature: number;
  maximumTemperature: number;
  densityAtMinimumTemperature: number;
  densityAtMaximumTemperature: number;
}

export interface SpecificGravity {
  value: number;
  substanceTemperature?: Measure;
  reference: SpecificGravityReference;
  referenceTemperature?: Measure;
}

/**
 * Given in parts by weight per 100 parts by weight of the solvent.
 * - Example: 10 g of the solute is soluble in 100 g of the solvent at 20 deg. C.
 * ```ts
 * {
 *    value: 10;
 *    temperature: {value: 20, units: "C"};
 *    gas: false;
 * }
 * ```
 * - Example: 5 cc the solute is soluble in 100 g of the solvent at 40 deg. C.
 * ```ts
 * {
 *    value: 5;
 *    temperature: {value: 20, units: "C"};
 *    gas: true;
 * }
 * ```
 */
export interface QuantitativeSolubility {
  value: number | string;
  temperature?: Measure;
  gas: boolean;
}

export interface QualitativeSolubility extends Qualitative<SolubilityNature> {
  decomposesTo?: string;
  formsEntity?: string;
}

export interface SolubilitySheet {
  coldWater?: QualitativeSolubility | QuantitativeSolubility;
  hotWater?: QualitativeSolubility | QuantitativeSolubility;
  [key: string]: QualitativeSolubility | QuantitativeSolubility | undefined;
}

export interface TemperaturePressureCombo {
  temperature: Measure | MeasureRange;
  pressure: Measure | MeasureRange;
}

export interface MeltingOutcome extends TemperaturePressureCombo {
  nature: MeltingNature;
  loosesMoles?: number;
  loosesEntity?: string;
  transitionsTo?: string;
  sublimesIn?: string;
}
