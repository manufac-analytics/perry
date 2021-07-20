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
