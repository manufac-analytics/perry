import { Measure } from './utils';

export const SpecificGravityReference = {
  Water: 'water',
  Air: 'air',
  Hydrogen: 'hydrogen',
} as const;
export type SpecificGravityReference = typeof SpecificGravityReference[keyof typeof SpecificGravityReference];

/**
 * Specific gravity
 * - Example: Substance at 25 deg. C has a specific gravity of 3.01 w.r.t. to water at 4 deg. C
 * ```ts
 * {
 *    value: 3.01;
 *    substanceTemperatureCelsius: 25;
 *    reference: SpecificGravityReference.Water;
 *    referenceTemperatureCelsius: 4;
 * }
 * ```
 * - Example: Substance at 15-20 deg. C has a specific gravity of 0.5971 w.r.t. to air at 15-20 deg. C
 * ```ts
 * {
 *    value: 0.5971;
 *    substanceTemperatureCelsius: NaN;
 *    reference: SpecificGravityReference.Air;
 *    referenceTemperatureCelsius: NaN;
 * }
 * ```
 *  * - Example: Substance at 15-20 deg. C has a specific gravity of 2.42 w.r.t. to water at 15-20 deg. C
 * ```ts
 * {
 *    value: 2.42;
 *    substanceTemperatureCelsius: NaN;
 *    reference: SpecificGravityReference.Water;
 *    referenceTemperatureCelsius: NaN;
 * }
 * ```
 */
export interface SpecificGravity {
  value: number;
  substanceTemperature?: Measure;
  reference: SpecificGravityReference;
  referenceTemperature?: Measure;
}
