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

/**
 * Vapor pressure `Ps` is calculated by `Ps = exp(C1 + C2/T + C3 ln(T) + C4*T^C5)`, where `Ps` is in `Pa` and `T` is in `K`.
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

/**
 * - Except for o-terphenyl and water, liquid density is calculated by `rho = C1/(C2^[1 + (1 – T/C3)^C4])` where `rho` is in `mol/dm3` and `T` is in `K`.
 * - The pressure is equal to the vapor pressure for pressures greater than 1 atm and equal to 1 atm when the vapor pressure is less than 1 atm.
 * - Equation used for the limited temperature ranges as noted for o-terphenyl and water, is `rho = C1 + C2*T + C3*T^2 + C4*T^3`.
 * - Equation used for water, is `rho = C1 + C2*(tau^1/3) + C3*(tau^2/3) + C4*(tau^5/3) + C5*(tau^16/3) + C6*(tau^43/3) + C7*(tau^110/3)` where `tau = 1 − T/TC`, and `TC = critical temperature (647.096 K)`.
 */
export interface DIPPRDensityProps {
  name: string;
  formula: string;
  CAS: string;
  molecularWeight: number;
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

/**
 * The liquid thermal conductivity is calculated by `k = C1 + C2*T + C3*T^2 + C4*T^3 + C5*T^4`
 * where `k` is the thermal conductivity in `W/(m∙K)` and `T` is the temperature in `K`.
 * Thermal conductivities are at either `1 atm` or the vapor pressure, whichever is higher.
 */
export interface DIPPRThermalConductivityProps {
  name: string;
  formula: string;
  CAS: string;
  molecularWeight: number;
  C1: number;
  C2: number;
  C3?: number;
  C4?: number;
  C5?: number;
  minimumTemperature: number;
  maximumTemperature: number;
  thermalConductivityAtMinimumTemperature: number;
  thermalConductivityAtMaximumTemperature: number;
}
